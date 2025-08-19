/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View, Text, Image } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../constants/types";

type ArticleDetailsRouteProp = RouteProp<RootStackParamList, "ArticleDetails">;

const ArticleDetails = () => {
  const { params } = useRoute<ArticleDetailsRouteProp>();
  const { article } = params;
  const {goBack} = useNavigation()
  return (
    <View>
      <Text onPress={goBack}> Go Back</Text>
      <Text>{article?.title}</Text>
      <Image source={article?.image} style={{ width: "100%", height: 200 }} />
      <Text>Published at: {article?.publishedAt}</Text>
    </View>
  );
};

export default ArticleDetails;
