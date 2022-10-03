import * as actions from'../actions/index'
import { connect } from 'react-redux'
import React from 'react'
import ComponentLogin from '../componentLogin'
class ItemContainerLogin extends React.Component{
   
    render(){
        return(
            <ComponentLogin {...this.props}/>
            
    )}
}
const mapStateToProps=(state)=>{
    return{
        item:state.items.listItem,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        login:(data)=>{
            dispatch(actions.loginRequest(data))
        }
       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainerLogin)