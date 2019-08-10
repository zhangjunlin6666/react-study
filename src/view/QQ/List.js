import React from "react";
export default class List extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.list.map((item,index) => (
                        <li key={index}>
                            <span className={item.vip ? 'username' : ''}>
                                {item.username}
                            </span>
                            <div className='message'>
                                {item.message}
                            </div>
                        </li>
                    ))
                }
            </ul>
        )
    }
}