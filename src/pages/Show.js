import React from 'react'
import { useLoaderData, Form } from 'react-router-dom'

const Show = () => {
  const menu = useLoaderData();

  return (
    <div className='landing-container'>
    <div className="container mt-3 mb-5">
      <div className="row">
        <div className="col-md-6">
          <h1>{menu.name}</h1>
          <h3>{menu.description}</h3>
          <h5>${menu.price}</h5>
          <img src={menu.image} alt={menu.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>Update {menu.name}</h2>
          <Form action={`/update/${menu._id}`} method='post'>
            <div className="mb-3">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="name" defaultValue={menu.name} id="name" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="image">Image URL</label>
              <input type="text" name="image" placeholder="image address (url)" defaultValue={menu.image} id="image" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="description">Description</label>
              <input type="text" name="description" placeholder="description" defaultValue={menu.description} id="description" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="price">Price</label>
              <input type="number" name="price" placeholder="price" defaultValue={menu.price} id="price" className="form-control" />
            </div>
            <input type="submit" value={`Update ${menu.name}`} className="btn btn-primary" />
          </Form>

          <hr />

          <h2>Delete {menu.name}</h2>
          <Form action={`/delete/${menu._id}`} method='post'>
            <input type="submit" value={`Delete ${menu.name}`} className="btn btn-danger" />
          </Form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Show
