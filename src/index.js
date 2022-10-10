import React from "react"; //Main React.js library
import ReactDOM from "react-dom/client"; //we use ReactDOM to render into the DOM

// only update the value of this array
const navlinkItems = [
  'Link to google.com'
  ,
  'Link to facebook.com'
  ,
  'Link to amazon.com'
];

const content = <ul className="nav">{navlinkItems.map((item, idx) => <li className='nav-item' key={idx}><a className="nav-link" href="#">{item}</a></li>)}</ul>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(content);
