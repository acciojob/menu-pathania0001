import React,{useState} from "react";
import Menu from './Menu'

const App = () => {
  const [filter,setFilter] = useState("all");


  return (
    <div id="main">
      <h1 className="text-3xl font-bold text-center mb-6">Our Menu</h1>
      <div className="flex w-fit mx-auto gap-2 mb-6">
        {["All", "Breakfast", "Lunch", "Shakes"].map((item, index) => (
  <button 
    key={index}
    id={`filter-btn-${index+1}`} 
    onClick={() => setFilter(item.toLowerCase())}
    className="px-3 py-1 border rounded hover:bg-gray-200"
  >
    {item}
  </button>            
))}

      </div>
      <Menu filter={filter}/>
    </div>
  );
};

export default App;
