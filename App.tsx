import React, { useState } from 'react'

import {   
   ScrollView,
   StatusBar,
   StyleSheet,   
   View,
   Alert
 } from 'react-native'

 import { Button } from 'react-native-paper'
 import { Text } from 'react-native-paper'
 import normalize from 'react-native-normalize'

 import Navbar from 'components/NavBar/NavBar'
 import MaterialInput from 'components/MaterialInput/MaterialInput'

 import { button, text, white } from 'utils/colors'

 import { validateNumber } from 'utils/validate-number'
 import { calculateLuckyNumber } from 'utils/lucky-number'

 const App = () => {   

  const [inputNumber, setInputNumber] = useState<string>('')
  const [luckyNumber, setLuckyNumber] = useState<string>('')

  const validate = () => {
    if(!validateNumber(inputNumber, 14, 16)){
      Alert.alert(
        "Formato Incorrecto",
        "El número de la suerte debe tener entre 14 y 16 caracteres",
        [
          
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
      setLuckyNumber('')
      return
    }

    const number = calculateLuckyNumber(inputNumber)
    setLuckyNumber(number)
  }

   return (
     <View style={styles.container}>
       <StatusBar barStyle={'dark-content'} />
       
       <Navbar 
        title={`TestPaloIT`}/>

       <ScrollView
         contentInsetAdjustmentBehavior="automatic">

          <View style={styles.inputContainer}>
            <MaterialInput             
              label={`Card Number`}
              value={inputNumber}
              onChange={(value) => setInputNumber(value)}/>
          </View>

          <View style={styles.buttonContainer}>
            <Button color={button} mode="contained" onPress={() => validate()}>
              Calcular Número de la suerte
            </Button>
          </View>

         
         <Text style={styles.luckyNumber}>Número de la suerte: {luckyNumber}</Text>

       </ScrollView>
     </View>
   )
 }

 const styles = StyleSheet.create({
  container:{
    flex: 1,    
    backgroundColor: white
  },
  inputContainer:{
    marginTop: normalize(50),
    marginHorizontal: normalize(20)
  },
  buttonContainer:{
    marginHorizontal: normalize(30),
    marginTop: normalize(100)
  },
  luckyNumber:{
    fontSize: normalize(17),    
    textAlign: 'center',
    marginTop: normalize(80),
    color: text
  }
 })

 export default App
