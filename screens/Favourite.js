import React, { useContext } from "react";
import { Text,View,StyleSheet } from "react-native";
import MealsDisplay from "../components/MealsDisplay";
import { FavouriteContext } from "../store/favourite-context";
import { MEALS } from "../components/data/dummy-data";

function Favourite() {
  const favContext = useContext(FavouriteContext);
  const displayedMeals = MEALS.filter((meal) =>
    favContext.mealsArr.includes(meal.id)
  );
  let screen = (
    <View style={styles.view}>
      <Text style={styles.title}>There are no Favourite items yet</Text>
    </View>
  );

  if (displayedMeals.length > 0) {
    screen = <MealsDisplay displayedMeals={displayedMeals} />;
  }
  return <>{screen}</>;
}

export default Favourite;

const styles=StyleSheet.create({
  title:{
    color:'#ddb52f',
    borderWidth:1,
    borderColor:'#ddb52f',
    padding:20,
    borderRadius:10,
    shadowColor:'white',
    shadowOffset:{width:0,height:0},
    shadowOpacity:0.7
  },
  view:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})
