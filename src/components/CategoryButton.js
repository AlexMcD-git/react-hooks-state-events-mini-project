import React from 'react'

function CategoryButton({category, categorySelect, active}) {
  return (
    <button className={active} onClick={()=>categorySelect(category)}>{category}</button>
  )
}

export default CategoryButton