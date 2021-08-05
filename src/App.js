import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Head1 } from "./components/Head1";
import { Form } from "./components/Form";
// import Faq from "react-faq-component";
import { Contact } from "./components/Contact";
import { Faq } from "./components/Faq";

function App() {
  const [data, setdata] = useState([
    {
      question: "When will the server go live?",
      answer: `The server is currently under development and the release date will be announced soon on our website`,
      open: false,
    },
    {
      question: "Do we have to pay to play on the server?",
      answer: `Yes, this is a paid server but we are planning to do a 20 day free trial. As soon as the trial period is over you will be required to pay some amount (negligible) per month to be able to continue on the server`,
      open: false,
    },
    {
      question: "Do I have to buy minecraft to play?",
      answer:
        "No, you don't have to buy minecraft to play on our server since we allow the use of cracked clients such as TLauncher which are free.",
      open: false,
    },
    {
      question: "What kind of server is this?",
      answer: `This is an anarchy server where you are allowed to do whatever the f*** you want. The only rule is that you are not allowed to use hacks.`,
      open: false,
    },
    {
      question: "Add more Questions here", // TODO add
      answer: "hello",
      open: false,
    },
  ]);

  

  return (
    <>
      <Navbar />
      <Head1 />
      <Form />
      {/* <Faq
                data={data}
                styles={styles}
                config={config}
            /> */}
      <Faq data={data} setdata={setdata}/>
      <Contact />
    </>
  );
}

export default App;
