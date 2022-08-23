import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native'

class App extends Component {

 render() {
    return (
     <View style={[styles.app,styles.container]}>
          <Image
            style={{top:120}}
            source={require('./android/LOL.jpeg')}
            /> 
        <View style={[styles.texter,{bottom:210},{right: 25}]}>
          <Text style={[styles.text1, {top:120}]}>
            welcome to
          </Text>
        </View>
        <View>
          <Text style={[styles.text2, {top: 200}]}>
            Select your Plan...
          </Text>
          <Text>
         
          </Text>
        </View>
        <TouchableOpacity
         style={[styles.button1, {top: 200}, {right:80}]}
        >
         <Text>STOW</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={[styles.button2, {left: 80}, {top: 113}]}
        >
         <Text style={styles.buttonText}>STOW COOP</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color:'black',
    fontSize: 20
  },
  text2: {
    color:'black',
  },
  button1: {
    width:136,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: "blue",
    padding: 15,
    marginBottom: 30
  },
  button2: {
    width:136,
    borderWidth: 1,
    borderColor:"blue",
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: "white",
    padding: 15,
    marginBottom: 30
  },
  buttonText: {
    color: "blue"
  }
})

export default App;