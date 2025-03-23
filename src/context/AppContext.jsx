import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";

export const AppContext = createContext(); 

const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [allCourses, setAllCourses] = useState([]);

  // Fetch all courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses); // ✅ Fixed typo
  };

  useEffect(()=>{
    fetchAllCourses();

  },[])

  const value = {
    currency,
    allCourses,
    fetchAllCourses, // ✅ Now it can be used in components
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
