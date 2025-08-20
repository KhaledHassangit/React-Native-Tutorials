import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useFavourites } from "../../store/useFavourites";
import { favouriteStyles as styles } from "./styles"; 

const FavouriteScreen = () => {
  const { favourites, removeFavourite } = useFavourites();

  if (favourites?.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text>No favourites yet</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favourites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={item.image || { uri: item.image }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.publishedAt}</Text>

            <TouchableOpacity
              onPress={() => removeFavourite(item.id)}
              style={styles.removeBtn}
            >
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default FavouriteScreen;
