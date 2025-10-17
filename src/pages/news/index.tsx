/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Divider, Typography } from "antd";
import { Article, ArticleResponse } from "@/types/types";
import ArticleList from "@/components/ArticleList";

const NewsPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getArticles(){
      const res = await fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=0&ordering=-published_at")
      const data: ArticleResponse = await res.json();
      setArticles(data.results);
      setLoading(false);
    }; 
    getArticles();
  }, [])
  return (
    <div style={{ width: "100%" }}>
      {/* You can delete this div if you want */}
      <div style={{ marginBottom: "10px" }}>{/* Add Switch inside here */}</div>
      <Divider />
      <Typography.Title level={2}>Articles</Typography.Title>
      {/* Add conditional render logic for table vs grad/list */}
      <ArticleList articles={articles} loading={loading} />
      {/* Add pagination control using Antd(lookup the component). The same one should be used for both the table and grid views */}
      {/* It should be centered on the page */}
      {/* When you change the page, or the items per page, it should reset the scroll to the top of the page */}
    </div>
  );
};

export default NewsPage;
