import axios from "axios";
import jwt_decode from "jwt-decode";

import * as storage from "./BarStorageService";

const api_url = "https://tungstun-bar-api.herokuapp.com/api";

const api = axios.create({
  baseURL: "https://tungstun-bar-api.herokuapp.com/api",
});

api.defaults.headers.common["token_type"] = "bearer";
api.defaults.headers.common["Accept"] = "application/json";
api.defaults.headers.common["Content-Type"] = "application/json";
api.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export function checkTokenValidity(token) {
  if (token === undefined || token === null) {
    return false;
  }

  let decoded = jwt_decode(token);
  return (
    new Date(decoded.exp * 1000) > new Date() &&
    decoded.iss === "com-tungstun-bar-api"
  );
}

api.interceptors.response.use(
  async function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    let refreshToken = storage.getRefreshToken();
    let accessToken = storage.getAccessToken();
    if (
      refreshToken &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      return api
        .post("/authenticate/refresh", {
          refreshToken: refreshToken,
          accessToken: accessToken,
        })
        .then(async (res) => {
          if (res.status === 200) {
            storage.storeAccessToken(res.headers.access_token);
            let headers = originalRequest.headers;
            headers.access_token = res.headers.access_token;
            originalRequest.headers = headers;
            return api(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
);

async function getRequest(url) {
  const accessToken = storage.getAccessToken();

  return api
    .get(url, { headers: { access_token: accessToken } })
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      throw e;
    });
}

export async function login(email, password) {
  let data = { username: email, password: password };
  let tokens = null;

  tokens = await fetch(api_url + "/authenticate", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        console.log(response.headers);
        if (response.headers.get("access_token")) {
          return {
            accessToken: response.headers.get("access_token"),
            refreshToken: response.headers.get("refresh_token"),
          };
        }
      } else {
        throw new Error("Credentials are not ok!");
      }
    })
    .catch((error) => {
      throw error;
    });
  storage.storeAccessToken(tokens.accessToken);
  storage.storeRefreshToken(tokens.refreshToken);

  return true;
}

export async function logout() {
  storage.removeAccessToken();
  storage.removeRefreshToken();
}

export async function signUp(email, userName, password, firstName, lastName) {
  await api.post(`/register`, {
    firstName: firstName,
    lastName: lastName,
    mail: email,
    password: password,
    username: userName,
  });
}

export async function getOwnedBars() {
  return getRequest(`/bars/owned`);
}

export async function getBarById(barId) {
  return getRequest(`/bars/${barId}`);
}

export async function getCustomersOfBar(barId) {
  return getRequest(`/bars/${barId}/people`);
}

export async function getSessionsOfBar(barId) {
  return getRequest(`/bars/${barId}/sessions`);
}

export async function getStatisticsOfBar(barId) {
  return getRequest(`/bars/${barId}/statistics`);
}

export async function getStatisticsOfCustomer(barId) {
  return getRequest(`/bars/${barId}/statistics`);
}

export async function getCustomerOfBar(barId, customerId) {
  return getRequest(`/bars/${barId}/people/${customerId}`);
}

export async function getAccountById(accountId) {
  return getRequest(`/account/${accountId}`)
}
