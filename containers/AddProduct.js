import React,{Component} from 'react';
import * as eventActionCreators from "../actions/Product"

import {connect} from "react-redux";
import InputField from "../components/InputField";

class AddProduct extends Component {
   constructor(props) {
    super(props);
    this.state = { text: '',charactersLeft:27 };
  }

  onChangeText(text){
    this.setState({
      text:text,
      charactersLeft: 27 - text.length
    })
  }

  save(){
    if(this.state.text !== "")
      this.props.addProduct(this.state.text)
  }

  render(){
    return (
        <InputField 
          text={this.state.text}
          charactersLeft ={this.state.charactersLeft}
          onChangeText = {(text)=>this.onChangeText(text)}
        />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProduct: text => dispatch(eventActionCreators.addProduct(text))
  }
}

export default connect(null,mapDispatchToProps,null,{withRef:true})(AddProduct);
