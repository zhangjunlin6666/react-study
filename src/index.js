import React from "react";
import ReactDOM from "react-dom";
import Penal from "./view/QQ/Penal";
import './index.css';
class App extends React.Component {
    render(){
        return (
            <Penal/>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('root'));
