import * as actionTypes from "../constants/Product"

let i = 0;

const INITIAL_STATE = {
  products:[
    {
      id : ++i,
      text:"Milk",
      toBuy:true
    },
    {
      id : ++i,
      text:"Eggs Medium 12 pack",
      toBuy:false
    },
    // {
    //   id : ++i,
    //   text:"Wholemeal Bread"
    // },
    // {
    //   id : ++i,
    //   text:"Vanila Ice cream"
    // },
    // {
    //   id : ++i,
    //   text:"Water one bottle"
    // },
    // {
    //   id : ++i,
    //   text:"Eggs Medium 12 pack"
    // },
    // {
    //   id : ++i,
    //   text:"Wholemeal Bread"
    // },
    // {
    //   id : ++i,
    //   text:"Vanila Ice cream"
    // },
    // {
    //   id : ++i,
    //   text:"Water one bottle"
    // },
    // {
    //   id : ++i,
    //   text:"Vanila Ice cream"
    // },
    // {
    //   id : ++i,
    //   text:"Water one bottle"
    // },
  ]
};


const Product = (state = INITIAL_STATE ,action) => {
	switch(action.type){
		case actionTypes.ADD_PRODUCT:{
        const newList = [...state.products,{
            id:++i,
            text:action.text,
            toBuy:true
        }]
        return {
          ...state,
          products:newList
        }
    }
    case actionTypes.REMOVE_PRODUCT:{
			const newList = state.products.filter(e => e.id !== action.id);
			return {
				...state,
				products:newList
			}
		}

    case actionTypes.CHANGE_AVAILABILITY:{
      console.log("action",action)
      const index = state.products.findIndex(e => e.id === action.id);
      console.log("index",index);
      const newList = [...state.products.slice(0,index),
      Object.assign(state.products[index],{"toBuy":action.toBuy})
      ,...state.products.slice(index + 1)];  
      return {
        ...state,
        products:newList
      }
    }
    default : return state;
	}
}

export default Product;