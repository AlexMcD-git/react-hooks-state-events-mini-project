import React from "react";
import CategoryButton from "./CategoryButton";

function CategoryFilter({categories, categorySelect, active}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category=><CategoryButton
      categorySelect={categorySelect}
      key={category}
      category={category}
      active={category===active?"selected":null}
      />)}
    </div>
  );
}

export default CategoryFilter;
