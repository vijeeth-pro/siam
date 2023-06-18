import React, { useState } from 'react'

function WhyUs() {
    const [content] = useState([
        {
            title: 'Skin in the game',
            desc: 'We believe that for a product to be developed (vs a project) all stakeholders need to have skin in the game. We do this by tying our incentives to the product wins and being penalised for our failures.',
            img: 'https://siamcomputing.com/wp-content/uploads/2022/05/branding-150x150.png'
        },
        {
            title: 'Product Mindset',
            desc: 'From the product manager all the way down to the engineer. Everyone is aligned on doing what is right for the user. We invest time and money learning frameworks and ideas that help our startup founders.',
            img: 'https://siamcomputing.com/wp-content/uploads/2022/05/app-development-150x150.png'
        },
        {
            title: 'Developing for Scale',
            desc: 'We understand you are solving problems with a large impact. At every step of the way, our dev team uses world-class practices to ensure whatever is built stands the test of time and scale.',
            img: '	https://siamcomputing.com/wp-content/uploads/2022/05/team-150x150.png'
        },
    ])


  return (
    <section className='why-us' data-aos="fade-up">
        <header className='whyus-heading'>
            Why Us.
        </header>
        <div className='whyus-contents'>
            {content.map((item, index) => {
                return (
                    <div className='whyus-main-content' key={index} data-aos="fade-up">
                        <img src={item.img} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                )
            })}
        </div>
        
    </section>
  )
}

export default WhyUs