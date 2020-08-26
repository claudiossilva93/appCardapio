import React, { useState } from "react";
import { View } from "react-native";
import m_moeda from "../util/float2moeda";
import ItemQuantidade from "./ItemQuantidade";
import CustomText from "../globalComponent/CustomText";

const ItemDetailOrder = props => {
  const { price, name, minimum, maximum } = props.item;

  const calculaSubtotalItem = quantidade => {
    props.calculaSubtotalItems({
      index: props.index,
      quantidade: quantidade
    });
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "stretch",
        alignContent: "stretch",
        marginTop: 10
      }}
    >
      <View>
        <CustomText style={{ fontSize: 20, fontWeight: "bold" }}>
          {name}
        </CustomText>
        <CustomText style={{ fontSize: 15, color: "#4caf50" }}>
          {`R$ ${m_moeda(parseFloat(price).toFixed(2))}`}
        </CustomText>
      </View>

      <ItemQuantidade
        item={props.item}
        qtdItem={props.qtdItem}
        min={minimum}
        max={maximum}
        setQuantidade={calculaSubtotalItem}
      />
    </View>
  );
};

export default ItemDetailOrder;
