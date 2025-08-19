import { ROUTES, StackNames } from './enmus';
import { NavigatorScreenParams } from "@react-navigation/native";

export interface NewsItem {
  id: string;
  title: string;
  publishedAt: string;
  image: any;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
}
export type RootStackParamList = {
  [StackNames.HOME_STACK]: undefined;
  [StackNames.AUTH_STACK]: undefined;
  [StackNames.MAIN_TABS]: undefined;
  [StackNames.SHARED_STACK]: NavigatorScreenParams<SharedStackParamList>;
  [StackNames.ARTICLE_STACK]: { article: NewsItem };
};
 
export type SharedStackParamList = {
  [ROUTES.ARTICLE_DETAILS]: { article: NewsItem };
};
