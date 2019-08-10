import data from "../../data";
import React from "react";
import Item from "./Item";

function SetShow(props) {
    let list = Object.keys(data).map((item,index) =>
        (
            <Item 
                key={item}
                data={data[item]}
                show={props.showList[index]}
                onChange={props.onChange}
                index={index}
            />
        )
    )
    return list;
}
export default class Penal extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showList:[false,false,true]
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(index){
        let showList = this.state.showList.map((item,itemIndex) => {
            if(index === itemIndex){
                return true;
            }
            return false;
        }) 
        this.setState({
            showList
        })
    }
    render(){
        return (
            <div className='penal'>
                <SetShow showList={this.state.showList} onChange={this.onChange}/>
            </div>
        )
   } 
}