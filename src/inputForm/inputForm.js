import React, { useState } from "react";

const InputForm = ({ getInputFormData }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [id, setid] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    getInputFormData({ id, firstName, lastName, email, phone });
  };

  return (
    <div>
      {!isFormOpen ? (
        <button
          className="btn btn-outline-secondary mt-5 mb-5"
          type="button"
          onClick={() => {
            setIsFormOpen(true);
          }}
        >
          Add Contact
        </button>
      ) : (
        <form className="noValidate" noValidate onSubmit={submitHandler}>
          <div className="form-row mt-3">
            <div className="col-md-1 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="id"
                value={id}
                onChange={(event) => {
                  setid(event.target.value);
                }}
              />
            </div>
            <div className="col-md-3 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                value={firstName}
                onChange={(event) => {
                  setfirstName(event.target.value);
                }}
              />
            </div>
            <div className="col-md-3 mb-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-describedby="validationTooltipUsernamePrepend"
                  value={lastName}
                  onChange={(event) => {
                    setlastName(event.target.value);
                  }}
                />
                <div className="invalid-tooltip">
                  Please choose a unique and valid Last name.
                </div>
              </div>
            </div>
            <div className="col-md-2 mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="email"
                value={email}
                onChange={(event) => {
                  setemail(event.target.value);
                }}
              />
              <div className="invalid-tooltip">
                Please provide a valid email.
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="phone"
                value={phone}
                onChange={(event) => {
                  setphone(event.target.value);
                }}
              />
            </div>
          </div>

          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </form>
      )}
    </div>
  );
};
export default InputForm;
