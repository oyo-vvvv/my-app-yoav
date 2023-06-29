import React, { useRef, useState } from "react";
import EarthCanvas from "../Canvas/Earth"
import "./Contact.css"

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // emailjs
    //   .send(
    //     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    //     {
    //       from_name: form.name,
    //       to_name: "JavaScript Mastery",
    //       from_email: form.email,
    //       to_email: "sujata@jsmastery.pro",
    //       message: form.message,
    //     },
    //     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       alert("Thank you. I will get back to you as soon as possible.");

    //       setForm({
    //         name: "",
    //         email: "",
    //         message: "",
    //       });
    //     },
    //     (error) => {
    //       setLoading(false);
    //       console.error(error);

    //       alert("Ahh, something went wrong. Please try again.");
    //     }
    //   );
  };

  return (
    <div
      className="contactSection"
    >
      <div className="contactDocument">
        <p>Get in touch</p>
        <h3>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="contactForm"
        >
          <label className="contactFlexCol">
            <span>Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
            />
          </label>
          <label className="contactFlexCol">
            <span>Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
             
            />
          </label>
          <label className="contactFlexCol">
            <span>Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project."
             
            ></textarea>
          </label>

          <button
            type="submit"
            disabled={loading}
            className={`flex items-center gap-2 py-3 px-6 rounded-lg bg-primary text-white font-medium hover:bg-opacity-90 transition-opacity ${
              loading && "opacity-50 cursor-not-allowed"
            }`}
          >
            {/* {loading ? (
              <svg
                className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                ></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                ></path>
              </svg>
            ) : (
              "Send Message"
            )} */}
            Send Message
          </button>
        </form>

        
      </div>
      <div id="canvasEarth">
          <EarthCanvas />
        </div>
    </div>
  );
};

export default Contact;
