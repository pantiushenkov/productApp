import React from 'react';
import { WebBrowser } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
import IconO from 'react-native-vector-icons/Entypo';

import {Text,View,StyleSheet,Image,Button} from 'react-native';
import ProductList from "../containers/ProductList";

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    const { editing } = state.params || false;
    return {
      gesturesEnabled: false,
      title: "Groceries",
      headerLeft: (
          editing ? (<IconO.Button
            backgroundColor = 'transparent'
            name="plus"
            color = "black" size = {30}
            underlayColor = 'transparent'
            onPress={() => navigation.navigate('Add')}/> 
          ) : (null)),
      headerRight: (
          editing ? 
          (<Button
            title = {"Done"}
            color = "black"
            onPress={() => navigation.setParams({ editing: false})}/> 
          ):(<Icon.Button
            raised = {false}
            name="ios-create-outline"
            backgroundColor = 'transparent'
            color = "black" size = {30}
            underlayColor = 'transparent'
            onPress={() => navigation.setParams({ editing: true})}/> 
          )
      )};
  };

 componentWillMount() {
    this.props.navigation.setParams({
        editing: false
    });
  }

  render() {
    const {state, setParams} = this.props.navigation;
    const { editing } = state.params || false;

    return (
        <ProductList editing = {editing}/>
    )
  }
}

const styles = StyleSheet.create({
  iconBlock : {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
