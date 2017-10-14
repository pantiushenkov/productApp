import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import Swipeout from 'rn-swipe-out';
import SwipeIcon from "../components/SwipeIcon";
import { ListItem } from 'react-native-elements';

export default class ProductUnit extends Component{

    componentDidMount(){ 
      if(this.props.product.toBuy) 
        this.refs.Swipeout.performAnimation(64)
    }

    render(){
      const {text,toBuy} = this.props.product;
      return (
        <Swipeout
          ref = "Swipeout"  
          style = {styles.container}
          left = {[
              {component : SwipeIcon}
          ]}
          onOpen = {()=> toBuy === false ? this.props.onOpen(true): null}
          onClose = {()=>this.props.onOpen(false)}
        >
         <View>
            <View style = {styles.block} >
              <View style = {styles.innerBlock}>
                  <Text style = {styles.text}>{text}</Text>
              </View>
              <View>
               <SwipeIcon icon = {"home"}/>
              </View>
            </View>
          </View>
        </Swipeout>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    height : 60,
    backgroundColor : "#fff",
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  text:{
    fontSize: 21,
    fontWeight: '500'
  },
  block:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerBlock : {
    flex: 1,
    marginLeft : 20,
    justifyContent: 'center',
  }
});
