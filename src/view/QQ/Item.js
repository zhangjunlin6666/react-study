import React from "react";
import List from "./List";
export default class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show:this.props.show
        }
        this.onChange = this.onChange.bind(this);
        this.list = React.createRef();
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.show !== nextProps.show){
            this.setState({
                show:nextProps.show
            })
        }
        if(this.state.show !== nextState.show){
            this.showList(nextState.show);
        }
        return false;
    }
    showList(show){
        var list = this.list.current;
        if(show){
            list.style.height = list.scrollHeight + 'px';
        } else {
            list.style.height = 0;
        }
    }
    componentDidMount(){
        this.showList(this.state.show);
    }
    onChange(){
        let show = !this.state.show;
        this.setState({
            show
        })

        if(show){
            this.props.onChange(this.props.index);
        } 
    }
    render() {
        return (
            <div>
                <h2 className='title' onClick={this.onChange}>{this.props.data.name}</h2>
                <div className='list-wrap' ref={this.list}>
                    <List list={this.props.data.list}/>
                </div>
            </div>
        )
    }
}