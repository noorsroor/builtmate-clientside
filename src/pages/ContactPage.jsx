// src/pages/ContactPage.jsx
import axios from "axios";
import { useState } from "react";

// Color constants based on provided palette
const COLORS = {
  gold: "#E7A624",
  lightGold: "#F8EED2",
  brown: "#A0906B",
  lightBrown: "#EAE5DC",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#F5F5F5",
  darkGray: "#333333",
};

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [responseType, setResponseType] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Name is required";
    if (!form.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = "Email is invalid";
    if (!form.subject.trim()) errors.subject = "Subject is required";
    if (!form.message.trim()) errors.message = "Message is required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Clear error for this field when typing
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setResponse("");
    
    try {
      const res = await axios.post("https://builtmate-serverside.onrender.com/api/contact", form);
      setResponse("Thank you! Your message has been sent successfully.");
      setResponseType("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setResponse("Failed to send message. Please try again later.");
      setResponseType("error");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded-md bg-white text-darkGray border focus:outline-none transition-all duration-300";
  const labelClasses = "block text-sm font-semibold mb-2 text-darkGray";
  const errorClasses = "text-red-500 text-xs mt-1 font-medium";

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white min-h-screen flex flex-col justify-center">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32" style={{ backgroundColor: COLORS.lightBrown, opacity: 0.3, zIndex: -1 }}></div>
      <div className="absolute bottom-0 right-0 w-full h-32" style={{ backgroundColor: COLORS.lightGold, opacity: 0.3, zIndex: -1 }}></div>
      
      <div className="relative mb-12 mt-10 text-center">
        <div className="absolute -top-15  left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center" 
             style={{ backgroundColor: COLORS.lightGold, border: `2px solid ${COLORS.gold}` }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill={COLORS.brown}>
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </div>
        <h2 className="text-4xl font-bold mt-8" style={{ color: COLORS.brown }}>Get in Touch</h2>
        <div className="w-24 h-1 mx-auto mt-3 mb-4" style={{ backgroundColor: COLORS.gold }}></div>
        <p className="text-darkGray max-w-lg mx-auto">We value your feedback and are eager to assist with any inquiries. Please fill out the form below, and our team will respond promptly.</p>
      </div>

      <div className="bg-gray rounded-xl shadow-lg overflow-hidden" style={{ borderTop: `4px solid ${COLORS.gold}` }}>
        <div className="md:flex">
          {/* Contact information sidebar */}
          <div className="md:w-1/3 p-8" style={{ backgroundColor: COLORS.brown }}>
            <h3 className="text-xl font-semibold mb-6" style={{ color: COLORS.white }}>Contact Information</h3>
            
            <div className="mb-6">
              <p className="text-sm mb-1" style={{ color: COLORS.lightGold }}>Email</p>
              <a href="mailto:contact@example.com" className="text-white hover:text-lightGold transition-colors">
                contact@example.com
              </a>
            </div>
            
            <div className="mb-6">
              <p className="text-sm mb-1" style={{ color: COLORS.lightGold }}>Phone</p>
              <a href="tel:00962799540485" className="text-white hover:text-lightGold transition-colors">
                +(962) 799540485
              </a>
            </div>
            
            <div className="mb-8">
              <p className="text-sm mb-1" style={{ color: COLORS.lightGold }}>Address</p>
              <p className="text-white">
                1191 Business Avenue<br />
                Amman, Jordan
              </p>
            </div>
            
            
          </div>
          
          {/* Form section */}
          <div className="md:w-2/3 p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="md:flex md:space-x-4 space-y-5 md:space-y-0">
                <div className="md:w-1/2">
                  <label htmlFor="name" className={labelClasses}>Your Name</label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`${inputClasses} ${
                      formErrors.name 
                        ? "border-red-500" 
                        : form.name 
                          ? "border-green-500" 
                          : "border-gray-300"
                    }`}
                    style={{ 
                      boxShadow: formErrors.name ? "0 0 0 1px #EF4444" : "none",
                    }}
                  />
                  {formErrors.name && <p className={errorClasses}>{formErrors.name}</p>}
                </div>

                <div className="md:w-1/2">
                  <label htmlFor="email" className={labelClasses}>Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`${inputClasses} ${
                      formErrors.email 
                        ? "border-red-500" 
                        : form.email 
                          ? "border-green-500" 
                          : "border-gray-300"
                    }`}
                    style={{ 
                      boxShadow: formErrors.email ? "0 0 0 1px #EF4444" : "none",
                    }}
                  />
                  {formErrors.email && <p className={errorClasses}>{formErrors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={labelClasses}>Subject</label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className={`${inputClasses} ${
                    formErrors.subject 
                      ? "border-red-500" 
                      : form.subject 
                        ? "border-green-500" 
                        : "border-gray-300"
                  }`}
                  style={{ 
                    boxShadow: formErrors.subject ? "0 0 0 1px #EF4444" : "none",
                  }}
                />
                {formErrors.subject && <p className={errorClasses}>{formErrors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className={labelClasses}>Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  className={`${inputClasses} h-40 resize-none ${
                    formErrors.message 
                      ? "border-red-500" 
                      : form.message 
                        ? "border-green-500" 
                        : "border-gray-300"
                  }`}
                  style={{ 
                    boxShadow: formErrors.message ? "0 0 0 1px #EF4444" : "none",
                  }}
                />
                {formErrors.message && <p className={errorClasses}>{formErrors.message}</p>}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  style={{ 
                    backgroundColor: loading ? COLORS.darkGray : COLORS.gold,
                    color: COLORS.white,
                  }}
                  className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-brown transform hover:-translate-y-1"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : "Send Message"}
                </button>
              </div>
            </form>

            {response && (
              <div 
                className={`mt-6 p-4 rounded-md ${
                  responseType === "success" ? "bg-green-50" : "bg-red-50"
                }`}
                style={{ 
                  borderLeft: `4px solid ${responseType === "success" ? "#10B981" : "#EF4444"}` 
                }}
              >
                <p 
                  className="text-sm font-medium"
                  style={{ 
                    color: responseType === "success" ? "#10B981" : "#EF4444" 
                  }}
                >
                  {response}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ContactPage;