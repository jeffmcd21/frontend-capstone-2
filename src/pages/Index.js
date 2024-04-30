
import { useLoaderData, Link, Form } from "react-router-dom";
import { useState } from "react";

const Landing = () => {
    const menus = useLoaderData()

    return (
    <div>
        {menus.map((menu) => (
            <div key={menu._id}>
                <Link to={`${menu._id}`}>
                    <h1>{menu.name}</h1>
                </Link>
                {menu.image && <img src={menu.image} alt={menu.name} />}
                <h5>{menu.description}</h5>
                <h5>{menu.price}</h5>

            </div>
                ))
        }
    </div>
    )}

export default Landing

