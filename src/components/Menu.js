import React from 'react'

const Menu = ({ filterItems }) => {
  return (
    <div className="grid grid-2 gap-1 p-10">
      {filterItems
        .map((item) => (
          <div 
  key={item.id}
  data-test-id={
    item.category === "breakfast" ? "menu-item-breakfast" :
    item.category === "lunch" ? "menu-item-lunch" :
    item.category === "shakes" ? "menu-item-shakes" : ""
  }
  className="p-4 border rounded shadow"
>
            <img src={item.img} alt={item.title} className="w-full h-40 object-cover mb-3"/>
            <div>
              <div className="border-b flex justify-between mb-2">
                <h1 className="text-xl font-bold">{item.title}</h1>
                <span className="text-lg">${item.price}</span>
              </div>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Menu;