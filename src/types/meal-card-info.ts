export type MealCardInfo = {
  id: number;
  imageUrl: string;
  carbs: number;
  protein: number;
  fats: number;
  calories: number;
  likes: number;
  day: string | undefined;
  foodTime: string | undefined;
  title: string;
  duration: number;
};