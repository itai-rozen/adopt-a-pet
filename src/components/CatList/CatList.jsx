import React from 'react'
import Button from '../Button/Button'
import Cat from '../Cat/Cat'
import { Link } from 'react-router-dom'
import './catList.css'

export default class CatList extends React.Component {

    render() {
        const { data } = this.props
        return <ul className='cat-list'>
            {
                data.map(catObj => {
                    const { id } = catObj
                    return <Cat deleteHandler={this.props.deleteHandler}  cat={catObj} key={id} />
                })
            }
                        <Link to="/add">
                <Button content="Add" />
            </Link>
        </ul>
    }
}