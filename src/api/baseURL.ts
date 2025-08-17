import axios from "axios";

const api = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    "Content-Type": "application/json"
  }
});

export const getTopHeadlines = async () => {
  try {
    const response = await api.get("/top-headlines", {
      params: {
        country: "us",
        apiKey: "b45d74b92cfe49df81c7c7bd73bebfe0"
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    throw error;
  }
};
