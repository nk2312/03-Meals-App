import React, { useContext, useLayoutEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import { MEALS } from "../components/data/dummy-data";
import MealDetails from "../components/MealDetails";
import List from "../components/List";
import IconButton from "../components/IconButton";
import { FavouriteContext } from "../store/favourite-context";
function MealsDetailsScreen({ route, navigation }) {
  function iconButtonHandler() {
    if(mealsIsFavourite){
        favContentx.remove(id)
    }
    else{
        favContentx.add(id)
    }
  }

  const id = route.params.mealId;
  const favContentx = useContext(FavouriteContext);

  const mealsIsFavourite = favContentx.mealsArr.includes(id);


  const meals = MEALS.find((data) => data.id === id);
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            color="white"
            size="24"
            icon={mealsIsFavourite?'star':"star-outline"}
            onPress={iconButtonHandler}
          />
        );
      },
    });
  }, [navigation,iconButtonHandler]);
 
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: meals.imageUrl }} style={styles.img} />
      <MealDetails
        affordability={meals.affordability}
        title={meals.title}
        duration={meals.duration}
        complexity={meals.complexity}
      />
      <View>
        <View style={styles.titleOuter}>
          <Text style={styles.titleOne}>Ingredients</Text>
        </View>
        <List data={meals.ingredients} />
        <View style={styles.titleOuter}>
          <Text style={styles.titleOne}>Steps</Text>
        </View>
        <List data={meals.steps} />
      </View>
    </ScrollView>
  );
}

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f2f25",
  },
  img: {
    width: "100%",
    height: 300,
  },
  innerContainer: {},
  titleOuter: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 10,
    padding: 6,
  },
  titleOne: {
    color: "#ddb25f",
    fontSize: 25,
    fontWeight: "600",
    letterSpacing: 1,
    textAlign: "center",
  },
});
