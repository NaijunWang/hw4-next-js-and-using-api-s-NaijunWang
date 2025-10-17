/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Divider, Typography, Switch, Pagination } from "antd";
import { Article, ArticleResponse } from "@/types/types";
import ArticleList from "@/components/ArticleList";
import ArticleTable from "@/components/ArticleTable";
import ArticleStatistics from "@/components/ArticleStatistics";

const NewsPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<"grid"|"table">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalArticles, setTotalArticles] = useState(0);

  async function getArticles(page = 1, size = 10) {
    setLoading(true);
    const offset = (page - 1) * size;
    const res = await fetch(
      `https://api.spaceflightnewsapi.net/v4/articles/?limit=${size}&offset=${offset}&ordering=-published_at`
    );

    const data: ArticleResponse = await res.json();
    setArticles(data.results);
    setTotalArticles(data.count);
    setLoading(false);

    window.scrollTo({ top: 0 });
  }

  useEffect(() => {
    getArticles(currentPage, pageSize);
  }, []);

  const handlePageChange = (page: number, size?: number) => {
    setCurrentPage(page);
    if (size){setPageSize(size)};
    getArticles(page, size || pageSize);
  };

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
      <ArticleStatistics articles={articles} />
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
      <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={totalArticles}
          showSizeChanger
          pageSizeOptions={[10, 20, 30, 40]}
          onChange={handlePageChange}
          onShowSizeChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default NewsPage;
