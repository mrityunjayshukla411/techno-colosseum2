import * as React from "react";
import Landing from './landing';
import About from './about';
import Domain from "./domains";
import Faq from "./faq";
import Contact from "./contact";
import Navigationbar from "../components/Navigationbar";
import CountDownTimer from "./countdown";
import { Helmet } from "react-helmet"
import "../css/landing.css"

const IndexPage = () => {
  return (
    <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Techno Colosseum</title>
        </Helmet>
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
         <CountDownTimer/>
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
