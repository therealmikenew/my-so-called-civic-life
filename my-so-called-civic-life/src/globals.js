export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://my-so-called-backend.herokuapp.com"
    : "http://127.0.0.1:8000";
