import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TungstunListItem from "../list-item/tungstun-list-item";
import TungstunSearchBar from "../search-bar/tungstun-search-bar.tsx";
import "./tungstun-list-view.scss";
import { distance } from "fastest-levenshtein";
var levenshtein = require("fast-levenshtein");

function TungstunListView({ children, className }) {
  const [search, setSearch] = useState("");
  const [filteredChildren, setFilteredChildren] = useState(children);

  const searchProps = (props) => {
    let toFilter = returnObjectsInObject(props);

    toFilter = toFilter.filter((item) => {
      return searchInObject(item);
    });

    return toFilter.length > 0;
  };

  const searchInObject = (obj) => {
    for (let value of Object.values(Object.values(obj))) {
      if (typeof value === "object") {
        return searchInObject(value);
      }

      if (typeof value !== "string") continue;

      if (value.toLowerCase().includes(search.toLowerCase()) || distance(value.toLowerCase(), search.toLowerCase()) < 2) {
        return true;
      }
    }
  };

  const returnObjectsInObject = (obj) => {
    return Object.values(obj).filter((value) => {
      return typeof value === "object";
    });
  };

  useEffect(() => {
    if (search === "") {
      setFilteredChildren(children);
    } else {
      setFilteredChildren(children.filter((c) => searchProps(c.props)));
    }
  }, [search, children]);

  return (
    <div className={`list-view__container ${className}`}>
      <TungstunSearchBar
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {filteredChildren}
    </div>
  );
}

export default TungstunListView;
