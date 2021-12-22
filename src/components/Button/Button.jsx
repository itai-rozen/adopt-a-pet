import React from 'react'
import './button.css'

export default class Button extends React.Component {
    handle = () => {
        if (this.props.handleClick) this.props.handleClick(this.props.id)        
    }
    render(){
        return <button className='pet-btn' onClick={this.handle} >{this.props.content}</button>
    }
}