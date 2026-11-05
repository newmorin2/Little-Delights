import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import menuItems from "../data/menu";

function Menu() {

    const [category, setCategory] = useState("All");

    const filteredItems = category === "All"
        ? menuItems
        : menuItems.filter((dis) => dis.category === category);

    const allMenu = filteredItems.map((dis) => (
        <div className="col-12 col-sm-6 col-lg-4 " key={dis.id}>
            <div className="card h-100 shadow-sm p-2 text-muted">
                <img src={dis.image} alt={dis.name} className="card-img-top menu-image" />

                <h5 style={{color:'#29443A'}} className="mt-2">{dis.name} </h5>
                <h6>KSh {dis.price}</h6>
                {/* <h6>Category: {dis.category}</h6> */}
                <h6>
                    <span className={dis.available === true ? 'menu-avail':'text-muted'}>
                        {dis.available === true ? "Available" : "Not Available"}
                    </span>
                </h6>
            </div>
        </div>
    ));

    return (
        <div id="menu" className="container py-3 mb-5">
            <CategoryFilter setCategory={setCategory} />
            <div className="row g-4">
                {allMenu}
            </div>

        </div>
    );
}

export default Menu;