import React, { useState } from "react";
import CourseList from './components/CourseList';
import FilterButtons from './components/FilterButtons';
import Navbar from './components/Navbar';
import filterData from './Data';

const App = () => {

  const [category, setCategory] = useState(filterData[0].title);

  return (
    <div>
      <Navbar />
      <div className="bg-slate-700">
        <FilterButtons
          filterData = {filterData}
          category = {category}
          setCategory = {setCategory}
        />
        <div className="container mx-auto flex-wrap">
          <CourseList category={category}/>
        </div>
      </div>
    </div>
  );
}

export default App;
