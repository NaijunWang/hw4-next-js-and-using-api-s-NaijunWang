/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Divider, Typography, Switch } from "antd";
import { Article, ArticleResponse } from "@/types/types";
import ArticleList from "@/components/ArticleList";
import ArticleTable from "@/components/ArticleTable";

const NewsPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<"grid"|"table">("grid");
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
      {/* Switch */}
      <div style={{ marginBottom: "10px" }}>
        <Typography.Text>View as: </Typography.Text>
        <Switch
          checked={view === "table"}
          onChange={(checked) => setView(checked ? "table" : "grid")}
          checkedChildren="Table"
          unCheckedChildren="Grid"
        />
        <Typography.Text style={{ whiteSpace: "pre" }}>  (Switch between Table and Grid view)</Typography.Text>
      </div>
      {/* End of Switch */}
      <Divider />
      <Typography.Title level={2}>Articles</Typography.Title>
      {view === "grid" ? (
        <ArticleList articles={articles} loading={loading} />
      ) : (
        <ArticleTable articles={articles} loading={loading} />
      )}
      {/* Add conditional render logic for table vs grad/list */}
      {/* Add pagination control using Antd(lookup the component). The same one should be used for both the table and grid views */}
      {/* It should be centered on the page */}
      {/* When you change the page, or the items per page, it should reset the scroll to the top of the page */}
    </div>
  );
};

export default NewsPage;
