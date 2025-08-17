
export interface NewsItem {
  id: string;
  title: string;
  publishedAt: string;
  image: any;
}
export interface Article {
  title: string;
  description: string;
  urlToImage: string;
  publishedAt:string,
  source: {
    id:string, 
    name:string
  };
}
