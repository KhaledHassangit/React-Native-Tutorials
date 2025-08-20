import { create } from "zustand";
import { NewsItem } from "../constants/types"; // بدل Article

interface FavouritesState {
  favourites: NewsItem[];
  addFavourite: (item: NewsItem) => void;
  removeFavourite: (id: string) => void;
  isFavourite: (id: string) => boolean;
}

export const useFavourites = create<FavouritesState>((set, get) => ({
  favourites: [],
  addFavourite: (item) =>
    set((state) => ({
      favourites: [...state.favourites, item],
    })),
  removeFavourite: (id) =>
    set((state) => ({
      favourites: state.favourites.filter((i) => i.id !== id),
    })),
  isFavourite: (id) => get().favourites.some((i) => i.id === id),
}));
