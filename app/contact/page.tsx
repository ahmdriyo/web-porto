"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";

import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 821 5494 0857",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ahmadriyo.tbn@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description:
      "Handil Bakti Kec. Alalak Kab. Barito Kuala Kalimantan Selatan",
  },
];


const Contact = () => {

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const handleChange = (e : any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e : any) => {
    e.preventDefault();
  
    emailjs.sendForm(
      'service_xfkzbb9', 
      'template_0jgp5yz', 
      e.target,
      'lUmiAtPDtKTSSUNS9'
    ).then(() => {      
      alert('Your message has been successfully sent!');
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
      });
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message. Please try again later.');
    });
  
    
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form 
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">{`let's contact me`}</h3>
              <p className="text-white/60">
              Write me some messages or sentences
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  onChange={handleChange}
                  value={formData.firstname}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  onChange={handleChange}
                  value={formData.lastname}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  onChange={handleChange}
                  value={formData.email}
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Write your message here."
                onChange={handleChange}
                value={formData.message}
              />
              <Button size="md" className="max-w-40" type="submit">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[42px] h-[42px] xl:w-[62px] xl:h-[62px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[23px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Contact;
