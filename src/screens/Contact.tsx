"use client";
import React, { useState, useRef } from "react";
import styles from "@/css/Contact.module.scss";
import { MdWavingHand } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/joy";

export default function Contact() {
  const [conf, setConf] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_icz1ddo",
        "template_7a5pr0b",
        form.current!,
        "iGBBLTpvkK4KkB8XI"
      )
      .then(
        (res) => {
          if (res.text == "OK") {
            setOpen(true);
            setConf(true);
            setTimeout(() => {
              setConf(false);
            }, 5000);
          }
          console.log(res.text);
        },
        (error) => {
          setConf(false);
          console.log(error);
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormFilled =
    formData.user_name && formData.user_email && formData.message;

  return (
    <div id="contact" className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2>Lets Have a Chat!</h2>
          <MdWavingHand size={30} color={"#a688fa"} />
        </div>
        <form className={styles.content} ref={form} onSubmit={sendEmail}>
          {/* <label>Name</label> */}
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder="Name"
          />
          {/* <label>Email</label> */}
          <input
            placeholder="Email"
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
          />
          <label>Message</label>
          <textarea
            name="message"
            cols={30}
            rows={10}
            value={formData.message}
            onChange={handleChange}
          />
          <input
            value="Send"
            type="submit"
            className={styles.buttonStyle}
            style={{
              backgroundColor: isFormFilled ? "#a688fa" : "#d3d3d3",
              color: isFormFilled ? "#fff" : "#000",
            }}
            disabled={!isFormFilled}
          />
        </form>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        variant="soft"
        color={conf ? "success" : "danger"}
        onClose={() => {
          setOpen(false);
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        {conf ? "Your email has been sent!" : "Email Failed! Please try again."}
      </Snackbar>
    </div>
  );
}
