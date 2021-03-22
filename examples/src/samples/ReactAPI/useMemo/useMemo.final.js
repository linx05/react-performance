import { renderMarkdown } from "./RenderMarkdown";
import { markdown } from "./markdown";
import { useState, useMemo } from "react";

export const RenderMarkdown = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const html = useMemo(() => renderMarkdown(markdown), [markdown]);
  return (
    <>
      <button onClick={increment}>The count is {count}</button>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};
