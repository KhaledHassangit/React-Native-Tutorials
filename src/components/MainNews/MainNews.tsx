import React from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Button,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { styles } from "./styles";
import { useNews } from "../../hooks/useNews";
import { NewsItem, RootStackParamList } from "../../constants/types";
import { ROUTES } from "../../constants/enmus";

type NavProp = StackNavigationProp<RootStackParamList, "Home">;

const MainNews = () => {
  const navigation = useNavigation<NavProp>();

  const { articles, loading, refetch } = useNews();

  const news: NewsItem[] = articles.map((a) => ({
    id: a.id,
    title: a.title,
    publishedAt: a.publishedAt,
    image: { uri: a.urlToImage },
  }));

  if (loading) return <Text>Loading...</Text>;

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1 }}>
      <Button title="Refresh News" onPress={refetch} />
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate(ROUTES.ARTICLE_DETAILS, { article: item })
            }>
            <ImageBackground
              resizeMode="cover"
              source={item.image}
              style={styles.container}
            >
              <View style={styles.whiteDev}>
                <View style={styles.RedDev}>
                  <Text style={styles.deadlineText}>{item.title}</Text>
                </View>
                <Text style={styles.name}>
                  Published at: {item.publishedAt}
                </Text>
              </View>
            </ImageBackground>
          </Pressable>
        )}
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
