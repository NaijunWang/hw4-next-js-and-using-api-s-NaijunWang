import { Typography } from "antd";

export default function About() {
    return (
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Typography.Paragraph>
          This is about page
        </Typography.Paragraph>
      </div>
    )
}