import axios from 'axios'

const axiosApi = axios.create({baseURL: 'https://61c304949cfb8f0017a3e8a6.mockapi.io/catApi'})
export default class Api {
    static async  getData() {
        try {
            const data = await axiosApi.get()
            return data.data
        }
        catch(err){
            return err.message
        }
    } 

    static async addPet(petObj){
        await axiosApi.post('/',petObj)
    }

    static async deletePet(id){
         await axiosApi.delete(`/${id}`)
    }

    static async getPet(id){
        const data = await this.getData()
        const petById =  data.find(pet => pet.id === id)
        return  petById
    }

    static async updatePet(id, newObj){
        const res = await axiosApi.put(`/${id}`, newObj)
    }
} 