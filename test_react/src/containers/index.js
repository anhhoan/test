import * as actions from'../actions/index'
import { connect } from 'react-redux'
import Items from '../components/index'
import React from 'react'
class ItemPageContainer extends React.Component{
    componentDidMount(){
        this.props.getItem()
    }
    render(){
        return(
        <Items {...this.props}/>    
    )}
}
const mapStateToProps=(state)=>{
    return{
        item:state.items.listItem
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getItem:()=>{
            dispatch(actions.getItemRequest())
        },
        addItem:(data)=>{
            dispatch(actions.addItemRequest(data))
        },
        deleteItem:(data)=>{
            dispatch(actions.deleteItemRequest(data))
        },
        updateItem:(data)=>{
            dispatch(actions.updateItemRequest(data))
        },
        searchItem:(data)=>{

            dispatch(actions.searchItemRequest(data))
        },
    
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemPageContainer)