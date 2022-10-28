
export function storeAccessToken(accessToken) {
  try {
    localStorage.setItem("@accessToken", JSON.stringify(accessToken));
  } catch (e) {
  }
}

export function getAccessToken() {
  if(localStorage.getItem("@accessToken" === undefined)) {
    return undefined;
  }
  const accessToken = JSON.parse(localStorage.getItem("@accessToken"));
  if (accessToken !== null) {
    return accessToken;
  }

}

export function removeAccessToken() {
  try {
    localStorage.removeItem("@accessToken");
  } catch (e) {
  }
}

export function storeRefreshToken(token) {
  try {
    localStorage.setItem("@refreshToken", JSON.stringify(token));
  } catch (e) {
  }
}

export function getRefreshToken() {
  if(localStorage.getItem("@refreshToken" === undefined)) {
    return undefined;
  }
  let token = JSON.parse(localStorage.getItem("@refreshToken"))
  if (token !== null) {
    return token;
  }
}

export function removeRefreshToken() {
  try {
    localStorage.removeItem("@refreshToken");
  } catch (e) {
  }
}
