import { useState } from "react";

const Community = () => {
  console.log("Community component - App Router");

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
export default Community;
