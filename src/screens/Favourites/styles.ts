import { StyleSheet } from "react-native";

export const favouriteStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  date: {
    color: "gray",
  },
  removeBtn: {
    marginTop: 8,
    padding: 8,
    backgroundColor: "red",
    borderRadius: 6,
  },
  removeText: {
    color: "white",
    textAlign: "center",
  },
});
