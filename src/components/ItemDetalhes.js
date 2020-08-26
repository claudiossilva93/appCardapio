import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import CustomText from "../globalComponent/CustomText";
import m_moeda from "../util/float2moeda";
import DetailOrder from "../pages/DetailOrder";

const ItemDetalhes = ({ item, navigation }) => {
  console.log(item);

  const { name, image, description, price, content } = item;

  const preco = `R$ ${m_moeda(parseFloat(price).toFixed(2))}`;

  return (
    <TouchableOpacity onPress={() => navigation.navigate("DetailOrder", item)}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          margin: 10,
          padding: 10,
          backgroundColor: "#FFF"
        }}
      >
        <View style={{ flex: 1 }}>
          <CustomText style={{ fontSize: 20, fontWeight: "bold" }}>
            {name}
          </CustomText>
          <CustomText style={{ opacity: 0.5 }}>{description}</CustomText>
          <CustomText style={{ color: "#4caf50" }}>{preco}</CustomText>
        </View>
        <Image source={{ uri: image }} style={styles.imageView} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageView: {
    width: 100,
    height: 100,
    borderRadius: 20
  },

  textView: {
    width: "50%",
    textAlignVertical: "center",
    color: "#000"
  }
});

export default ItemDetalhes;
