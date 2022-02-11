export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://my-so-called-backend.herokuapp.com"
    : "http://localhost:8000";
