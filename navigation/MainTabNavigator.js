import React from 'react';
import { Platform,TouchableOpacity,StyleSheet,Image,Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom,StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import AddScreen from '../screens/AddScreen';

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../assets/images/cart.png")}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const HomeStack = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Add: {
    screen: AddScreen
  },
})

const MyApp = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions : {
      tabBarIcon: () => (
        <Image
          source={require("../assets/images/list-icon-inactive.png")}
          style={styles.icon}
        />
      ),
    }
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'red',
    showLabel : false
  },
});

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});


export default MyApp;
