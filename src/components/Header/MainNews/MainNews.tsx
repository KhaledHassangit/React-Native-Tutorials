/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, FlatList, ListRenderItem, Button } from 'react-native';
import { styles } from './styles';
import { getTopHeadlines } from '../../../api/baseURL';
import { Article, NewsItem } from '../../../types/types';

const MainNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  // Fetch news from API
  const getNews = async () => {
    try {
      const data = await getTopHeadlines();
      const articles = data?.articles?.map((article: Article, index: number) => ({
        id: index.toString(),
        title: article.title || "No title",
        publishedAt: article.publishedAt?.split("T")[0] || "Unknown date",
        image: { uri: article.urlToImage || "https://via.placeholder.com/300" }
      }));
      setNews(articles);
    } catch (error) {
      console.error("Error loading news:", error);
    }
  };

  // Add dummy news manually
  const addNews = () => {
    const newArticle: NewsItem = {
      id: (news.length + 1).toString(),
      title: 'New Article: Added Dynamically',
      publishedAt: new Date().toISOString().split('T')[0],
      image: require('../../../assets/images/bg.webp'),
    };
    setNews((prevNews) => [...prevNews, newArticle]);
  };

  // Render single news item
  const renderNews: ListRenderItem<NewsItem> = ({ item }) => {
    return (
      <ImageBackground
        resizeMode="cover"
        source={item.image}
        style={styles.container}>
        <View style={styles.whiteDev}>
          <View style={styles.RedDev}>
            <Text style={styles.deadlineText}>{item.title}</Text>
          </View>
          <Text style={styles.name}>Published at: {item.publishedAt}</Text>
        </View>
      </ImageBackground>
    );
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Button title="Add News" onPress={addNews} />

      <FlatList
        data={news}
        renderItem={renderNews}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default MainNews;
