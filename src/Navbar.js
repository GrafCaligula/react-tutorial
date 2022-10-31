import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    }
    render() {
      return(
        <div>
          <ul>
            <h1>Restaurant</h1>
            <li>Menu</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
      )
    }
}

export default Navbar;