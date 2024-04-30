import React from 'react'
import { useLoaderData, Form } from 'react-router-dom'
const Show = () => {
  const menu = useLoaderData();
  return (
    <div>
      <h1>{menu.name}</h1>
      <h3>{menu.description}</h3>
      <h5>{menu.price}</h5>
      <img src={menu.image} alt={menu.name} width="300px"height="300px"/>

      <h2>Update {menu.name}</h2>
      <Form action={`/update/${menu._id}`} method='post'>
        <input type="input" name="name" placeholder="name" defaultValue={menu.name} />
        <input type="input" name="image" placeholder="image address (url)" defaultValue={menu.image} />
        <input type="input" name="description" placeholder="description" defaultValue={menu.description} />
        <input type="input" name="price" placeholder="price" defaultValue={menu.price} />
        <input type="submit" value={`Update ${menu.name}`} />
      </Form>

      <h2>Delete {menu.name}</h2>
      <Form action={`/delete/${menu._id}`} method='post'>
        <input type="submit" value={`delete ${menu.name}`} />
      </Form>
    </div>
  )
}

export default Show