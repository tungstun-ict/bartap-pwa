import React, { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import TungstunSearchBar from "../search-bar/tungstun-search-bar.tsx";
import "./tungstun-list-view.scss";
import { distance } from "fastest-levenshtein";
import TungstunIconButton from "./../icon-button/tungstun-icon-button";

function TungstunListView({ children, onAdd, addIcon, className }) {
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

      if (
        value.toLowerCase().includes(search.toLowerCase()) ||
        distance(value.toLowerCase(), search.toLowerCase()) < 2
      ) {
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
      <div className="list-view__top">
        <TungstunSearchBar
          className={"list-view__search"}
          width="auto"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {onAdd && addIcon && (
          <TungstunIconButton className={"list-view__add"} onClick={onAdd} src={addIcon} />
        )}
      </div>
      {filteredChildren}
    </div>
  );
}

export default TungstunListView;
