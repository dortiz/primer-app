import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {Pressable, TextInput, View,Text,StyleSheet} from 'react-native'

const App = () => {

  const [newItem,setNewItem] = useState("")
  const [errorInput,setErrorInput] = useState("")
  const [items,setItems] = useState(["Coca cola", "Pepsi"])

  const addItem = () => {
    if(newItem == ""){
      setErrorInput("Campo requerido")
      return
    }
    setItems([...items,newItem])
    setNewItem("")
    setErrorInput("")
  }


  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput 
          placeholderTextColor="white"
          value={newItem}
          onChangeText={(text) => setNewItem(text)} 
          style={styles.input} 
          placeholder='Ingrese item'
        />
        {errorInput ? <Text>{errorInput}</Text> : ""}
        <Pressable onPress={addItem} style={styles.button}>
          <Text style={styles.textButton}>+</Text>
        </Pressable>
      </View>
      <View style={styles.containerCards}>
        {items.map((item,index) => 
        <View style={styles.card} key={index}>
          <Text style={styles.textCard}>{item}</Text>
        </View>
      )}
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    marginTop:24,
    flex:1
  },
  containerInput:{
    backgroundColor:"#F4012D",
    margin:10,
    padding: 10,
    borderRadius:8,
    flexDirection:"row",
    alignItems:"center"
  },
  input:{
    borderBottomColor:"white",
    borderBottomWidth:2,
    flex:1,
    margin:10,
    color:"white"
  },
  button:{
    backgroundColor:"white",
    width:40,
    height:40,
    padding:10,
    margin:5,
    borderRadius:3,
    alignItems:"center"
  },
  textButton:{
    color:"red",
    fontWeight:"bold"
  },
  card:{
    width:"80%",
    backgroundColor:"#F4012D",
    marginHorizontal:"10%",
    marginVertical:20,
    padding:15,
    borderRadius:6,
    alignItems:"center"
  },
  textCard:{
    color:"white"
  }
  
})