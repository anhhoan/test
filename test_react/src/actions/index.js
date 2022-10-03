import * as types from '../constants'
export function getItemRequest(payload){
    return{
        type:types.GET_ITEM_REQUEST,
        payload
    }
}
export function getItemSuccess(payload){
    return{
        type:types.GET_ITEM_SUCCESS,
        payload
    }
}
export function getItemFailure(payload){
    return{
        type:types.GET_ITEM_FAILURE,
        payload
    }
}
//HAM ADD 
export function addItemRequest(payload){
    console.log("payload add", payload);
    return{
        type:types.ADD_ITEM_REQUEST,
        payload
    }
}
export function addItemSuccess(payload){
    return{
        type:types.ADD_ITEM_SUCCESS,
        payload
    }
}
export function addItemFailure(payload){
    return{
        type:types.ADD_ITEM_FAILURE,
        payload
    }
}
//ham delete 
export function deleteItemRequest(payload){
    return{
        type:types.DELETE_ITEM_REQUEST,
        payload
    }
}
export function deleteItemSuccess(payload){
    return{
        type:types.DELETE_ITEM_SUCCESS,
        payload
    }
}
export function deleteItemFailure(payload){
    return{
        type:types.DELETE_ITEM_FAILURE,
        payload
    }
}
// ham update
export function updateItemRequest(payload){
    return{
        type:types.UPDATE_ITEM_REQUEST,
        payload
    }
}
export function updateItemSuccess(payload){
    return{
        type:types.UPDATE_ITEM_SUCCESS,
        payload
    }
}
export function updateItemFailure(payload){
    return{
        type:types.UPDATE_ITEM_FAILURE,
        payload
    }
}
//ham search
export function searchItemRequest(payload){
    return{
        type:types.SEARCH_ITEM_REQUEST,
        payload
    }
}
export function searchItemSuccess(payload){
    return{
        type:types.SEARCH_ITEM_SUCCESS,
        payload
    }
}
export function searchItemFailure(payload){
    return{
        type:types.SEARCH_ITEM_FAILURE,
        payload
    }
}
//ham paginattion
export function paginateItemRequest(payload){
    return{
        type:types.PAGINATE_ITEM_REQUEST,
        payload
    }
}
export function paginateItemSuccess(payload){
    
    return{
        type:types.PAGINATE_ITEM_SUCCESS,
        payload
    }
}
export function paginateItemFailure(payload){
    return{
        type:types.PAGINATE_ITEM_FAILURE,
        payload
    }
}

//
export function signUpRequest(payload){
    return{
        type:types.SIGNUP_REQUEST,
        payload
    }
}
export function signUpSuccess(payload){
    
    return{
        type:types.SIGNUP_SUCCESS,
        payload
    }
}
export function signUpFailure(payload){
    return{
        type:types.SIGNUP_FAILURE,
        payload
    }
}
export function loginRequest(payload){
    return{
        type:types.LOGIN_REQUEST,
        payload
    }
}
export function loginSuccess(payload){
    
    return{
        type:types.LOGIN_SUCCESS,
        payload
    }
}
export function loginFailure(payload){
    return{
        type:types.LOGIN_FAILURE,
        payload
    }
}