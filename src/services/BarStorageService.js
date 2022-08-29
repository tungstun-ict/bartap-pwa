import { localStorage } from "react";

export function storeAccessToken(accessToken) {
  try {
    localStorage.setItem("@accessToken", JSON.stringify(accessToken));
  } catch (e) {
    console.error("Could not store access token.", e);
  }
}

export function getAccessToken() {
  const accessToken = JSON.parse(localStorage.getItem("@accessToken"));
  if (accessToken !== null) {
    return accessToken;
  }

  console.error("Could not retrieve access token.");
}

export function removeAccessToken() {
  try {
    localStorage.removeItem("@accessToken");
  } catch (e) {
    console.error("Could not remove access token", e);
  }
}

export function storeRefreshToken(token) {
  try {
    localStorage.setItem("@refreshToken", JSON.stringify(token));
  } catch (e) {
    console.error("Could not store refresh token", e);
  }
}

export function getRefreshToken() {
  const token = JSON.parse(localStorage.getItem("@refreshToken"));
  if (token !== null) {
    return token;
  }
  console.error("Could not retrieve refresh token");
}

export function removeRefreshToken() {
  try {
    localStorage.removeItem("@refreshToken");
  } catch (e) {
    console.error("Could not remove refresh token.", e);
  }
}
