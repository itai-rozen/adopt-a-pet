import React from 'react'
import Api from '../../api'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import './form.css'

export default class Form extends React.Component {
    state = {  name: "", 
            gender: "female", 
            age: null, 
            avatar: "",
            isSuccess: false }

    componentDidMount = () => {
        const { name,gender,age,avatar } =  this.props
        this.setState({
            name: name,
            gender: gender,
            avatar: avatar,
            age: age
        })
    }
    
    updateState = e => {
        const { id, value } = e.target
        this.setState({ [id]: value })
    }
    handleSubmit = e => {
        console.log('props @form: ',this.props)
        e.preventDefault()
        const petObj = {
            name: this.state.name,
            gender: this.state.gender,
            age: this.state.age,
            avatar: this.state.avatar,
            createdAt: new Date()
        }
        if (this.props.handle === 'add') {
            Api.addPet(petObj)
        }
        if (this.props.handle === 'edit'){
            Api.updatePet(this.props.id,petObj)
        }
        this.setState({isSuccess: true})
    }



    render() {
        
        return <div className='form-container'>
            <form className='pet-form' onSubmit={(e) => this.handleSubmit(e)} onChange={(e) => this.updateState(e)}>
                <label htmlFor="name">Name:</label>
                <input placeholder={this.state.name} type="text" id="name" />
                <label htmlFor="avatar">Image url</label>
                <input  placeholder={this.state.avatar} type="text" id="avatar" />
                <label htmlFor="age">Age</label>
                <input placeholder={this.state.age} type="number" name="age" id="age" />
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" >
                    <option value="female">female</option>
                    <option value="male">male</option>
                </select>
                <input type="submit" value="Ok" />
            </form>
            {this.state.isSuccess && <h1>{this.props.handle}ed succesfully!</h1>}
            <Link to="/">
            <Button content="Back to homepage" />
            </Link>
        </div>
    }
}