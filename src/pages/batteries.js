
import React from 'react'
import Layout from "../components/layout"

const batteries = () => (
  <Layout>
    <article className="sheet">
      <div className="sheet__body">
        <h2>Batteries</h2>
        <p>There are many different types of batteries. Here, however, I would like to specifically discuss 18650 battery cells, since they are used often in my projects.
           If you are interested in learning more about other types of batteries and their advanatages and disadvantages, <a href="https://components101.com/articles/different-types-of-batteries-and-their-uses" target="_blank">this article</a> does a great job of explaining that.
        </p>
        <h3>18650 Battery Cells</h3>
        <p>18650s are a popular lithium-ion rechargeable battery. They are commonly used in flashlights, laptops, and many other devices.</p>
        <p>The size of an 18650 battery cell is in its name. It has a diameter of 18 mm and length of 65 mm. The "0" at the end means that the battery cell has a cylindrical shape.</p>
        <img src="https://cdn3.volusion.com/aysfz.utqha/v/vspfiles/photos/samsung30q-2.jpg" alt="18650" height="350" width="350" />
        <h3>Series & Parallel</h3>
        <p>Cells are connected in series when the positive end of one cell connects to the negative end of another.
           When cells are connected in series, their voltages add, meaning that you get more power.
        </p>
        <img src="https://media.discordapp.net/attachments/801387755858034699/819487897547046952/unknown.png" alt="10S2P Battery Pack Wrapped" height="400" width="250"/>
        <p>On the other hand, cells are connected in parallel when the positive end of one cell connects to the positive end of another and the negative end connects to the negatve end of the other.
           When cells are connected in parallel, their amp-hour capacicities add, meaning that they will last longer.
        </p>
        <img src="https://media.discordapp.net/attachments/801387755858034699/819488125453074462/unknown.png" alt="10S2P Battery Pack Wrapped" height="400" width="250"/>
        <p></p>
        <p>Have you ever heard of 6S4P, 10S2P, 12S1P, etc. battery packs and wondered what that meant?</p>
        <p>These numbers and letters simply refer to the configuration of the battery cells in the battery pack.</p>
        <p>For example, let's say you have a 10S2P battery pack made of 18650 cells.
           This means that you have a row of 10 18650 cells connected in series and then 2 of these rows connected in parallel for a total of 20 18650 battery cells.
        </p>
        <img src="https://cdn.discordapp.com/attachments/801387755858034699/819482108476522528/10s2p_36v_battery_pack_with_panasonic_pf_18650_battery_cu_iso.png" alt="10S2P Battery Pack"/>
        <img src="https://cdn.discordapp.com/attachments/801387755858034699/819482980924915712/unknown.png" alt="10S2P Battery Pack Wrapped" height="300" width="450"/>
        <p>The nominal voltage of an 18650 cell is 3.7 volts. Since you have 10 of these cells in series, you would have a total of 37 volts.
           Furthermore, let's say that the nominal capacity of a single cell is 2500 mAh. Since you have 2 rows in parallel, you would have a total amp-hour capacity of 5000 mAh.
        </p>
      </div>
    </article>
  </Layout>
)

export default batteries
