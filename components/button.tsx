import { StyleSheet, Text, TouchableOpacity} from "react-native";

export const Button = ({ text, colorText, colorBack, press, colorButton }: { text: string; colorText: string; press: any; colorBack: string; colorButton: string}) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: colorBack, borderBottomColor: colorButton}]} 
      onPress={press}
    >
      <Text style={[styles.buttonText, { color: colorText }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width:"19%",
    margin: 7,
    borderWidth: 8,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0


  },

  buttonText: {
    fontSize: 30,
    fontWeight: 800
  },
});
