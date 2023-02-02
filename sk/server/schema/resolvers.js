const {ProductList} =require('../data.js')
const fs =require('node:fs')

const resolvers = {
    Query:{
        mobiles:()=> ProductList,
        mobileById:(parent,args) =>{
            const id = Number(args.id)
           const mobile= ProductList.find(element => element.id === id)
           return mobile
        },
        mobileByName:(parent,args) =>{
            const name = (args.name)
           const mobile= ProductList.find(element => element.name === name)
           return mobile
        }
    },
    Mutation:{
        addMobile:(parent,args) =>{
            const newMobile = args.input
            const lastId = ProductList[ProductList.length-1].id 
            newMobile.id = lastId+1
            ProductList.push(newMobile)
            // fs.appendFileSync('../data.js', ProductList)
            return newMobile
        },
        deleteMobile:(parent,args) => {
            const id = Number(args.id)
            // const index= ProductList.forEach(element=> {
            //     if(element.id === id)
            //     {
            //     ProductList.splice(id,1)
            //     }
            // })
            const Product = ProductList.filter((item) => item.id !== id);
            ProductList=Product 
            return ProductList
        },
        modifyPrice:(parent,args) => {
            const id = Number(args.id)
            const newprice = Number(args.price)
            const mobile= ProductList.find(element => element.id === id)
            mobile.price = newprice
            return mobile
        },
        
    }
}

module.exports ={resolvers}