import { StyleSheet } from "react-native";

//All the styles used in the app
export default StyleSheet.create({
    homeContainer: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    priceNowContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
      marginBottom: 60,
      borderRadius: 120,
      width: 180,
      height: 180,
      backgroundColor: 'white',
    },
    elevation: {
      shadowColor: 'black',
      shadowOffset: { width: 5, height: 5 },
      elevation: 5,
      shadowOpacity: 0.1,
    },
    electricityText: {
      fontSize: 15,
    },
    calculatorContainer: {
      width: 200,
      height: 200,
      borderRadius: 50,
      marginVertical: 120,
      marginLeft: 100,
      justifyContent: 'center',
      alignItems: 'center'
  },
  calculatorTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
  },
  label: {
      fontSize: 18,
      marginVertical: 10,
  },
  input: {
      fontSize: 18,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
      width: '80%',
  },
  calculatorResult: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 20,
  },
  headerContainer: {
    marginTop: 40,
    marginHorizontal: 20,
},
  boldHeader: {
    fontSize: 25,
    fontWeight: 'bold',
},
  lightHeader: {
    fontSize: 20,
}
  });