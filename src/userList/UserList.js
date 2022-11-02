import React from "react";
import classes from './userList.module.css'

class UserList extends React.Component{
    constructor(props){
        super()
        this.state={
            idInfo:[]
        }
    }
    getInfoOne = (e) => {
        console.log(e.target.dataset.id);
        fetch(`https://jsonplaceholder.typicode.com/users/${e.target.dataset.id}`)
        .then(response => response.json())
        .then((data) => {
            let arr = Object.values(data)
            arr[4].geo=Object.values(arr[4].geo)
            arr[4]=Object.values(arr[4])
            
            arr[7]=Object.values(arr[7])
            let newarr = arr.flat(Infinity)
            this.setState({idInfo:newarr})
            }

        )  
    }
    
    render(){
        return(
        
            <>
              <ul className={classes.noList}>
                    <li>Данные</li>
                    {this.state.idInfo.map(info=><li>{info}</li>)}
                </ul>
                <ul className={classes.noList}>
                    {this.props.names.map(name=><li className={classes.Centr}>
                    {name.name}
                    <button data-id={name.id} onClick={this.getInfoOne}>Посмотреть</button>
                    </li>)}
                </ul>   
            </>
        )
    }

}
export default UserList