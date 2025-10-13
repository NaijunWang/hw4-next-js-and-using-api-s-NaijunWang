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

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => (
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
  <div>build me</div>
);

export default ArticleCard;
