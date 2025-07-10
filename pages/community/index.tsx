import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  const [title, setTitle] = useState<string>("Hello");
  return (
    <div style={{ padding: "3rem" }}>
      {title} Community
      <button
        style={{ marginLeft: "1rem" }}
        onClick={() => alert(`${title} MIT Community`)}
      >
        Press here
      </button>
    </div>
  );
};
export default withLayoutBasic(Community);
