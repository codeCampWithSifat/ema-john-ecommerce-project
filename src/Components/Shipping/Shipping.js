import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebasel.init";

const Shipping = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [user] = useAuthState(auth);

  const handleNameBlur = (e) => {
    setName(e.target.value);
  };

  const handleAddessBlur = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneBlur = (e) => {
    setPhone(e.target.value);
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    const shippingInfo = {name, address, phone,email}
  };
  return (
    <div className="form_container">
      <div>
        <h2 className="form_title">Shipping Information Here</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input_group">
            <label htmlFor="name">Your Name</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              id=""
              required
            />
          </div>

          <div className="input_group">
            <label htmlFor="email">Your Email</label>
            <input 
            type="email"
             name="email"
             value={user?.email}
             readOnly
             id="" required />
          </div>
          <div className="input_group">
            <label htmlFor="address">Your Address</label>
            <input
              onBlur={handleAddessBlur}
              type="text"
              name="address"
              id=""
              required
            />
          </div>

          <div className="input_group">
            <label htmlFor="phone">Your Current Phone Number</label>
            <input
              onBlur={handlePhoneBlur}
              type="text"
              name="phone"
              id=""
              required
            />
          </div>

          <div className="form_login">
            <input
              className="input_login"
              type="submit"
              value="Add To Shipping"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
