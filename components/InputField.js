import React,{Component} from 'react';
import {Text,View,StyleSheet,TextInput} from 'react-native';;
import Swipeout from 'rn-swipe-out';
import SwipeIcon from "../components/SwipeIcon";
import { ListItem } from 'react-native-elements';


export default class InputField extends Component{
    render(){
      const {onChangeText,text,charactersLeft} = this.props;

      return (
        <View style = {styles.block}>
        <View style = {styles.textBlock}>
          <Text style = {styles.text}>Add new list item</Text>
        </View>
        <View style = {styles.input}>
          <TextInput 
           maxLength = {27}
           onChangeText={(text) => onChangeText(text)} />    
        </View>
        <View style = {styles.rightBlock}>
          <Text style = {styles.text}>Characters left {charactersLeft}</Text>
        </View>
      </View>  
      );
    }
}


const styles = StyleSheet.create({
  block : {
    marginTop:40, 
    marginHorizontal:15,
  },
  textBlock:{
    alignItems: 'center',
    marginVertical : 20
  },
  input : {
    height:20,
    borderBottomColor: '#000000',
    borderBottomWidth: 1   
  },
  rightBlock:{
    alignSelf: 'flex-end'
  },
  text:{
    fontWeight:"bold",
    fontSize:16  
  }
})
