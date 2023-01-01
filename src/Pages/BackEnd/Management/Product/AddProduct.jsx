const AddProduct = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target)
        fetch('http://localhost:8000/addproduct',
            {
                method: 'POST',
                headers: {
                    // 'Content-type': 'application/json; charset=UTF-8',
                },
                body: formData,
            },
        )
            .then((res) => res.json())
            .then(res => {
                console.log(res);
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <div className="form-group">
                    <label htmlFor="product-name">Product Name</label>
                    <input type="text" name='model' className="form-control" id="product-name" placeholder="Enter product name" />
                </div>
                <div className="form-group">
                    <label htmlFor="product-description">Product Description</label>
                    <textarea className="form-control" name='details' id="product-description" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="product-image">Product image Url</label>
                    <input type="text" className="form-control" name='img' id="product-image" placeholder="Product Image url" />
                </div>
                <div className="form-group">
                    <label htmlFor="product-price">Product Price</label>
                    <input type="number" className="form-control" name='price' id="product-price" placeholder="Enter product price" />
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </>
    )
};

export default AddProduct