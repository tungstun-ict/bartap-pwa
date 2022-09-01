import React, {useState} from "react";
import TungstunListView from "../list-view/tungstun-list-view";

import "./tungstun-multi-list.module.scss";

const TungstunMultiList = ({categories}) => {
  const [selected, setSelected] = useState(0);

  const handleCategoryChange = (newCategory) => {
    setSelected(newCategory);
  };

  return (
    <div className="multi-list__container">
      {categories.forEach((value, index) => {
        return (
          <div
            className="multi-list__category"
            onClick={() => handleCategoryChange(index)}
          >
            <p>{value.displayName}</p>
          </div>
        );
      })}
      <TungstunListView>{categories[selected]}</TungstunListView>
    </div>
  );
};

export default TungstunMultiList;
