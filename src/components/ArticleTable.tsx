import React from "react";
import { Table } from "antd";
import { Article } from "@/types/types";

interface ArticleTableProps {
  articles: Article[];
  loading: boolean;
}

const ArticleTable: React.FC<ArticleTableProps> = ({ articles, loading }) => {
  /**
   * This component renders a table of articles. It takes as input an array of articles and a boolean indicating whether the table is loading.
   * You should use the Antd Table component to build this.
   * No data manipulation is needed here.
   * You will need to write a custom render function for the "published_at" column to format the date.
   *
   */

  return <div>Build me</div>;
};

export default ArticleTable;
