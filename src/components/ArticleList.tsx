import React from "react";
import { Card, Row, Col, Skeleton } from "antd";
import { Article } from "@/types/types";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
  articles: Article[];
  loading: boolean;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, loading }) => {
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
  if (loading){
    return (
      <Row gutter={[8,8]} justify="start">
        {[0,1,2,3,4,5,6,7,8,9].map((_, index) => (
          <Col
            key={index}
            span={8}
          >
            <Card style={{ width: "100%", borderRadius: 7 }}>
              <Skeleton active paragraph={{ rows: 5 }} />
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
  return (
    <Row gutter={[8, 8]} justify="start">
      {articles.map((articles) => (
        <Col
          key={articles.id}
          span={8}
        >
          <ArticleCard article={articles} />
        </Col>
      ))}
    </Row>
  );
};

export default ArticleList;
