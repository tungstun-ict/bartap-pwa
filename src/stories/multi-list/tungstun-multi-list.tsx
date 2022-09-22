import React, { useState } from "react";
import TungstunBarItem from "../list-item/tungstun-bar-item";
import TungstunListView from "../list-view/tungstun-list-view";

import "./tungstun-multi-list.modules.scss";

interface ComponentProps {
  categories: Category[];
  className: string;
}

interface Category {
  displayName: string;
  id: string;
  data: {}[];
}

const TungstunMultiList = ({ categories, className }: ComponentProps) => {
  const [selected, setSelected] = useState(0);

  const handleCategoryChange = (newCategoryId: number) => {
    setSelected(newCategoryId);
  };

  return (
    <div className={`multi-list__container ${className}`}>
      <div className="multi-list__categories">
        {categories.map((category: Category, index: number) => {
          return (
            <div
              key={index}
              className={`multi-list__category ${
                index === selected && "multi-list__category--selected"
              } `}
              onClick={() => handleCategoryChange(index)}
            >
              <p>{category.displayName}</p>
            </div>
          );
        })}
      </div>
      <TungstunListView>{categories[selected].data}</TungstunListView>
    </div>
  );
};

export default TungstunMultiList;
