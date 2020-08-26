import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ItemDetalhes from "../components/ItemDetalhes";
import FlatListItemSeparator from "../components/FlatListItemSeparator";

const Details = ({ route, navigation }) => {
  const { items } = route.params;

  return (
    <View style={styles.MainContainer}>
      <FlatList
        data={items}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={({ item }) => (
          <ItemDetalhes item={item} navigation={navigation} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#FFF"
  },

  textView: {
    width: "50%",
    textAlignVertical: "center",
    padding: 10,
    color: "#000"
  }
});

export default Details;
