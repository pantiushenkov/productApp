import React,{Component} from 'react';
import { Image,View,StyleSheet } from 'react-native';

export default class SwipeIcon extends Component {
    render() {
      return (
        <View style = {styles.background}>
          <Image style = {styles.image} source={ this.props.icon == "home" ? require("../assets/images/home.png") :require ("../assets/images/cart.png")} />
        </View>
      );
    }
}

const styles = StyleSheet.create({
    background : {
      width: 60,
      height: 59,
      backgroundColor : "#e0e0e0",
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 30,
      height: 30
    }
});
