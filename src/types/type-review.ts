// данные пользователя
export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

// данные отзыва
export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};
