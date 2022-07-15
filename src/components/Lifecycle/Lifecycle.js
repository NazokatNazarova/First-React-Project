import React, { Component } from "react";
//Lifecycle phases are mounting, updating, unmounting
class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite_number: 7,
      show: true,
    };
  }
  //   static getDerivedStateFromProps(props, state) {
  //     return { favourite_number: props.number };
  //   }

  shouldComponentUpdate() {
    return true;
  }

  updateFavouriteNumber = () => {
    this.setState({ favourite_number: 17 });
    console.log(this.state.favourite_number);
  };
  componentDidMount() {
    //bu funksiya ishlashi uchun getDerived.. ni commentga ol
    //API ni shu funksiya ichiga qo'yish kere
    setTimeout(() => {
      this.setState({ favourite_number: 18 });
    }, 2000);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("before").innerHTML = prevState.favourite_number;
  }
  componentDidUpdate() {
    document.getElementById("after").innerHTML = this.state.favourite_number;
  }
  deleteSpan = () => {
    this.setState({ show: false });
  };
  render() {
    let myBlock;
    if (this.state.show) {
      myBlock = <span>DIV</span>;
    }
    return (
      <div>
        {myBlock}
        <br />
        <button onClick={this.deleteSpan}></button>
        <span>My favourite number is {this.state.favourite_number}</span>
        <br />
        <span id="before"></span>
        <br />
        <span id="after"></span>
        <button onClick={this.updateFavouriteNumber}>Change</button>
      </div>
    );
  }
}

export default Lifecycle;
