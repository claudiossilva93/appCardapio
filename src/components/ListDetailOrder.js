import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import FlatListItemSeparator from "./FlatListItemSeparator";
import ItemDetailOrder from "./ItemDetailOrder";
import CustomText from "../globalComponent/CustomText";

const ListDetailOrder = props => {
  const { name, items } = props.item;

  const calculaSubtotalItems = itemQuantidade => {
    props.setItemListState(itemQuantidade);
  };

  return (
    <View style={[styles.container, styles.boxShadow]}>
      <CustomText style={{ fontSize: 25, fontWeight: "bold", opacity: 0.7 }}>
        {name}
      </CustomText>

      <View
        style={{
          flex: 1
        }}
      >
        <FlatList
          data={items}
          ItemSeparatorComponent={FlatListItemSeparator}
          renderItem={({ item, index }) => {
            props.addItemListState({
              name: item.name,
              price: item.price,
              quantidade: 0
            });

            return (
              <ItemDetailOrder
                item={item}
                qtdItem={0}
                index={index}
                calculaSubtotalItems={calculaSubtotalItems}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF"
  },
  boxShadow: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "#D3D3D3",
    shadowOpacity: 0.5
  }
});

export default ListDetailOrder;
