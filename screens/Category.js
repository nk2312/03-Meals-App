import { FlatList } from "react-native";
import CategoryCard from "../components/CategoryCard";

import { CATEGORIES } from "../components/data/dummy-data";

function Category({ navigation }) {
  function pressHandler(id) {
    navigation.navigate("Meals Overview",{categoryId:id})
  }

  function renderCategoryItem(itemData) {
    return (
      <CategoryCard
       title={itemData.item.title} 
       colors={itemData.item.color} 
       onPress={pressHandler.bind(this,itemData.item.id)}/>
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default Category;
