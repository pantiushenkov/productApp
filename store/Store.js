import React from "React";
import {createStore} from "redux";
import {Provider} from "react-redux";
import MainTabNavigator from '../navigation/MainTabNavigator';
import reducers from "../reducers/Product"

const Store = () => (
	<Provider store = {createStore(reducers)}>
		<MainTabNavigator/>
	</Provider>	
)

export default Store; 