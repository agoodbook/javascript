import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "doc",
      label: "起步",
      id: "index",
    },
    {
      type: "category",
      label: "期约与异步函数",
      items: [
        "promise-and-async-function/async-program",
        "promise-and-async-function/promise",
        "promise-and-async-function/async-function",
      ],
    },
  ],
};

export default sidebars;
