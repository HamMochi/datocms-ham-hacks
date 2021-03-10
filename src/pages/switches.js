import React from 'react'
import Layout from "../components/layout"

const switches = ({ toggleTheme }) => (
  <Layout>
    <article className="sheet">
      <div className="sheet__body">
        <h2>Switches</h2>
        <p>Switches are devices that complete or break the flow of electricity. The most basic type is switch is a Single Pole Single Throw (SPST). This means that the switch has 1 input and 1 output.</p>
        <img src="https://cdn.discordapp.com/attachments/801387755858034699/819194266860519464/unknown.png" alt="SPST" />
        <h3>Normally Open (NO) vs Normally Closed (NC)</h3>
        <p>These switches have two states, open and closed.</p>
        <p>Here is a switch in an open state:</p>
        <img src="https://scontent.fsac1-2.fna.fbcdn.net/v/t1.15752-9/158858710_1358036657894341_797699633280457321_n.png?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=IpbAOhJihY8AX8Tskne&_nc_ht=scontent.fsac1-2.fna&oh=bb39c73690e6efd2b9f9dbbf3efcd8a7&oe=606B9A68" alt="Open Switch" />
        <p>Here is a switch in a closed state:</p>
        <img src="https://scontent.fsac1-1.fna.fbcdn.net/v/t1.15752-9/158038156_4099060143439362_4723908251725078153_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=ae9488&_nc_ohc=dTAnhkWb33cAX8zoDRh&_nc_ht=scontent.fsac1-1.fna&oh=76745893359c748334164354a4b7f485&oe=606EA809" alt="Closed Switch" />
        <p>As you can see, the connection is broken when the switch is in an open state. This means that electricity will not be able to flow through the switch. On the other hand, the connection is complete when the button is in a closed state, allowing the electricity to flow.</p>
        <p></p>
        <p>A normally open switch just means that the switch is in an open state by default and switches to a closed state when pressed. A normally closed switch is the opposite.</p>
        <h3>Types of Switches</h3>
        <p>There are many different types of switches out there!</p>
        <img src="https://cdn.thegeekpub.com/wp-content/uploads/2019/09/Types-of-Switches-Lots-of-different-types-of-switches-scaled.jpg" alt="Switches!"/>
        <p></p>
        <p> Here are a couple of common ones.</p>
        <p>Momentary Switch: Only switches to its "on" state while it is being pressed</p>
        <img src="https://www.shenzhen2u.com/image/cache/catalog/Buttons/Mini%20Push%20Button%20Switch-500x500.jpg" alt="Momentary Switch"/>
        <p>Latching Switch: Only needs to be pressed once to switch states and stays in that state until it is pressed again</p>
        <img src="https://images-na.ssl-images-amazon.com/images/I/61ICzMqkM1L._AC_SY355_.jpg" alt="Latching Switch"/>
      </div>
    </article>
  </Layout>
)

export default switches
