
import React from 'react'
import Layout from "../components/layout"

const Arduino = () => (
  <Layout>
    <article className="sheet">
      <div className="sheet__body">
        <h2>Arduinos</h2>
        <p>An Arduino is a microcontroller that comes with its own software to program it.
           Microcontrollers are programmable circuit boards designed to help create interactive objects or environments.
           Arduinos can interact with other electronic components, such as lights and motors.
           Essentially, they are a piece of both hardware and software that are used to control electronic components and read and write data.
        </p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg" alt="Arduino Uno"/>
        <p>A typical microcontroller has a power supply input, input and output (I/O) pins (used to connect wires), and LEDs (light emitting diodes) to indicate the condition that the microcontroller is in.</p>
        <img src="https://www.student-circuit.com/wp-content/uploads/sites/54/2019/03/Arduino-pinout.jpg" alt="Arduino Uno Pinout"/>
        <h3>What makes the Arduino so popular?</h3>
        <p>There are many different microcontrollers out there, with the Arduino Uno being one of the most popular, since it is relatively inexpensive and it is open source, meaning that its source code is made publicly available.</p>
        <p>Additionally, there are many ways to extend the capabilities of an Arduino (and other microcontrollers).
           One such way is by adding shields.
           Shields are an additional circuit board that fit on top of your microcontroller and give it more capabilities.
           These capabilities can range from controlling motors to being able to connect to the internet.
        </p>
        <img src="https://cdn.sparkfun.com/assets/4/b/5/b/0/51193957ce395fa447000000.jpg" alt="Arduino with Shield"/>
      </div>
    </article>
  </Layout>
)

export default Arduino
