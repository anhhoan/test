import React, { Component } from "react";
class Items extends Component {
    state = {
        name: '',
        nameUpdate: '',
        nameSearch: '',
        id: ''
    }
    handleInput(e) {
        this.setState({ name: e.target.value })
    }
    handleSignout(){
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        window.location='/'
    }

    render() {       
        let listData = []
        if (this.props.item) {
            listData = this.props.item.map((item, key) => {
                return (
                    <tr key={key} >
                        <th>{key + 1}</th>
                        <th>{item.name}</th>
                        <th><button onClick={() => this.props.deleteItem({ id: item._id })}>xoa</button></th>
                        <th><button onClick={() => this.setState({  id: item._id ,nameUpdate:item.name})}>chon</button></th>
                    </tr>
                )
            })
        }
        return (
            <div>
                <input onChange={(e) => this.handleInput(e)} />
                <button onClick={() =>{
                     this.props.addItem({ name: this.state.name })}}>add</button>
                <input onChange={(e) => this.setState({ nameUpdate: e.target.value })} value={this.state.nameUpdate} />
                <button onClick={() => this.props.updateItem({ nameUpdate: this.state.nameUpdate, id: this.state.id })}>update</button>
                <input onChange={(e) => this.setState({ nameSearch: e.target.value })} />
                <button onClick={() => this.props.searchItem({ nameSearch: this.state.nameSearch })}>Search</button>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>stt</th>
                                <th>Ten cua du lieu</th>
                            </tr>
                            {listData}
                        </tbody>
                    </table>
                        <button onClick={()=>this.handleSignout()}>Log Out</button>
                </div>
            </div>
        )
    }
}
export default Items