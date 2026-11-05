function CategoryFilter(props) {
    return (
        <div className="container my-5 mt-5">
            <h4 className="text-center mb-3">Explore Our Menu</h4>
            <div className="d-flex gap-2 flex-wrap justify-content-center">

                <button
                    className="btn btn-filter text-dark"
                    onClick={() => props.setCategory("All")}
                >
                    All
                </button>

                <button
                    className="btn btn-filter text-dark"
                    onClick={() => props.setCategory("Coffee")}
                >
                    Coffee
                </button>

                <button
                    className="btn btn-filter text-dark"
                    onClick={() => props.setCategory("Pastries")}
                >
                    Pastries
                </button>

                <button
                    className="btn btn-filter text-dark"
                    onClick={() => props.setCategory("Meals")}
                >
                    Meals
                </button>

                <button
                    className="btn btn-filter text-dark"
                    onClick={() => props.setCategory("Drinks")}
                >
                    Drinks
                </button>
            </div>
        </div>
    );
}

export default CategoryFilter;