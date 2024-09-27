import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Input from "./Input";
import Popup1 from "./Popup1";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    console.log(form.current);
    e.preventDefault();

    emailjs
      .sendForm("service_8ag49fe", "template_2afhc45", form.current, {
        publicKey: "0Bvlro6EzX9COhkhT",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className='h-full max-w-lg w-full mx-auto my-6 p-6 rounded-3xl bg-gradient-to-r from-black/80 to-black/30'>
      <h1 className='text-3xl text-center text-gray-300 font-bold mb-6'>
        Contact Us
      </h1>
      <form ref={form} onSubmit={sendEmail}>
        <Input name='Name' />
        <Input name='E-mail' />
        <Input name='Message' isMessage={true} />
        <div className='flex justify-center mt-3 bg-purple-900/60 rounded-xl mx-12 cursor-pointer'>
          <input className='cursor-pointer' type='submit' value='Send' />
        </div>
      </form>
      <div className='w-full flex justify-center items-center mt-8'>
        <Popup1 />
      </div>
    </div>
  );
};

export default Contact;
