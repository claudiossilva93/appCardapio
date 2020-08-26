import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";
import { withNavigation } from "@react-navigation/compat";
import CustomText from "../globalComponent/CustomText";

const ShoppingCar = props => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate("CartItems")}>
      <View style={{ padding: 10 }}>
        <View
          style={{
            position: "absolute",
            height: 22,
            width: 22,
            borderRadius: 15,
            //backgroundColor: "rgba(95,197,123,0.8)",
            backgroundColor: "rgba(30, 144, 255, 0.8)",
            right: 2,
            bottom: 23,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000
          }}
        >
          <CustomText style={{ color: "white" }}>
            {props.carItems.length}
          </CustomText>
        </View>
        <AntDesign name="shoppingcart" size={30} color="rgba(95,197,123,1)" />
        {/*<FontAwesome name="shopping-cart" size={30} color="black" />*/}
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = state => {
  return {
    carItems: state.items
  };
};

export default connect(mapStateToProps)(withNavigation(ShoppingCar));
