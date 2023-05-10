import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, test, category, detail, photo } =
    coffee;

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
    
        const form = event.target;
    
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const detail = form.detail.value;
        const photo = form.photo.value;
    
        const updatedCoffee = {
          name,
          quantity,
          supplier,
          test,
          category,
          detail,
          photo,
        };
        console.log(updatedCoffee);
    
        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedCoffee),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Coffee Updated Successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
      };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Update Coffee: {name}</h2>
      <form onSubmit={handleUpdateCoffee}>
        {/* form row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={name}
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
                defaultValue={quantity}
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
                defaultValue={supplier}
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
                defaultValue={test}
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
                defaultValue={category}
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
                defaultValue={detail}
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
                defaultValue={photo}
                placeholder="Photo Url"
                name="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <button className="btn btn-block" type="submit">
          Update Coffee
        </button>
      </form>
    </div>
  );
};

export default UpdateCoffee;
