import React from 'react';
import { View, Text, ImageBackground, FlatList, ListRenderItem } from 'react-native';
import { styles } from './styles';

interface NewsItem {
  id: string;
  title: string;
  publishedAt: string;
  image: any; 
}

const MainNews = () => {
  const dummyNews: NewsItem[] = [
    {
      id: '1',
      title: 'Breaking News: React Native 0.72 Released',
      publishedAt: '2023-03-15',
      image: require('../../../assets/images/bg.webp'),
    },
    {
      id: '2',
      title: 'Tech Giants Invest in AI',
      publishedAt: '2023-03-16',
      image: require('../../../assets/images/bg.webp'),
    },
    {
      id: '3',
      title: 'Mobile Development Trends for 2025',
      publishedAt: '2023-03-17',
      image: require('../../../assets/images/bg.webp'),
    },
  ];

  const renderNews: ListRenderItem<NewsItem> = ({ item }) => {
    return (
      <ImageBackground
        resizeMode="center"
        source={item.image}
        style={styles.container}
      >
        <View style={styles.whiteDev}>
          <View style={styles.RedDev}>
            <Text style={styles.deadlineText}>{item.title}</Text>
          </View>
          <Text style={styles.name}>Published at: {item.publishedAt}</Text>
        </View>
      </ImageBackground>
    );
  };

  return (
    <FlatList
      data={dummyNews}
      renderItem={renderNews}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default MainNews;
