import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Category from "./screens/Category";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";

import IconButton from "./components/IconButton";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favourite from "./screens/Favourite";
import { FavouriteContextProvider } from "./store/favourite-context";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  

  function DrawerNavigationHandler() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "#fff",
          sceneContainerStyle: { backgroundColor: "#131318" },
          drawerContentStyle: { backgroundColor: "#e4baa1"},
          // drawerInActiveTintColor: "white",
          drawerActiveBackgroundColor: "#351401",
          drawerActiveTintColor: "white",
        }}
      >
        <Drawer.Screen
          name="Meals "
          component={Category}
          // options={{
          //   drawerIcon: ({ color, size }) => {
          //     <IconButton color={color} size={size} name="list" />;
          //   },
          // }}
        />
        <Drawer.Screen name="favourite" component={Favourite}/>
        {/* <Drawer.Screen
          name="Favourite"
          component={Favourite}
          // options={{
          //   drawerIcon: ({ color, size }) => {
          //     <IconButton color={color} size={size} name="star" />;
          //   },
          // }}
        /> */}
      </Drawer.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <FavouriteContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Meals Category"
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "#fff",
            contentStyle: { backgroundColor: "#131318" },
          }}
        >
          <Stack.Screen
            component={DrawerNavigationHandler}
            name="Drawer"
            options={{
              title: "All Categories",
              headerShown: false,
            }}
          />
          <Stack.Screen
            component={MealsOverview}
            name="Meals Overview"
            // options={({ route, navigation }) => {
            //   return { title: route.params.categoryId };
            // }}
          />
          <Stack.Screen
            component={MealsDetailsScreen}
            name="Meal Details Screen"
          />
        </Stack.Navigator>
      </NavigationContainer>
      </FavouriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
