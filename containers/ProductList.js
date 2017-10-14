import React,{Component} from 'react';
import {connect} from "react-redux";

import * as eventActionCreators from "../actions/Product"
import ProductUnit from "../components/ProductUnit";
import EditProductUnit from "../components/EditProductUnit";
import { List } from 'react-native-elements';
import {Text,ScrollView,StyleSheet} from 'react-native';

class ProductList extends Component {

  onOpen(bool,id){
    this.props.changeAvailability(bool,id);
  }

  render(){
      const {products,removeProduct,editing} = this.props;
      
      return (
        <ScrollView>
        {editing ? 
        (
            <List style = {styles.list}>
              {products.map(product => (
                <EditProductUnit 
                key={product.id}
                text={product.text} 
                onRemove={()=>removeProduct(product.id)}/>
              ))}
            </List>
        ):(
            <List style = {styles.list}>
            {products.map(product => (
              <ProductUnit 
              key={product.id}
              product={product}
              onOpen={(bool)=>this.onOpen(bool,product.id)}/>
            ))}
            </List>
        )
      }
      </ScrollView> 
    )
  }
}

const styles = StyleSheet.create({
    list : {
      marginTop : 0
    }
})

const mapStateToProps = state => {
  return {
    products:state.products
  }
}

const mapDisptachToProps = dispatch => {
  return {
    removeProduct : id => {
      dispatch(eventActionCreators.removeProduct(id));
    },
    changeAvailability : (bool,id) => {
      dispatch(eventActionCreators.changeAvailability(bool,id));
    }
  }
}

export default connect(mapStateToProps,mapDisptachToProps)(ProductList);