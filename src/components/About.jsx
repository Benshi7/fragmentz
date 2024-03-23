import React from 'react';
import { TextGenerateEffect } from '../ui/text-generate-effect';

export default function About(){
    const description = "Fragmentz is a web development company that specializes in creating websites for clients."+
    " We provide a range of services to help you create the website of your dreams. Our team of experts will work "+
    "with you to design a website that meets your needs and exceeds your expectations. Whether you are looking to "+
    "create a simple website or a complex e-commerce site, we have the skills and experience to help you achieve your goals."
    return(
        <div className='m-2'>
            <h1 className='ext-5xl text-3xl justify-start text-left font-bold text-violet-500'>About Us</h1>
            <TextGenerateEffect words={description} />
            <br/>
            <h2>Our Team</h2>
        </div>
    )
}