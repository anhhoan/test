import React,{Component} from "react";
class ComponentLogin extends Component{
    state={
        username:'',
        password:'',
        a:''
    }
    

    render(){
        
        return(
            <div>
                <div> 
                                    TRANG ĐĂNG NHẬP
                                    <br></br>
                    <input onChange={(e)=>this.setState({username:e.target.value})} ></input>
                    <input type='password' onChange={(e)=>this.setState({password:e.target.value})} ></input>

                    <button
                     onClick={()=>{this.props.login({username:this.state.username,password:this.state.password })
                                    }}>login</button>
                    
                    <br></br>
                    bạn chưa có tài khoản?<a href="/signup">Đăng kí</a>
                </div>
            </div>
        )
    }
}
export default ComponentLogin
