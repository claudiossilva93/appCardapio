import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import CustomText from "../globalComponent/CustomText";
import { MaterialIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import m_moeda from "../util/float2moeda";
import ItemQuantidade from "./ItemQuantidade";

const ItemCarDetail = props => {
  console.log("ItemCarDetail", props);

  const produto = Object.assign({}, props.item);
  const { image, name, valorTotal, qtdItem } = props.item;
  let valorProduto;

  const calculaTotal = quantidade => {
    valorProduto = valorTotal / qtdItem;
    produto.valorTotal = valorProduto * quantidade;
    produto.qtdItem = quantidade;

    props.atualizaItem(produto);
  };

  return (
    <View
      style={{
        flex: 1,
        marginBottom: 10,
        marginTop: 0
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row"
        }}
      >
        <View
          style={{
            flex: 1
          }}
        >
          <Image
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
              alignSelf: "center"
            }}
            resizeMode="contain"
            source={{ uri: image }}
          />
        </View>
        <View
          style={{
            flex: 3
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <View
              style={{
                flex: 3,
                marginLeft: 10,
                marginTop: 5
              }}
            >
              <CustomText style={{ fontWeight: "500", fontSize: 18 }}>
                {name}
              </CustomText>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row"
              }}
            >
              <TouchableOpacity>
                <MaterialIcons
                  name="edit"
                  size={25}
                  color="#009688"
                  onPress={() =>
                    props.navigation.navigate("DetailOrder", props.item.id)
                  }
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons
                  name="delete-forever"
                  size={25}
                  color="red"
                  onPress={() => props.onPress(props.item)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View
              style={{
                marginLeft: 10
              }}
            >
              <CustomText
                style={{ fontWeight: "bold", fontSize: 20, color: "#4caf50" }}
              >
                R$ {m_moeda(parseFloat(valorTotal).toFixed(2))}
              </CustomText>
            </View>
            <View>
              <ItemQuantidade
                qtdItem={qtdItem}
                min={1}
                max={9999}
                setQuantidade={calculaTotal}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const mapDispatchItemProps = dispatch => {
  return {
    atualizaItem: item => {
      console.log("Atualiza item", item);
      dispatch({ type: "UPDATE_CAR", payload: item });
    }
  };
};

export default connect(
  null,
  mapDispatchItemProps
)(ItemCarDetail);
