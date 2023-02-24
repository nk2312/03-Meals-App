import React from "react";
import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryCard({ title, colors,onPress }) {
  return (
    <View style={styles.container}>
      <Pressable 
      onPress={onPress}
      style={({pressed})=>[styles.pressable,pressed?styles.pressedBtn:null]} android_ripple={{color:'#ccc'}}>
        <View style={[styles.innerContainer,{backgroundColor:colors}]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    borderRadius: 10,
    height: 150,
    elevation: 5,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    overflow:Platform.OS=='android'? 'hidden':'visible'
  },
  pressable: { flex: 1 },
  innerContainer: { flex: 1, alignItems: "center", justifyContent: "center",borderRadius:10 },
  text: {
    fontWeight: "bold",
  },
  pressedBtn: {
    opacity:0.5
  },
});
