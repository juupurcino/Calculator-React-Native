import React, { useState } from "react";
import { View, Alert, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Button } from "@/components/button";
import Svg, { Path } from 'react-native-svg';

export default function HomeScreen() {
  
  const [visor, setvisor] = useState("0");
  const [equacao, setequacao] = useState("0");

  const mudarBotoes = () => {

  }
  
  const handlePress = (buttonText: React.SetStateAction<string>, sinais: React.SetStateAction<string>) => {
    if (buttonText === "AC") {
      setvisor("0"); 
      setequacao("0"); 
      
    } else if (buttonText === "=") {
      try {
        setvisor(eval(equacao).toString()); 
      } catch (error) {
        setvisor("Erro"); 
      }
    } else if (visor === "0" && buttonText !== ",") {
      
      setequacao(buttonText);
      setvisor(sinais);

    }else if (buttonText == "%") {
      
    } else {
      setvisor((prev) => prev +  sinais); 
      setequacao((prev) => prev + buttonText); 
    }
  };

  return (
    <>
      <View style={styles.fundo}>
        <View style={styles.cima}>
          <View style={styles.visor}>
            <Text style={styles.textVisor}>{visor}</Text>
          </View>
        </View>

        <View style={styles.botoes}>
          <View style={styles.linhas}>
            <Button text="AC" colorText="#f7df9c" colorBack="#5F483AFF" colorButton="#876D5DFF" press={() => handlePress("AC", "AC")}/>
            <Button text="±" colorText="#f7df9c" colorBack="#5F483AFF" colorButton="#876D5DFF" press={() => handlePress("±", "±")}/>
            <Button text="%" colorText="#f7df9c" colorBack="#5F483AFF" colorButton="#876D5DFF" press={() => handlePress("%", "%")}/>
            <Button text="÷" colorText="#f76b6a" colorBack="#EEC64EFF" colorButton="#876D5DFF" press={() => handlePress("/", "÷")}/>
          </View>
          <View style={styles.linhas}>
            <Button text="9" colorText="#f7df9c" colorBack="#f76b6a" colorButton="#D64949FF" press={() => handlePress("9", "9")}/>
            <Button text="8" colorText="#f7df9c" colorBack="#f76b6a" colorButton="#D64949FF" press={() => handlePress("8", "8")}/>
            <Button text="7" colorText="#f7df9c" colorBack="#f76b6a" colorButton="#D64949FF" press={() => handlePress("7", "7")}/>
            <Button text="–" colorText="#f76b6a" colorBack="#EEC64EFF" colorButton="#876D5DFF" press={() => handlePress("-", "-")}/>
          </View>
          <View style={styles.linhas}>
            <Button text="6" colorText="#f7df9c" colorBack="#f76b6a" colorButton="#D64949FF" press={() => handlePress("6", "6")}/>
            <Button text="5" colorText="#f7df9c" colorBack="#f76b6a" colorButton="#D64949FF" press={() => handlePress("5", "5")}/>
            <Button text="4" colorText="#f7df9c" colorBack="#f76b6a" colorButton="#D64949FF" press={() => handlePress("4", "4")}/>
            <Button text="×" colorText="#f76b6a" colorBack="#EEC64EFF" colorButton="#876D5DFF" press={() => handlePress("*", "x")}/>
          </View>
          <View style={styles.linhas}>
            <Button text="3" colorText="#f7df9c" colorBack="#f76b6a" colorButton="#D64949FF" press={() => handlePress("3", "3")}/>
            <Button text="2" colorText="#f7df9c" colorBack="#f76b6a" colorButton="#D64949FF" press={() => handlePress("2", "2")}/>
            <Button text="1" colorText="#f7df9c" colorBack="#f76b6a" colorButton="#D64949FF" press={() => handlePress("1", "1")}/>
            <Button text="+" colorText="#f76b6a" colorBack="#EEC64EFF" colorButton="#876D5DFF" press={() => handlePress("+", "+")}/>
          </View>
          <View style={styles.linhas}>
            
            <TouchableOpacity style={styles.buttonIcon} onPress={() => mudarBotoes()}>
              <Image source={require("../assets/images/calculator-svgrepo-com.svg")} style={styles.icon}/>
            </TouchableOpacity>
            <Button text="." colorText="#f7df9c" colorBack="#f76b6a" colorButton="#D64949FF" press={() => handlePress(".", ".")}/>
            <Button text="0" colorText="#f7df9c" colorBack="#f76b6a" colorButton="#D64949FF" press={() => handlePress("0", "0")}/>
            <Button text="=" colorText="#f76b6a" colorBack="#EEC64EFF" colorButton="#876D5DFF" press={() => handlePress("=", "=")}/>
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
    color: "#5F483AFF",
    maxWidth: "100%"


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
  },

  icon:{

    width: "100%",
    flex: 1
  },

  buttonIcon: {
    backgroundColor: "#f76b6a", 
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width:"19%",
    margin: 7,
    borderWidth: 8,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: "#D64949FF"

  }


});
