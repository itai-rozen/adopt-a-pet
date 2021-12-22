import React from 'react'
import Api from '../../api'
import './homepage.css'
import CatList from '../../components/CatList/CatList'

export default class Homepage extends React.Component {

    state = { data: [], error: ''}



    updateState = async () => {
        const data = await Api.getData()
        if (typeof data === 'string') this.setState({ error: data })
        else this.setState({ data: data })
    }

    componentDidMount = async () => {
        this.updateState()
        console.log(this.state.data)
    }

    deleteHandler = async (id) => {
        await Api.deletePet(id)
        this.updateState()
    }

    render() {
        return (
            <div className='homepage-container'>
                {this.state.error && <h1 className='error-header'>{this.state.error.message}</h1>}
                <CatList deleteHandler={this.deleteHandler} data={this.state.data} />
            </div>
        )
    }
}