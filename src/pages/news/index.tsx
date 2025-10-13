/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Divider, Typography } from "antd";

const NewsPage: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      {/* You can delete this div if you want */}
      <div style={{ marginBottom: "10px" }}>{/* Add Switch inside here */}</div>
      <Divider />
      <Typography.Title level={2}>Articles</Typography.Title>
      {/* Add conditional render logic for table vs grad/list */}
      {/* Add pagination control using Antd(lookup the component). The same one should be used for both the table and grid views */}
      {/* It should be centered on the page */}
      {/* When you change the page, or the items per page, it should reset the scroll to the top of the page */}
    </div>
  );
};

export default NewsPage;
