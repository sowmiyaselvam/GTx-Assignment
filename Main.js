import React, { Component } from "react";
 
class Main extends Component {
  render() {
    return (
        <div>
          <h1>Tenants</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Property</a></li>
            <li><a href="/contact">Tenant</a></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
    );
  }
}
 
export default Main;