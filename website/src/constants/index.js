export const IS_SERVER = typeof window === "undefined" && false;

export const SERVER_URL = "http://localhost:1337";

export const API_URL = `${SERVER_URL}/api`;

const IS_PRODUCTION = process.env.NODE_ENV === "production";

export const ASSETS_URL = IS_PRODUCTION
  ? SERVER_URL
  : "https://1337-monospace-jl-elegant-look-1713103183402.cluster-76blnmxvvzdpat4inoxk5tmzik.cloudworkstations.dev";

export const ENDPOINTS = {
  COMMON: "/common",
};