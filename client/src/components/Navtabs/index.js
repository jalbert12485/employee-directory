import React from "react";


function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.


  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="/" >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/about"
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/blog"
  
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/contact"
    
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/contact/learn"

        >
          Learn
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
