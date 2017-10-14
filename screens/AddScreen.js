import React from 'react';
import { WebBrowser } from 'expo';
import {Text,View,StyleSheet,Image,Button} from 'react-native';
import AddProduct from "../containers/AddProduct";

export default class AddScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {goBack,state} = navigation;
  
    return {
      gesturesEnabled: false,
      title: "Add new list item",
      headerLeft : <Button
            title = {"Cancel"}
            color = "black"
            onPress={() => goBack()}
        />,
      headerRight: (
        <Button
            title = {"Done"}
            color = "black"
            onPress={() => {
              state.params.save();
              return goBack()
            }}
        />
      )};
  };

  save(){
    this.refs.addProduct.getWrappedInstance().save();
  }

  componentWillMount() {
    this.props.navigation.setParams({
        save: this.save.bind(this)
    });
  }

  render() {
    return (
        <AddProduct ref="addProduct"/>
    )
  }
}
