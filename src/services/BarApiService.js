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
          console.log(response.headers)
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

// export async function createSession(name) {
//   await api.post(`/bars/${await storage.getActiveBar()}/sessions`, {
//     name: name,
//   });
// }

// export async function payBill(sessionId, billId) {
//   await api.patch(
//     `/bars/${await storage.getActiveBar()}/sessions/${sessionId}/bills/${billId}?isPayed=true`,
//   );
// }

// export async function deleteCustomer(customerId) {
//   await api.delete(
//     `/bars/${await storage.getActiveBar()}/people/${customerId}`,
//   );
// }

// export async function getSearchResults(searchString) {
//   return await getRequest(
//     `/bars/${await storage.getActiveBar()}/products/search?name=${searchString}`,
//   );
// }

// export async function addDrink(billId, drinkId, sessionId, amount) {
//   await api.put(
//     `/bars/${await storage.getActiveBar()}/sessions/${sessionId}/bills/${billId}`,
//     {
//       amount: amount,
//       bartenderId: 1,
//       productId: drinkId,
//     },
//   );
// }

// export async function createProduct(
//   name,
//   brand,
//   selectedCategory,
//   isFavourite,
//   sellingPrice,
//   size,
// ) {
//   return api.post(`/bars/${await storage.getActiveBar()}/products`, {
//     brand: brand,
//     categoryId: selectedCategory,
//     isFavorite: isFavourite,
//     name: name,
//     price: sellingPrice,
//     size: size,
//   });
// }

// export async function addCustomerToSession(sessionId, customerId) {
//   await api.post(
//     `/bars/${await storage.getActiveBar()}/sessions/${sessionId}/`,
//     {
//       customerId: customerId,
//     },
//   );
// }

// export async function deleteOrderFromBill(sessionId, billId, itemId) {
//   return api.delete(
//     `/bars/${await storage.getActiveBar()}/sessions/${sessionId}/bills/${billId}/orders/${itemId}`,
//   );
// }

// export async function deleteBill(sessionId, billId) {
//   return api.delete(
//     `/bars/${await storage.getActiveBar()}/sessions/${sessionId}/bills/${billId}`,
//   );
// }

// export async function getDrinksByCategory(categoryId) {
//   return getRequest(
//     `/bars/${await storage.getActiveBar()}/products?categoryId=${categoryId}`,
//   );
// }

// export async function getFavouriteProducts() {
//   return getRequest(
//     `/bars/${await storage.getActiveBar()}/products?onlyFavorites=true`,
//   );
// }

// export async function getProductById(productId) {
//   return getRequest(
//     `/bars/${await storage.getActiveBar()}/products/${productId}`,
//   );
// }

// export async function updateCategory(categoryId, newName, newType) {
//   return api.put(
//     `/bars/${await storage.getActiveBar()}/categories/${categoryId}`,
//     {
//       name: newName,
//       type: newType,
//     },
//   );
// }

// export async function createCategory(name, type) {
//   return api.post(`/bars/${await storage.getActiveBar()}/categories`, {
//     name: name,
//     productType: type,
//   });
// }

// export async function getCategoryById(categoryId) {
//   return getRequest(
//     `/bars/${await storage.getActiveBar()}/categories/${categoryId}`,
//   );
// }

// export async function getAllProductsByBar() {
//   return getRequest(`/bars/${await storage.getActiveBar()}/products`);
// }

// export async function createCustomer(name, phone) {
//   return api
//     .post(`/bars/${await storage.getActiveBar()}/people`, {
//       name: name,
//       phoneNumber: phone,
//     })
//     .then((response) => {
//       return response.data;
//     });
// }

// export async function updateCustomer(id, name, phone) {
//   return api
//     .put(`/bars/${await storage.getActiveBar()}/people/${id}`, {
//       name: name,
//       phoneNumber: phone,
//     })
//     .then((response) => {
//       return response.data;
//     });
// }

// export async function getBillsByCustomerId(id) {
//   return getRequest(
//     `/bars/${await storage.getActiveBar()}/people/${id}/bills`,
//   );
// }

// export async function getBarById(id) {
//   return getRequest(`/bars/${id}`);
// }

// export async function getBars() {
//   return getRequest(`/bars`);
// }

// export async function getBillByBillIdAndSessionId(billId, sessionId) {
//   return getRequest(
//     `/bars/${await storage.getActiveBar()}/sessions/${sessionId}/bills/${billId}`,
//   );
// }

// export async function getOrdersByBillId(sessionId, billId) {
//   return getRequest(
//     `/bars/${await storage.getActiveBar()}/sessions/${sessionId}/bills/${billId}/orders`
//   )
// }

// export async function getCurrentSession() {
//   return getRequest(
//     `/bars/${await storage.getActiveBar()}/sessions/active`,
//   );
// }

// export async function getAllCustomersByBarId() {
//   return getRequest(`/bars/${await storage.getActiveBar()}/people`);
// }

// export async function getCategories() {
//   return getRequest(`/bars/${await storage.getActiveBar()}/categories`);
// }

// export async function getCustomerById(id) {
//   return getRequest(`/bars/${await storage.getActiveBar()}/people/${id}`);
// }

// export async function lockSession(sessionId) {
//   return api.patch(
//     `/bars/${await storage.getActiveBar()}/sessions/${sessionId}/lock`,
//   );
// }

// export async function getOrdersBySessionId(id) {
//   return getRequest(
//     `/bars/${await storage.getActiveBar()}/sessions/${id}/orders`,
//   );
// }

// export async function getAllSessions() {
//   return getRequest(`/bars/${await storage.getActiveBar()}/sessions`);
// }

// export async function getSessionById(sessionId) {
//   return getRequest(
//     `/bars/${await storage.getActiveBar()}/sessions/${sessionId}`,
//   );
// }

// export async function updateProduct(
//   productId,
//   name,
//   brand,
//   selectedCategoryId,
//   isFavourite,
//   sellingPrice,
//   size,
// ) {
//   return api.put(
//     `/bars/${await storage.getActiveBar()}/products/${productId}`,
//     {
//       name: name,
//       brand: brand,
//       categoryId: selectedCategoryId,
//       isFavorite: isFavourite,
//       price: sellingPrice,
//       size: size,
//     },
//   );
// }

// export async function createBar(name, address, mail, phone) {
//   return api.post(`/bars`, {
//     address: address,
//     mail: mail,
//     name: name,
//     phoneNumber: phone,
//   });
// }
