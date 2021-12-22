import React from 'react'
import { Link } from 'react-router-dom'
import Api from '../../api'
import Button from '../Button/Button'
import './cat.css'

export default class Cat extends React.Component {
    render(){
        const {age, id, name, gender, createdAt, avatar} = this.props.cat
        return  <li id={id} className='cat-item'>
            <p className="name">{name}</p>
            <p className="age">{age}</p>
            <p className="gender">{gender}</p>
            <img src={gender==="male"|| gender==="female"? `${avatar}`:`${avatar}/${id}`} alt="" />
            <p className='date'>{createdAt}</p>
            <Button content="X" id={id} handleClick={this.props.deleteHandler} />
            <Link to={"/edit/"+id}>
            <Button content="Edit" id={id}  handleClick={Api.updatePet} />
            </Link>
        </li>       
    }
}