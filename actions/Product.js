import * as actionTypes from "../constants/Product"

export const removeProduct = id => {
	return {
		type: actionTypes.REMOVE_PRODUCT,
		id
	}
}

export const addProduct = text => {
	return {
		type: actionTypes.ADD_PRODUCT,
		text
	}
}

export const changeAvailability = (toBuy,id) => {
	return {
		type: actionTypes.CHANGE_AVAILABILITY,
		toBuy,
		id,
	}
}
