import React, { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import TungstunListItem from "../list-item/tungstun-list-item";
import TungstunSearchBar from "../search-bar/tungstun-search-bar.tsx";
import "./tungstun-list-view.scss";

function TungstunListView({ children }) {
  const [search, setSearch] = useState("");
  const [filteredChildren, setFilteredChildren] = useState(children);
  
  useEffect(() => {
    if (search === "") {
      setFilteredChildren(children);
    } else {
      setFilteredChildren(
        children.filter((c) => c.props.forEach((prop) => {
          if (prop.value.toLowerCase().includes(search.toLowerCase())) {
            return true;
          }
        }))
      );
    }
  }, [search, children]);

  return (
    <div className="list-view__container">
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