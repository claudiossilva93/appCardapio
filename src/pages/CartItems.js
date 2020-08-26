import React from "react";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import CustomText from "../globalComponent/CustomText";
import { connect } from "react-redux";
import ItemCarDetail from "../components/ItemCarDetail";
import FlatListItemSeparator from "../components/FlatListItemSeparator";

const CartItems = props => {
  console.log("CarItems", props.carItems);

  return (
    <View style={styles.container}>
      {props.carItems.length === 0 ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            style={{
              width: 200,
              height: 200
            }}
            resizeMode="contain"
            source={require("../img/sad.png")}
          />
          <CustomText style={styles.textStyle}>
            Opaaa... O carrinho está vazio
          </CustomText>
          <CustomText style={styles.textStyle}>
            Adicione alguns lanches ao seu carrinho.
          </CustomText>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Main")}
            style={{
              backgroundColor: "rgba(30, 144, 255, 0.8)",
              borderRadius: 10,
              paddingVertical: 10,
              paddingHorizontal: 12,
              marginTop: 15
            }}
          >
            <CustomText
              style={{
                fontSize: 15,
                color: "#fff",
                fontWeight: "bold",
                alignSelf: "center",
                textTransform: "uppercase"
              }}
            >
              Vamos as compras
            </CustomText>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flex: 1, paddingTop: 20, paddingLeft: 10 }}>
          <FlatList
            ItemSeparatorComponent={FlatListItemSeparator}
            data={props.carItems}
            renderItem={({ item }) => {
              console.log("CartItem", item);

              return (
                <ItemCarDetail
                  item={item}
                  onPress={() => props.removeItem(item)}
                  navigation={props.navigation}
                />
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    carItems: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: item => dispatch({ type: "REMOVE_FROM_CAR", payload: item })
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 18
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItems);
