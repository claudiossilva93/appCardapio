import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import Data from "../model/grFoodNew";
import CustomText from "../globalComponent/CustomText";
import ClientAxios from "../service/ClientAxios";

const Main = ({ props, navigation }) => {
  const [menu, setMenu] = useState(Data);

/*  useEffect(() => {
    async function fetchData() {
      const response = await ClientAxios.get(`/menu`);
      console.log("main", response.data.menu);
      setMenu(response.data.menu);
    }

    fetchData();
  }, []);*/

  const windowWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={{
          flex: 1,
          justifyContent: "center"
        }}
        numColumns={3}
        style={{ flex: 1 }}
        data={menu}
        keyExtractor={menu => menu.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", item)}
          >
            <View
              style={{
                width: windowWidth / 3,
                height: 150,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F7F7F7",
                borderWidth: 1,
                borderColor: "#D3D3D3"
              }}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  position: "absolute"
                }}
                resizeMode="contain"
                source={{ uri: item.image }}
              />
              <View
                style={{
                  flex: 1,
                  alignSelf: "flex-end",
                  alignItems: "center"
                }}
              >
                <CustomText
                  style={{
                    color: "black",
                    fontSize: 20
                  }}
                >
                  {item.name}
                </CustomText>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFF"
  }
});

export default Main;
