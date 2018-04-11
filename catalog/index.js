import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const config = {
  title: "Styleguide",
  imports: {
    Provider: require("rebass").Provider
  },
  pages: [
    {
      path: "/",
      title: "Introduction",
      content: pageLoader(() => import("../README.md"))
    },
    {
      title: "Components",
      pages: [
        {
          path: "components/Dropdown",
          title: "Dropdown",
          content: pageLoader(() => import("../src/Dropdown/README.md")),
          imports: { Dropdown: require("../src/Dropdown/") }
        },
        {
          path: "components/Tags",
          title: "Tags",
          content: pageLoader(() => import("../src/Tags/README.md")),
          imports: { Tags: require("../src/Tags") }
        },
        {
          path: "components/ValuePicker",
          title: "ValuePicker",
          content: pageLoader(() => import("../src/ValuePicker/README.md")),
          imports: { ValuePicker: require("../src/ValuePicker") }
        }
      ]
    }
  ]
};

ReactDOM.render(<Catalog {...config} />, document.getElementById("catalog"));
