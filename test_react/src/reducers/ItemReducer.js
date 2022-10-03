import * as types from '../constants'
const DEFAULT_STATE = {
    listItem: [],
    isFetching: false,
    dataFetched: false,
    error: false,
    errorMessage: null,
    activePage: 1,
    totalPage: 1,
    nameSearch: null
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_ITEM_REQUEST:
        case types.LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.GET_ITEM_SUCCESS:
            return {
                ...state,
                listItem: action.payload.listStudent,
                isFetching: false,
                dataFetched: true,


            }
        case types.GET_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.payload.message
            }
        case types.ADD_ITEM_REQUEST:
        case types.DELETE_ITEM_REQUEST:
        case types.UPDATE_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.ADD_ITEM_SUCCESS:
        case types.DELETE_ITEM_SUCCESS:
        case types.UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,


            }

        case types.ADD_ITEM_FAILURE:
        case types.DELETE_ITEM_FAILURE:
        case types.UPDATE_ITEM_FAILURE:
        case types.LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.payload.message


            }
        case types.PAGINATE_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.PAGINATE_ITEM_SUCCESS:
            return {
                ...state,
                listItem: action.payload.res,
                isFetching: false,
                dataFetched: true,
                activePage: action.payload.activePage,
                totalPage: action.payload.totalPage


            }
        case types.PAGINATE_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.payload.message


            }

        case types.SEARCH_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.SEARCH_ITEM_SUCCESS:
            return {
                ...state,
                listItem: action.payload.res,
                isFetching: false,
                dataFetched: true,
                activePage: action.payload.activePage,
                totalPage: action.payload.totalPage,
                nameSearch:action.payload.nameSearch


            }
        case types.SEARCH_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.payload.message
            }
            default:
            return state
    }
}