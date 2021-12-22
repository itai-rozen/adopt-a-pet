import React from 'react'
import Api from '../../api'
import Form from '../../components/Form/Form'
import './edit.css'

export default class  Edit extends React.Component {
    state = { pet: {} }
    componentDidMount = async () => {
        const pet = await Api.getPet(this.props.id)
        this.setState({pet: pet})
    }
    render(){
        console.log('@ Edit: ',this.state)
        const {name,age,gender, avatar} = this.state
        console.log(name,age,gender)
        return <Form id={this.props.id} age={age} gender={gender} avatar={avatar} name={name} handle="edit" />
    }
} 