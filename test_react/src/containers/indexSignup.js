import * as actions from'../actions/index'
import { connect } from 'react-redux'
import React from 'react'
import ComponentSignUp from '../componentsignup'
class ItemContainerSignUp extends React.Component{
   
    render(){
        return(
            <ComponentSignUp {...this.props}/>
            
    )}
}
const mapStateToProps=(state)=>{
    return{
        item:state.items.listItem,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
      
        signUp:(data)=>{
            dispatch(actions.signUpRequest(data))
        }
     
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainerSignUp)