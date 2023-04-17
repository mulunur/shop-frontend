import { useEffect, useState } from "react"
import { IProduct } from "../models"
import axios, { AxiosError } from "axios"

export function useProducts(){
    const [products, setProduct] = useState<IProduct[]>([])

    const [loading, setLoading] = useState(false)
  
    const [error, setError] = useState("")

    function addProduct(product: IProduct) {
      setProduct(prev => [...prev, product])
    }
  
    async function fetchProducts() {
      try{
        setError('')
        setLoading(true)
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
        console.log(response)
      
        //  вызов функции из useState
        setProduct(response.data)
        setLoading(false)
      } catch (e: unknown){
        const error = e as AxiosError
        setLoading(false)
        setError(error.message)
      }
      
    }
  
    // useEffect принимает на вход коллбэк и массив зависимостей для коллбэка
    useEffect(() => {
      fetchProducts()
    }, [])
     
    return { products, error, loading, addProduct}
}