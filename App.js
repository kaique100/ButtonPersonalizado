import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


const App = () =>{

  //Função chamada quando um dos botões e precionado
  const handleButtonPress = () =>{
    alert("Marcelo é gay");
  };

  //Retorna a interface do usuario do componente
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        botao em react
      </Text>

      <Button 
        title='Botão do arrombado do Marcelo' 
        onPress={handleButtonPress}>
          botao do Marcelo
      </Button>

      <TouchableOpacity style={styles.customButton} onPress={handleButtonPress}>
      <Text style={styles.buttonText}>
        botao personalizado
      </Text>
      </TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({


    container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },

    title:{
      fontSize: 20,
      marginBottom: 10,
      color: '#000'
    },

    customButton:{
      backgroundColor: 'blue',
      padding: 20,
      borderRadius: 5
    },

    buttonText: {
      color: 'white',
      fontSize: 18
    }

})

export default App;