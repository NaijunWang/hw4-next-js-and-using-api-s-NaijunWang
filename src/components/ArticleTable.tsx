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
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "News Source",
      dataIndex: "news_site",
      key: "news_site"
    },
    {
      title: "Published At",
      dataIndex: "published_at",
      key: "published_at",
      render: (date: string) => {
        const formatted = new Date(date).toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        return formatted;
      }
    }
  ]
  return (
    <Table 
      columns={columns}
      dataSource={articles}
      loading={loading}
      rowKey={(article) => article.id}
      pagination={false}
      bordered={false}

    />
  );
};

export default ArticleTable;
