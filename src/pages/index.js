import * as React from "react";
import Landing from './landing';
import About from './about';
import Domain from "./domains";
import Faq from "./faq";
import Contact from "./contact";
import Navigationbar from "../components/Navigationbar";
import CountdownPage from "./countdown";

const IndexPage = () => {
  return (
    <div className="main">
      <Navigationbar/>
       <section id="home">
         <Landing/>
       </section>
       <section id="about">
         <About/>
       </section>
       <section id="domains">
         <Domain/>
       </section>
       <section id="countdown">
         <CountdownPage/>
       </section>
       <section id="faqs">
         <Faq/>
       </section>
       <section id="contact">
         <Contact/>
       </section>
    </div>
  )
}

export default IndexPage;
