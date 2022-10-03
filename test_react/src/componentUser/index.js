import React,{Component} from "react";
export default class ComponentUser extends Component{
    state={
        nameSearch:''
    }
    handleSignout(){
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        window.location='/'
    }
    render(){
        let arr1=['1','2','3','4','5']
        let arr2=['2','6','9','3','7','8']
        for(let i=0; i<arr1.length; i++){
            for(let j=0; j<arr2.length; j++){
                if(arr2[j].includes(arr1[i])){
                    arr1.splice(i,1)
                    console.log(arr1,'===>arr');
                }
            }
        }
        let listData=[]
        if(this.props.item){
            listData=this.props.item.map((item,key)=>{
                return(
                    <tr key={key}>
                        <th>{key+1}</th>
                        <th>{item.name}</th>
                    </tr>
                )
            })
        }
        return(
            <div>
                <div>
                    <input onChange={(e)=>this.setState({nameSearch:e.target.value})}/>
                    <button onClick={()=>this.props.searchItem({nameSearch:this.state.nameSearch})}>Search</button>
                    <table>
                        <tbody>
                            <tr>
                                <th>STT</th>
                                <th>Ten </th>
                            </tr>
                            {listData}
                        </tbody>
                   </table>
                   <button onClick={()=>this.handleSignout()}>dang xuat</button>

                </div>
                
            </div>
        )
    }
}