import { useEffect, useState } from "react";
import { getTopHeadlines } from "../api/baseURL";
import { Article } from "../types/types";

export const useNews = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const data = await getTopHeadlines();
      const mappedArticles: Article[] = data?.articles?.map((article: any, index: number) => ({
        id: index.toString(),
        title: article.title || "No title",
        description: article.description || "",
        urlToImage: article.urlToImage || "https://via.placeholder.com/300",
        publishedAt: article.publishedAt?.split("T")[0] || "Unknown date",
        source: {
          id: article.source?.id || "",
          name: article.source?.name || "Unknown source",
        },
      })) || [];

      setArticles(mappedArticles);
    } catch (error) {
      console.error("Error loading news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return { articles, loading, refetch: fetchNews };
};
