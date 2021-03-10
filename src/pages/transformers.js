  
import React from 'react'
import Layout from "../components/layout"

const transformers = () => (
  <Layout>
    <article className="sheet">
      <div className="sheet__body">
        <h2>Electrical Tranformers</h2>
        <p>Transformers are electrical devices that transfer electrical energy. They can be used to both lower and raise voltages.</p>
        <img src="https://lh3.googleusercontent.com/proxy/5K_t9Of1OWwvKILGlV6LOZ5us25MiCtqyZDmIL3ZFixJnbgOptpZ9H958HalQIYpgKwJ9Yt-IgnCc-17SVoDW6aH3BuEUHW-qIKBoa-BBWWBMtiaLQjmGSabCZOxNyNWh-10Mp5khYciT7iXqA" alt="Transformer" />
        <h3>How they Work</h3>
        <p>They work based on the fact that a magnetic field is generated when fluctuating electric current flows and electric current is generated when a magnetic field fluctuates.
           Inside a transformer there is a primary current coming from one coil of wires and a secondary current coming from another coil of wires.
           These coils are wrapped around a core (which is usually a soft iron bar) that helps the electrical energy move more efficiently.
        </p>
        <img src="https://www.electronics-tutorials.ws/wp-content/uploads/2018/05/transformer-trans65.gif" alt="Inside of Transformer"/>
        <p>Electrical energy passes between these coils. If the second coil has more or less turns in it than the first, then voltage and current in it will be smaller or bigger than the first coil.</p>
        <p>There are two main types of transformers, a step-down transformer that lowers the voltage and a step-up transformer that raises the voltage.
           In a step-down transformer, the second coil will have less turns than the first and in a step-up transformer, the second coil will have more turns.
        </p>
        <img src="https://3.imimg.com/data3/TV/XB/MY-9314779/step-down-transformers-500x500.gif" alt="Step Up and Step Down Transformers"/>
        <h3>Uses</h3>
        <p>Transformers are commonly used in many household items, such as phone and laptop chargers.</p>
        <img src="https://qph.fs.quoracdn.net/main-qimg-21f6d6a6e68ddb40e66b3e6c791f4032.webp" alt="Transformer Uses"/>
      </div>
    </article>
  </Layout>
)

export default transformers
