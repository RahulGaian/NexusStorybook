import MostReadArticles from ".";
import { articlesData } from "./data";

export default {
  title: "Components / MostReadArticles",
  component: MostReadArticles,
};

export const Default = () => <MostReadArticles data={articlesData.card}/>