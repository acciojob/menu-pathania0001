import React,{useState} from "react";
import Menu from './Menu'

const App = () => {
  const [filter,setFilter] = useState("all");

  const handleOnClick = (item)=>{
    setFilter(item);
  }

  return (
    <div id="main">
      <h1 className="text-3xl font-bold text-center mb-6">Our Menu</h1>
      <div className="flex w-fit mx-auto gap-2 mb-6">
        {["all","breakfast","lunch","shakes"].map((item,index)=>(
           <button 
             key={index}
             id={`filter-btn-${index+1}`} 
             onClick={()=>handleOnClick(item)}
             className="border-none background-none color-filter px-4 py-2 rounded hover:bg-gray-200"
           >
             {item[0].toUpperCase() + item.slice(1)}
           </button>         
        ))}
      </div>
      <Menu filter={filter}/>
    </div>
  );
};

export default App;
