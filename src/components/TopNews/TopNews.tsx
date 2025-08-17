import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { styles } from "./styles";
import { useNews } from "../../hooks/useNews";

const TopNews = () => {
  const { articles, loading } = useNews();

  if (loading) return <Text>Loading...</Text>;

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.urlToImage }} style={styles.cardImage} />
      <Text style={styles.cardName}>{item.title}</Text>
      <Text style={styles.cardDate}>{item.publishedAt}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Top News</Text>
      {articles.length > 0 ? (
        <FlatList
          data={articles}
          keyExtractor={(item, index) => item.id || index.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          scrollEnabled={false}
        />
      ) : (
        <Text>No news available</Text>
      )}
    </View>
  );
};

export default TopNews;
