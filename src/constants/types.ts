import { StackNames } from './enmus';
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
  [StackNames.ARTICLE_STACK]: { article: NewsItem };
};
