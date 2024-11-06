import React from "react";
import { View, Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button } from "@/components/button";

export default function HomeScreen() {
  const handlePress = () => {
    Alert.alert("Botão pressionado!");
  };

  return (
    <>
      <View style={styles.fundo}>
        <View style={styles.cima}>
          <View style={styles.visor}>
            <Text style={styles.textVisor}>123</Text>
          </View>
        </View>

        <View style={styles.botoes}>
          <View style={styles.linhas}>
            <Button text="AC" colorText="#f7df9c" colorBack="#5F483AFF" colorButton="#876D5DFF" press={handlePress}/>
            <Button text="±" colorText="#f7df9c" colorBack="#5F483AFF" colorButton="#876D5DFF" press={handlePress}/>
            <Button text="%" colorText="#f7df9c" colorBack="#5F483AFF" colorButton="#876D5DFF"press={handlePress}/>
            <Button text="÷" colorText="#f76b6a" colorBack="#EEC64EFF" colorButton="#876D5DFF" press={handlePress}/>
          </View>
          <View style={styles.linhas}>
            <Button text="9" colorText="#f7df9c" colorBack="#f76b6a" colorButton="#D64949FF" press={handlePress}/>
            <Button text="8" colorText="#f7df9c" colorBack="#f76b6a" colorButton="#D64949FF" press={handlePress}/>
            <Button text="7" colorText="#f7df9c" colorBack="#f76b6a" colorButton="#D64949FF" press={handlePress}/>
            <Button text="–" colorText="#f76b6a" colorBack="#EEC64EFF" colorButton="#876D5DFF" press={handlePress}/>
          </View>
          <View style={styles.linhas}>
            <Button text="6" colorText="#f7df9c" colorBack="#f76b6a" colorButton="#D64949FF" press={handlePress}/>
            <Button text="5" colorText="#f7df9c" colorBack="#f76b6a" colorButton="#D64949FF" press={handlePress}/>
            <Button text="4" colorText="#f7df9c" colorBack="#f76b6a" colorButton="#D64949FF" press={handlePress}/>
            <Button text="×" colorText="#f76b6a" colorBack="#EEC64EFF" colorButton="#876D5DFF" press={handlePress}/>
          </View>
          <View style={styles.linhas}>
            <Button text="3" colorText="#f7df9c" colorBack="#f76b6a" colorButton="#D64949FF" press={handlePress}/>
            <Button text="2" colorText="#f7df9c" colorBack="#f76b6a" colorButton="#D64949FF" press={handlePress}/>
            <Button text="1" colorText="#f7df9c" colorBack="#f76b6a" colorButton="#D64949FF" press={handlePress}/>
            <Button text="+" colorText="#f76b6a" colorBack="#EEC64EFF" colorButton="#876D5DFF" press={handlePress}/>
          </View>
          <View style={styles.linhas}>
            <TouchableOpacity style={styles.zero}>
              <Text style={styles.textZero}>0</Text>
            </TouchableOpacity>
            <Button text="," colorText="#f7df9c" colorBack="#f76b6a" colorButton="#D64949FF" press={handlePress}/>
            <Button text="=" colorText="#f76b6a" colorBack="#EEC64EFF" colorButton="#876D5DFF" press={handlePress}/>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  visor: {
    backgroundColor: "#f7df9c",
    borderRadius: 24,
    padding: 10,
    paddingVertical: 0,
    borderWidth: 7,
    borderTopColor: "#E3BB85FF",
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    display: "flex",
    alignItems: "flex-end",
    height: "100%",
    justifyContent: "flex-end",

    
  },

  textVisor: {

    fontSize: 80,
    fontWeight: 800,
    color: "#5F483AFF"

  },

  fundo:{

    backgroundColor: "#8fc5ad",
    borderRadius: 20,
    display: "flex",
    margin: 10,
    flex: 1

  },

  cima: {
    backgroundColor: "#f76b6a",
    padding: 18,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 70,
    width: "100%",
    flex: 3
  },

  botoes: {

    display: "flex",
    flexDirection: "column",
    padding: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    flex: 7
  
  },

  linhas: {

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%"
  },

  zero: {
    backgroundColor: "#f76b6a",
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width:"45%",
    margin: 7,
    borderWidth: 8,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: "#D64949FF"
    
  },
  
  textZero: {
    fontSize: 30,
    fontWeight: 800,
    color: "#f7df9c"
  }


});
