import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity
} from "react-native";
import ListDetailOrder from "../components/ListDetailOrder";
import { connect } from "react-redux";
import ItemQuantidade from "../components/ItemQuantidade";
import { MaterialIcons } from "@expo/vector-icons";
import CustomText from "../globalComponent/CustomText";
import m_moeda from "../util/float2moeda";

const DetailOrder = props => {
  const produto = Object.assign({}, props.route.params);

  //const { image, name, description, items, price } = props.route.params;

  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [listItems, setListItems] = useState([]);
  const [quantidadeItem, setquantidadeItem] = useState(1);

  const [imagem, setImagem] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const itemCar = props.carItems.filter(x => x.id === props.route.params);

    setIsEditing(itemCar.length > 0);

    if (itemCar.length > 0) {
      const {
        image,
        name,
        description,
        items,
        valorTotal,
        qtdItem
      } = itemCar[0];

      console.log("Detail Order", qtdItem);

      setImagem(image);
      setName(name);
      setDescription(description);
      setItems(items);
      setquantidadeItem(state => qtdItem);
      setTotal(valorTotal);
      setSubTotal(valorTotal);
    } else {
      const { image, name, description, items, price } = props.route.params;

      setImagem(image);
      setName(name);
      setDescription(description);
      setItems(items);
      setTotal(price);
      setSubTotal(price);
    }
  }, [props]);

  const calculaTotal = quantidadeItem => {
    setquantidadeItem(quantidadeItem);
    setTotal(subTotal * quantidadeItem);
  };

  const addItemListState = item => {
    let newArr = listItems;
    newArr.push(item);
    setListItems(newArr);
  };

  const setItemListState = ({ index, quantidade }) => {
    let newArr = Object.assign({}, listItems);
    newArr[index].quantidade = quantidade;
    setListItems(newArr);
    calculaSubTotal();
  };

  const calculaSubTotal = () => {
    let precoAdicionais = 0;
    listItems.forEach(item => {
      precoAdicionais += item.price * item.quantidade;
    });

    setSubTotal(precoAdicionais + subTotal);
  };

  useEffect(() => {
    calculaTotal(quantidadeItem);
  }, [subTotal]);

  return (
    <View
      style={{
        flex: 1,
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "stretch",
        alignContent: "stretch",
        backgroundColor: "#FFF"
      }}
    >
      <ScrollView>
        <View style={[styles.container, styles.boxShadow]}>
          <View>
            <Image source={{ uri: imagem }} style={styles.imageView} />
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 10
            }}
          >
            <CustomText style={{ fontSize: 20 }}>{name}</CustomText>
            <CustomText style={{ fontSize: 13, opacity: 0.7 }}>
              {description}
            </CustomText>
          </View>
        </View>
        <View
          style={{
            flex: 1
          }}
        >
          <FlatList
            data={items}
            renderItem={({ item, index }) => {
              return (
                <ListDetailOrder
                  item={item}
                  index={index}
                  addItemListState={addItemListState}
                  setItemListState={setItemListState}
                />
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={[styles.containerQuantidade, styles.boxShadow]}>
          <CustomText
            style={{ fontSize: 20, fontWeight: "bold", marginBottom: 5 }}
          >
            Quantidade
          </CustomText>
          <ItemQuantidade
            qtdItem={quantidadeItem}
            min={1}
            max={9999}
            setQuantidade={calculaTotal}
          />
        </View>

        <View style={[styles.containerObservacao, styles.boxShadow]}>
          <CustomText style={{ fontSize: 20, fontWeight: "bold" }}>
            Observações
          </CustomText>
          <TextInput
            style={{ borderColor: "gray", borderWidth: 1 }}
            multiline
            numberOfLines={4}
            placeholder="Coloque suas observações de acordo com as suas preferências"
          />
        </View>

        <View style={[styles.containerTotal, styles.boxShadow]}>
          <CustomText style={{ fontSize: 20, fontWeight: "bold" }}>
            TOTAL
          </CustomText>
          <CustomText style={{ fontSize: 20 }}>
            R$ {m_moeda(parseFloat(total).toFixed(2))}
          </CustomText>
        </View>
      </ScrollView>
      {!isEditing ? (
        <TouchableOpacity
          onPress={() => {
            produto.id = props.carItems.length;
            produto.valorTotal = total;
            produto.qtdItem = quantidadeItem;
            produto.listaAdicionais = listItems;

            props.addItemNoCarro(produto);

            props.navigation.goBack();
          }}
          style={styles.floatButton}
        >
          <MaterialIcons name="add" size={24} color="#FFF" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.floatButton}>
          <MaterialIcons name="save" size={24} color="#FFF" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    carItems: state.items
  };
};

const mapDispatchItemProps = dispatch => {
  return {
    addItemNoCarro: item => {
      dispatch({ type: "ADD_TO_CAR", payload: item });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchItemProps
)(DetailOrder);

const styles = StyleSheet.create({
  imageView: {
    width: 100,
    height: 100,
    borderRadius: 30
  },
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    maxHeight: 120
  },
  boxShadow: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "#D3D3D3",
    shadowOpacity: 0.5
  },
  containerQuantidade: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    maxHeight: 50
  },
  containerObservacao: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    maxHeight: 120,
    justifyContent: "space-between"
  },
  containerTotal: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    maxHeight: 120,
    justifyContent: "space-between",
    maxHeight: 50,
    marginBottom: 80
  },
  floatButton: {
    position: "fixed",
    width: 55,
    height: 55,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#1E90FF",
    borderRadius: 30,
    elevation: 8,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "#A9A9A9",
    shadowOpacity: 0.5
  }
});
