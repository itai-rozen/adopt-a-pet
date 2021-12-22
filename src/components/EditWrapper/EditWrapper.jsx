import React from 'react'
import { useParams } from 'react-router-dom'
import Edit from '../../Pages/Edit/Edit'
const EditWrapper = () => {
    const { id } = useParams()
    console.log('param id: ',id)
    return <Edit id={id} />
}

export default EditWrapper