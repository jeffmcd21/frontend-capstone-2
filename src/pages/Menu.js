
import { useLoaderData, Link } from "react-router-dom";
// import { useState } from "react";

const Menu = () => {
    const menus = useLoaderData()

    return (
    <div>
        <div className="container mt-3 mb-5">
      <h2>Menu</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {menus.map((menu) => (
          <div key={menu._id} className="col">
            <Link to={`${menu._id}`} className="text-decoration-none">
              <div className="card h-100 shadow-sm">
                {menu.image && (
                  <img
                    src={menu.image}
                    alt={menu.name}
                    className="card-img-top"
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{menu.name}</h5>
                  <p className="card-text">{menu.description}</p>
                  <h6>${menu.price}</h6>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>

        {/* <h2>Add Menu Item</h2>
        <Form action="/create" method="post">
            <input type="input" name="name" placeholder="name" />
            <input type="input" name="image" placeholder="image" />
            <input type="input" name="description" placeholder="description" />
            <input type="input" name="price" placeholder="price" />
            <input type="submit" value="Add Item" />
        </Form> */}
    </div>
    )}

export default Menu

