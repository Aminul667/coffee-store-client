import React from "react";

const AddCoffee = () => {
  const handleAddCoffee = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const detail = form.detail.value;
    const photo = form.photo.value;

    const newCoffee = {name, quantity, supplier, test, category, detail, photo};
    console.log(newCoffee);
  }
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* form row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Coffee Name"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Available Quantity"
                name="quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Supplier Name"
                name="supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Test</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Test"
                name="test"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Category"
                name="category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Detail</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Detail"
                name="detail"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* photo url */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Photo Url"
                name="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <button className="btn btn-block" type="submit">Add Coffee</button>
      </form>
    </div>
  );
};

export default AddCoffee;
