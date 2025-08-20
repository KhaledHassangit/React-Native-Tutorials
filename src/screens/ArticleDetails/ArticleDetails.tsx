/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { SharedStackParamList } from "../../constants/types";
import { ROUTES } from "../../constants/enmus";
import { useFavourites } from "../../store/useFavourites"; 

type ArticleDetailsRouteProp = RouteProp<SharedStackParamList, ROUTES.ARTICLE_DETAILS>;

const ArticleDetails = () => {
  const { params } = useRoute<ArticleDetailsRouteProp>();
  const { article } = params;
  const { goBack } = useNavigation();

  const { addFavourite, removeFavourite, isFavourite } = useFavourites();
  const fav = isFavourite(article?.id); 

  const toggleFavourite = () => {
    if (fav) {
      removeFavourite(article?.id);
    } else {
      addFavourite(article);
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <Text onPress={goBack} style={{ marginBottom: 10 }}>
        Go Back
      </Text>

      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{article?.title}</Text>

      <Image source={article?.image} style={{ width: "100%", height: 200, marginVertical: 10 }} />

      <Text>Published at: {article?.publishedAt}</Text>

      <TouchableOpacity
        onPress={toggleFavourite}
        style={{
          marginTop: 16,
          padding: 12,
          backgroundColor: fav ? "red" : "green",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          {fav ? "Remove from Favourites" : "Add to Favourites"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ArticleDetails;
