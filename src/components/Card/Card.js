import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [
        {
          name: "BMW",
          brand: "x6",
          year: 2022,
          color: "black",
          img: img1,
        },
        {
          name: "Bugatti",
          brand: "Chiron",
          year: 2022,
          color: "blue",
          img: img2,
        },
        {
          name: "Chevrolet",
          brand: "Nexia",
          year: 2002,
          color: "white",
          img: img3,
        },
        {
          name: "Daewoo",
          brand: "Tico",
          year: 1992,
          color: "red",
          img: img4,
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="card-group">
          {this.state.cars.map((value, index) => (
            <div className="card h-100" key={index}>
              <img src={value.img} />
              <div className="card-body">
                <h5 className="card-title">
                  {value.name} {value.brand}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Card;
