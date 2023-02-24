import React from "react";
import { View, Text, StyleSheet } from "react-native";

function MealDetails({ duration, complexity, affordability, title }) {
   
  return (
    <View style={styles.mealDetails}>
      <Text style={styles.txt}>{title}</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.info}>{duration}m</Text>
        <Text style={styles.info}>{complexity}</Text>
        <Text style={styles.info}>{affordability}</Text>
      </View>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  mealDetails: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#ccc",
    flex:1
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding:10,

  },
  txt:{
    fontSize:22,
    fontWeight:'bold',
    color:'#ddb52f',
    textAlign:'center',
    marginTop:18
  },
  info:{
    color:'#fff'
  }
});
