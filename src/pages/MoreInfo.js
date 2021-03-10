import React from 'react'
import { Link } from "gatsby";
import Layout from "../components/layout"

const MoreInfo = () => (
  <Layout>
    <article className="sheet">
      <div>
        <h1>Click on a topic to learn more about it!</h1>
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
      </div>
    </article>
  </Layout>
)

export default MoreInfo
