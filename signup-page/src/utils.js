export const  getProducts = async()=>{
    console.log('Hello World')
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log("sxsx",data)
    return data
};