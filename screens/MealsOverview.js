import React, { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { MEALS } from "../components/data/dummy-data";
import MealItem from "../components/MealItem";
import { CATEGORIES } from "../components/data/dummy-data";
import MealsDisplay from "../components/MealsDisplay";

function MealsOverview({ route, navigation }) {

  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

 

  return (
    <MealsDisplay displayedMeals={displayedMeals}/>
  );
}

export default MealsOverview;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
