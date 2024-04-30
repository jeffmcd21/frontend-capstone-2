

import { redirect } from "react-router-dom";

const URL = process.env.REACT_APP_URL;
//update
export const updateAction = async ({request, params}) => {
const formData = await request.formData()
const updatedMenu = {
    name: formData.get('name'),
    image: formData.get('image'),
    description: formData.get('description'),
    price: formData.get('price')
}
await fetch(`${URL}menu/${params.id}`, {
    method: "put",
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify(updatedMenu)
})

return redirect("/")
}

//create
export const createAction = async ({request, params}) => {
    const formData = await request.formData()
    const createdMenu = {
        name: formData.get('name'),
        image: formData.get('image'),
        description: formData.get('description'),
        price: formData.get('price')
    }
    await fetch(`${URL}menu`, {
        method: "post",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(createdMenu)
    })
    
    return redirect("/")
    }
    //delete
    export const deleteAction = async ({params}) => {
        await fetch (`${URL}menu/${params.id}`, {
            method: 'delete'
        });
        return redirect('/')
    }