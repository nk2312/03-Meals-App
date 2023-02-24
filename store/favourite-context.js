import { createContext, useState } from "react";

export const FavouriteContext=createContext({
    mealsArr:[],
    add:(value)=>{},
    remove:(id)=>{}
})

export const FavouriteContextProvider=({children})=>{

    const [favMeals,setFavMeals]=useState([]);

    const addMeals=(id)=>{
        setFavMeals((prevState)=>{return [...prevState,id]})
    }
    const removeMeals=(id)=>{
        setFavMeals((prevState)=>{return prevState.filter(meal=>meal!==id)})
    }

    const value={mealsArr:favMeals,add:addMeals,remove:removeMeals}
    return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>
}