import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "red",
    marginBottom: 12,
  },
  listContainer: {
    flexDirection: "column",
    gap: 12, 
    marginTop:10
  },
  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 6,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#222",
  },
  cardDate: {
    fontSize: 12,
    color: "gray",
  },
});
