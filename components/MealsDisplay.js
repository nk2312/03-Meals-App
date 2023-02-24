import React from 'react'
import { StyleSheet,View ,FlatList} from 'react-native';
import MealItem from './MealItem';

function MealsDisplay({displayedMeals}) {
    function renderMealItem(itemData) {
        const item = itemData.item;
    
        const mealItemProps = {
          id: item.id,
          title: item.title,
          imageUrl: item.imageUrl,
          affordability: item.affordability,
          complexity: item.complexity,
          duration: item.duration,
        };
    
        return <MealItem {...mealItemProps} />;
      }
    
  return (
    
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default MealsDisplay