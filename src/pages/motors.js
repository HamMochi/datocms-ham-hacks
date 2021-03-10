
import React from 'react'
import Layout from "../components/layout"

const motors = () => (
  <Layout>
    <article className="sheet">
      <div className="sheet__body">
        <h2>A Quick Guide to Motors</h2>
        <p>I believe that the easiest way to learn about motors is through an example. Therefore, we will use this <a href="https://www.amazon.com/gp/product/B07JNL22RX/ref=ox_sc_act_title_1?smid=A3A2EGS28BCD1T&psc=1" target="_blank">Hobbysky 6374 motor</a> as our example.</p>
        <img src="https://media.discordapp.net/attachments/801387755858034699/819182832819372053/unknown.png" alt="Motor" />
        <p></p>
        <p>Before going over the specifications of this motor, first notice the "6374" in its name. These 4 digits describe the size of the motor. The first two digits is the diameter in millimeters and the last two digits is the length in millimeters. So, we have here a motor with a diameter of 63 mm and length of 74 mm.</p>
        <p>Now, here are the main specs:</p>
        <ul>
          <li>Shaft: 8mm</li>
          <li>Motor Kv: 170 Kv</li>
          <li>Input Voltage: 2-12S</li>
          <li>Max. Current: 120 A</li>
          <li>Max. Torque: 3.57 Nm</li>
          <li>Max. Power: 3600 W</li>
        </ul>
        <h3>Shaft Size</h3>
        <p>The shaft size referes to the diameter of the motor's shaft. This is important to keep in mind to ensure that all your parts will fit together.</p>
        <img src="https://media.discordapp.net/attachments/801387755858034699/819182238108352532/unknown.png" alt="Motor Shaft" />
        <h3>Kv Rating</h3>
        <p>The Kv rating refers to the constant velocity of the motor. It is the number of revolutions per minute (rpm) given by the motor when 1 volt of electricity is applied with no load. A higher KV means a higher speed and vice versa.</p>
        <p></p>
        <p>In our example, if we used a 9 volt battery, then the motor would spin at 170 x 9 = 1530 rpm (with no load).</p>
        <h3>Input Voltage</h3>
        <p>This is the amount of voltage that the motor can take.</p>
        <p></p>
        <p>Our example motor can take anywhere from 2-12S, which translates to 7.4-44.4 volts. More on that <a href="https://ham-hacks.netlify.app/batteries" target="_blank">here</a>.</p>
        <h3>Maximum Current</h3>
        <p>This is the max current that the motor can pull. It is another important value to keep in mind to ensure that other parts are compatiible.</p>
        <p></p>
        <p>For example, let's say that we are choosing an electronic speed controller (ESC) for our motor. Since the max. current our motor pulls is 120 amps, we want an ESC that can output more than this.</p>
        <h3>Maximum Torque</h3>
        <p>The torque is the motor's rotational force. It is commonly measured in Newton-meters. Torque and power are directly proportional. This means that if one increases, so does the other. On the other hand, torque and speed are inveresly proportional, so the higher the torque, the lower the rpm.</p>
        <h3>Maximum Power</h3>
        <p>The power of the motor is measured in watts. More power means that the motor can have higher torque or speed.</p>
      </div>
    </article>
  </Layout>
)

export default motors
