import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ItemQuantidade = props => {
  const { qtdItem, min, max } = props;

  const [quantidade, setQuantidade] = useState(qtdItem);

  const IncrementaQuantidade = () => {
    if (quantidade < max) {
      props.setQuantidade(quantidade + 1);
      setQuantidade(quantidade + 1);
    }
  };

  const DecrementaQuantidade = () => {
    if (quantidade > min) {
      props.setQuantidade(quantidade - 1);
      setQuantidade(quantidade - 1);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "flex-end",
        alignItems: "center",
        alignContent: "stretch"
      }}
    >
      <TouchableOpacity
        style={styles.ButtonStyleRemove}
        onPress={DecrementaQuantidade}
      >
        <MaterialIcons name="remove" size={20} color="#1E90FF" />
      </TouchableOpacity>
      <TextInput
        underlineColorAndroid="transparent"
        style={styles.TextInputStyle}
        keyboardType={"numeric"}
        value={quantidade.toString()}
        editable={false}
      />
      <TouchableOpacity
        style={styles.ButtonStyleAdd}
        onPress={IncrementaQuantidade}
      >
        <MaterialIcons name="add" size={20} color="#1E90FF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  TextInputStyle: {
    width: 35,
    fontSize: 20,
    textAlign: "center"
  },
  ButtonStyleAdd: {
    backgroundColor: "#FFF",
    borderColor: "#1E90FF",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderWidth: 1,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 9,
    paddingLeft: 7,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
    width: 30
  },
  ButtonStyleRemove: {
    backgroundColor: "#FFF",
    borderColor: "#1E90FF",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderWidth: 1,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 9,
    paddingLeft: 7,
    justifyContent: "center",
    alignItems: "center",
    width: 30
  }
});

export default ItemQuantidade;
