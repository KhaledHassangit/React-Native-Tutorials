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
  Home: undefined;
  ArticleDetails: { article: NewsItem }; 
};
