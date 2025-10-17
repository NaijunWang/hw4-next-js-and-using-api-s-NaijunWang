import React from "react";
import { Row, Col, List, Typography, Divider } from "antd";
import { Article } from "@/types/types";

interface ArticleStatisticsProps {
  articles: Article[];
}

const ArticleStatistics: React.FC<ArticleStatisticsProps> = ({ articles }) => {
  /**
   * This component generates the following statistics:
   * 1. Unique news sources
   * 2. Date range of articles
   * 3. Number of featured articles
   *
   * It takes as input an array of articles
   *
   * You should use a combination of Antd components to buidld this.
   * You might need to do some data manipulation to get the data in the right format.
   *
   * I used a combination of the following components:
   * 1. List
   * 2. Row
   * 3. Col
   * 4. Typography.Text
   * 5. Typography.Title
   */
  //This is given to you
  const uniqueSources = [
    ...new Set(articles.map((article) => article.news_site)),
  ];
  // This might be helpful for you
  const dateRange = [
    new Date(
      Math.min(
        ...articles.map((article) => new Date(article.published_at).getTime())
      )
    ).toLocaleDateString(),
    new Date(
      Math.max(
        ...articles.map((article) => new Date(article.published_at).getTime())
      )
    ).toLocaleDateString(),
  ];

  const featuredCount = articles.filter((a) => a.featured).length;

  const dividerStyle = { margin: "10px 0", borderColor: "#e7e4e4ff", marginLeft: -12, marginRight: -12 };

  return (
    <div style={{ width: "100%", marginTop: 24 }}>
      <Typography.Title level={2}>Article Statistics</Typography.Title>

      <Row gutter={[8, 24]}>
        <Col span={8}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: 8,
              padding: 12,
            }}
          >
            <Typography.Text strong>Unique News Sources</Typography.Text>
            <Divider style={dividerStyle} />
            <List
              dataSource={uniqueSources}
              renderItem={(item, index) => (
                <>
                  <List.Item style={{ border: "none", padding: "4px 0" }}>
                    <Typography.Text>{item}</Typography.Text>
                  </List.Item>
                  {index < uniqueSources.length - 1 && (
                    <Divider style={dividerStyle} />
                  )}
                </>
              )}
            />
          </div>
        </Col>

        <Col span={8}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: 8,
              padding: 12,
            }}
          >
            <Typography.Text strong>Date Range of Articles</Typography.Text>
            <Divider style={dividerStyle} />
            <div style={{ marginTop: 4 }}>
              <Typography.Text>Earliest: {dateRange[0]}</Typography.Text>
            </div>
            <Divider style={dividerStyle} />
            <div style={{ marginTop: 4 }}>
              <Typography.Text>Latest: {dateRange[1]}</Typography.Text>
            </div>
          </div>
        </Col>

        <Col span={8}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: 8,
              padding: 12,
            }}
          >
            <Typography.Text strong>Number of Featured Articles</Typography.Text>
            <Divider style={dividerStyle} />
            <div style={{ marginTop: 4 }}>
              <Typography.Text>Count: {featuredCount}</Typography.Text>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ArticleStatistics;
