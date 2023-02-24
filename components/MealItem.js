import React from "react";
import {
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import MealDetails from "./MealDetails";
import { useNavigation } from "@react-navigation/native";

function MealItem({
  id,
  title,
  affordability,
  duration,
  imageUrl,
  complexity,
})
 {
    const navigation=useNavigation();

    function selectMealHandler(){
    navigation.navigate("Meal Details Screen",{mealId:id})
    }
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealHandler}
      >
        <View style={styles.innerContainer}>
          <Image source={{uri:imageUrl}} style={styles.image} />
        </View>
        <MealDetails
          title={title}
          duration={duration}
          affordability={affordability}
          complexity={complexity}
        />
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  innerContainer: {
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0 },
    borderRadius: 12,
    overflow: Platform.OS === "android" ? "visible" : "hidden",
  },
  mealItem: { flex: 1, margin: 25 },
  buttonPressed: { opacity: 0.5 },
  title: { textAlign: "center" },
  image: { width: "100%", height: 200 },
});
