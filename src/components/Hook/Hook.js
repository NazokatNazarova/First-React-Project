import { useState } from "react";

let tr = "";
const submitForm = (e, formData) => {
  e.preventDefault();
  tr += `<tr><td>${formData.firstname}</td><td>${formData.lastname}</td><td>${formData.email}</td></tr>`;
  document.querySelector("#data2").innerHTML = tr;
  e.target.fname.value = "";
  e.target.lname.value = "";
  e.target.email.value = "";
};

const Hook = () => {
  const [value, setValue] = useState(0);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  return (
    <div>
      <span>{value}</span>
      <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(0)}>Reset</button>
      <button onClick={() => setValue(value - 1)}>-</button>
      <br />
      <form className="form" onSubmit={(e) => submitForm(e, formData)}>
        <label>First name</label>
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={(e) =>
            setFormData({ ...formData, firstname: e.target.value })
          }
        />
        <label>Last name</label>
        <input
          type="text"
          id="lname"
          name="lname"
          onChange={(e) =>
            setFormData({ ...formData, lastname: e.target.value })
          }
        />
        <label>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <table className="table2">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody id="data2"></tbody>
      </table>
    </div>
  );
};

export default Hook;
