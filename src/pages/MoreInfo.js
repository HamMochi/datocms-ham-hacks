import React from 'react'
import { Link } from "gatsby";

const MoreInfo = () => (
  <div>
    <h1>NOT FOUND</h1>
      <li>
        <Link to="/Arduino">Arduinos</Link>
      </li>
      <li>
        <Link to="/batteries">Batteries</Link>
      </li>
      <li>
        <Link to="/motors">Motors</Link>
      </li>
      <li>
        <Link to="/switches">Switches</Link>
      </li>
      <li>
        <Link to="/transformers">Transformers</Link>
      </li>
    <p>buttons</p>
  </div>
)

export default MoreInfo
