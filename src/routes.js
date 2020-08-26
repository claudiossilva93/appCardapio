import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../src/pages/Main";
import Details from "../src/pages/Details";
import DetailOrder from "./pages/DetailOrder";
import CartItems from "./pages/CartItems";
import ShoppingCar from "./components/ShoppingCar";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            //backgroundColor: "#1E90FF",
            backgroundColor: "#FFF",
            height: 70
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            flex: 1,
            textAlign: "center",
            fontFamily: "Tahoma"
          },
          headerRight: props => {
            return <ShoppingCar />;
          }
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={() => ({
            title: "Categorias"
          })}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="DetailOrder"
          component={DetailOrder}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="CartItems"
          component={CartItems}
          options={({ route }) => ({ title: "Carrinho de compras" })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
