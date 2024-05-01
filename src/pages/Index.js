
import { Form } from "react-router-dom";
// import { useState } from "react";

const Landing = () => {
    // const menus = useLoaderData()

    return (
        <div>
        <h2>Home</h2>
        {/* {menus.map((menu) => (
            <div key={menu._id}>
                <Link to={`${menu._id}`}>
                    <h1>{menu.name}</h1>
                </Link>
                {menu.image && <img src={menu.image} alt={menu.name} width="250px"height="250px"/>}
                <h5>{menu.description}</h5>
                <h6>{menu.price}</h6>

            </div>
                ))
        } */}

        <h2>Add Menu Item</h2>
        <Form action="/create" method="post">
            <input type="input" name="name" placeholder="name" />
            <input type="input" name="image" placeholder="image" />
            <input type="input" name="description" placeholder="description" />
            <input type="input" name="price" placeholder="price" />
            <input type="submit" value="Add Item" />
        </Form>
    </div>
    )}

export default Landing

