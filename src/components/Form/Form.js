import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  formSubmit = (e) => {
    e.preventDefault();
    let firstname = document.querySelector("#fname").value;
    let lastname = document.querySelector("#lname").value;
    let email = document.querySelector("#email").value;
    let obj = {
      firstname: firstname,
      lastname: lastname,
      email: email,
    };
    this.setState({ list: this.state.list.push(obj) });
    console.log(this.state.list);
    let data = document.querySelector("#data").innerText;
    this.state.list.map(
      (value) =>
        (data += `<tr><td>${value.firstname}</td><td>${value.lastname}</td><td>${value.email}</td></tr>`)
    );
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.formSubmit}>
          <label>First name</label>
          <input type="text" id="fname" />
          <label>Last name</label>
          <input type="text" id="lname" />
          <label>Email</label>
          <input type="email" id="email" />
          <button type="submit">Submit</button>
        </form>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody id="data"></tbody>
        </table>
      </div>
    );
  }
}

export default Form;
