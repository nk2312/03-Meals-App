import React from "react";
import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return (
    <View style={styles.view}>
      {data.map((dataPoints) => (
        <View style={styles.innerView} key={dataPoints.id}>
          <Text style={styles.steps}>{dataPoints}</Text>
        </View>
      ))}
    </View>
  );
}

export default List;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
  },
  innerView: {  width: "80%",marginVertical:4,borderRadius:10, backgroundColor: "#e2b497", },
  steps: {
    color: "#131318",
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
  },
});
