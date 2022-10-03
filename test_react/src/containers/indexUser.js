import * as actions from'../actions/index'
import { connect } from 'react-redux'
import React from 'react'
import ComponentUser from '../componentUser'
class ItemContainerUser extends React.Component{
    componentDidMount(){
        this.props.getItem()}
    render(){
        return(
            <ComponentUser {...this.props}/>
            
    )}
}
const mapStateToProps=(state)=>{
    return{
        item:state.items.listItem,
        nameSearch:state.items.nameSearch
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
      
        searchItem:(data)=>{

            dispatch(actions.searchItemRequest(data))
        },
       getItem:()=>{
        dispatch(actions.getItemRequest())
       }
          
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainerUser)