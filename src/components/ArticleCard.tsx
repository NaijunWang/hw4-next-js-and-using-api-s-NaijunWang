/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, Row, Col, Typography, Divider } from "antd";
import { Article } from "@/types/types";
// This gets you access to the image for 404 fallback.
// The href/source/url can be retrieved via image404.src
import image404 from "../assets/404.png";

interface ArticleCardProps {
  article: Article;
}

const { Title, Paragraph, Text } = Typography;

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  /**
   * This component renders a single article. It takes as input an article object.
   * You should read the Antd documentation to figure out how to build this.
   * You should not use the Next.js Image component, instead use a regular img tag.
   * You will need to handle 404s for images, you can use the image404 variable above.
   * Don't forget to format the date correctly
   *
   * You should display the following information:
   * 1. Title
   * 2. Image
   * 3. Summary
   * 4. Published At
   *
   * When you click on this component, it should take you to the article's url(same tab or different is fine).
   *
   * Don't forget that you need to add a unique key prop to each ArticleCard.
   */

  const handleClick = () => {
    window.location.href = article.url;
  };

  const date = new Date(article.published_at).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return(  
    <Card
      hoverable
      onClick={handleClick}
      title={
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: 4,
          }}
        >
          <Text strong ellipsis style={{ maxWidth: "100%", fontSize: 18}}>
            {article.title}
          </Text>
          <Text
            type="secondary"
            style={{
              fontSize: 16,
              fontWeight: 400,
              whiteSpace: "nowrap",
              marginLeft: 8,
              color: "#000000d9",
            }}
          >
            {date}
          </Text>
        </div>
      }
      cover={<img
        src={article.image_url}
        alt={article.title}
        onError={(e) => (e.currentTarget.src = image404.src)}
        style={{
          width: "100%",
          borderTopLeftRadius: 7,
          borderTopRightRadius: 7,
          marginBottom: 18,
        }}
      />}
      style={{
        borderRadius: 7,
      }}
    >
      <Title 
        underline 
        style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          paddingRight: 4, 
          maxWidth: "100%", fontSize: 18,}}
      >
        {article.title}
      </Title>
      <Divider />
      <Paragraph
        style={{
          color: "#000000d9",
          marginBottom: 0
        }}
      >
        {article.summary}
      </Paragraph>
    </Card>
  )
};

export default ArticleCard;