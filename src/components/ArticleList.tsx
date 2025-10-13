import React from "react";
import { Card, Row, Skeleton } from "antd";
import { Article } from "@/types/types";
import ArticleCard from "./ArticleCard";

// You'll need to replace undefined with the correct type
const ArticleList: React.FC<undefined> = () => (
  /**
   * This component renders a list of articles. It takes as input an array of articles and a boolean indicating whether the list is loading.
   * You will need to write a props interface for this component.
   *
   * You should use your custom ArticleCard component to build this.
   * No data manipulation is needed here.
   * Don't forget to add a unique key prop to each ArticleCard.
   * Don't forget to add a Skeleton component for when the list is loading. You might need conditional render logic for this
   *
   */
  <div>Build me</div>
);

export default ArticleList;
