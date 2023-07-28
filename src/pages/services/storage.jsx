/* eslint-disable no-unused-vars */
//buscar os links salvos ==
export async function GetLink(key) {
const MyLinks = await localStorage.getItem(key)  

let linksSaves = JSON.parse(MyLinks)  || []  

return linksSaves                              
}

//salvar os links ==
export async function SaveLink(key, NewObj) {
let linkStorage = await GetLink(key)              


const haveLink = linkStorage.some(link => link.img === NewObj.img)

if (haveLink) {
    return
}

linkStorage.push(NewObj) 
await localStorage.setItem(key, JSON.stringify(linkStorage))
console.log('link salvo com sucesso')

}

//deletar links ==

export function DeleteLinks (all, img) {
let myLinks = all.filter(item => {
    return item.img !== img
})
localStorage.setItem('@DanDev', JSON.stringify(myLinks))
console.log('item removido')
return myLinks
}


//atualizar link ==

export async function UpdateLinks(img, title, price, description, count, id) {


let linkStorage = await GetLink('@DanDev')     

let arr = linkStorage.filter( function(item) {
    return item.id === id
})

const position = linkStorage.indexOf(arr[0])

    let Edit = JSON.parse(localStorage.getItem('@DanDev')).filter(item => item.img !== img)  
    
    let New = {                                                                            
        amount: count,
        description: description,
        id: id,
        img: img,
        price: price,
        title: title,
    }
    Edit.splice(position, 0, New)


    localStorage.setItem('@DanDev', JSON.stringify(Edit))          

}