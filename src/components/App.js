import React, { useState } from 'react';
import '../styles/App.css';
import menu from './data';
import Menu from './Menu';

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const allCategories = ['All', ...new Set(menu.map(item => item.category))];
  console.log(menu);

    const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(menu);
    } else {
      const newItems = menu.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

return (
    <main id="main">
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          {allCategories.map((category, index) => (
            <button
              type="button"
              className="filter-btn"
              id={`filter-btn-${index}`}
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App