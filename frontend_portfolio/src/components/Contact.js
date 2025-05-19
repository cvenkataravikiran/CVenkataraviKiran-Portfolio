// import React, { useState, useRef, useEffect } from 'react';
// import { useTheme } from './ThemeContext';

// function Contact() {
//   const { theme, isDarkMode } = useTheme();
//   const form = useRef();
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [status, setStatus] = useState({
//     submitting: false,
//     error: null,
//     success: false
//   });

//   useEffect(() => {
//     // Initialize EmailJS with your public key
//     // emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to replace this with your actual public key
//   }, []);

//  const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ submitting: true, error: null, success: false });

//     try {
//       const response = await fetch('http://localhost:5000/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || 'Failed to send message');
//       }

//       setStatus({
//         submitting: false,
//         error: null,
//         success: true
//       });
//       setFormData({ name: '', email: '', message: '' });
//       setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
//     } catch (error) {
//       setStatus({
//         submitting: false,
//         error: error.message || 'Failed to send message. Please try again.',
//         success: false
//       });
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const inputStyle = {
//     backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : '#ffffff',
//     border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : theme.borderColor}`,
//     color: theme.textColor,
//     transition: 'all 0.3s ease-in-out',
//     padding: '12px 16px',
//     fontSize: '1rem',
//     '&:focus': {
//       backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.12)' : '#ffffff',
//       borderColor: theme.primaryColor,
//       boxShadow: `0 0 0 0.2rem ${isDarkMode ? 'rgba(96, 165, 250, 0.25)' : 'rgba(0, 123, 255, 0.25)'}`,
//       outline: 'none'
//     },
//     '&:hover': {
//       backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ffffff',
//       borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.3)' : theme.borderColor
//     }
//   };

//   const formStyles = {
//     input: {
//       ...inputStyle,
//       '::placeholder': {
//         color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.5)',
//         opacity: 1,
//         fontWeight: '400'
//       }
//     }
//   };

//   return (
//     <section 
//       id="contact" 
//       className="py-5"
//       style={{
//         backgroundColor: theme.cardBg,
//         color: theme.textColor,
//         transition: 'all 0.3s ease-in-out'
//       }}
//     >
//       <div className="container py-5">
//         <h2 
//           className="text-center mb-5"
//           style={{
//             color: theme.primaryColor,
//             textShadow: isDarkMode ? '2px 2px 4px rgba(0, 0, 0, 0.3)' : 'none'
//           }}
//         >
//           Contact Me
//         </h2>
//         <div className="row justify-content-center">
//           <div className="col-lg-8">
//             <div 
//               className="p-4 rounded"
//               style={{
//                 backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
//                 border: `1px solid ${theme.borderColor}`,
//                 boxShadow: `0 4px 6px ${theme.shadowColor}`
//               }}
//             >
//               <div className="row mb-4">
//                 <div className="col-md-4 mb-4 mb-md-0">
//                   <div className="text-center">
//                     <a 
//                       href="mailto:venkataravikiran.challa@gmail.com"
//                       className="text-decoration-none d-inline-block"
//                       style={{ 
//                         cursor: 'pointer',
//                         transform: hoveredItem === 'email' ? 'translateY(-3px)' : 'none',
//                         transition: 'transform 0.3s ease'
//                       }}
//                       onMouseEnter={() => setHoveredItem('email')}
//                       onMouseLeave={() => setHoveredItem(null)}
//                       title="Send me an email"
//                     >
//                       <div className="contact-icon-wrapper">
//                         <i 
//                           className="fas fa-envelope fa-2x"
//                           style={{ 
//                             color: theme.primaryColor,
//                             padding: '15px',
//                             borderRadius: '50%',
//                             backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
//                             boxShadow: `0 4px 6px ${theme.shadowColor}`
//                           }}
//                         ></i>
//                         <h3 className="h6 mt-2 mb-0">Email</h3>
//                       </div>
//                     </a>
//                   </div>
//                 </div>
//                 <div className="col-md-4 mb-4 mb-md-0">
//                   <div className="text-center">
//                     <a 
//                       href="tel:+919490595604"
//                       className="text-decoration-none d-inline-block"
//                       style={{ 
//                         cursor: 'pointer',
//                         transform: hoveredItem === 'phone' ? 'translateY(-3px)' : 'none',
//                         transition: 'transform 0.3s ease'
//                       }}
//                       onMouseEnter={() => setHoveredItem('phone')}
//                       onMouseLeave={() => setHoveredItem(null)}
//                       title="Call me"
//                     >
//                       <div className="contact-icon-wrapper">
//                         <i 
//                           className="fas fa-phone fa-2x"
//                           style={{ 
//                             color: theme.primaryColor,
//                             padding: '15px',
//                             borderRadius: '50%',
//                             backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
//                             boxShadow: `0 4px 6px ${theme.shadowColor}`
//                           }}
//                         ></i>
//                         <h3 className="h6 mt-2 mb-0">Phone</h3>
//                       </div>
//                     </a>
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="text-center">
//                     <a
//                       href="https://www.google.com/maps/place/Hyderabad,+Telangana,+India"
//                       className="text-decoration-none d-inline-block"
//                       style={{
//                         cursor: 'pointer',
//                         transform: hoveredItem === 'location' ? 'translateY(-3px)' : 'none',
//                         transition: 'transform 0.3s ease'
//                       }}
//                       onMouseEnter={() => setHoveredItem('location')}
//                       onMouseLeave={() => setHoveredItem(null)}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       title="View location on Google Maps"
//                     >
//                       <div className="contact-icon-wrapper">
//                         <i
//                           className="fas fa-map-marker-alt fa-2x"
//                           style={{
//                             color: theme.primaryColor,
//                             padding: '15px',
//                             borderRadius: '50%',
//                             backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
//                             boxShadow: `0 4px 6px ${theme.shadowColor}`
//                           }}
//                         ></i>
//                         <h3 className="h6 mt-2 mb-0">Location</h3>
//                       </div>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               {status.error && (
//                 <div 
//                   className="alert alert-danger mb-4" 
//                   role="alert"
//                   style={{
//                     backgroundColor: isDarkMode ? 'rgba(220, 53, 69, 0.1)' : '#f8d7da',
//                     color: '#dc3545',
//                     border: '1px solid #dc3545'
//                   }}
//                 >
//                   {status.error}
//                 </div>
//               )}
//               {status.success && (
//                 <div 
//                   className="alert alert-success mb-4" 
//                   role="alert"
//                   style={{
//                     backgroundColor: isDarkMode ? 'rgba(40, 167, 69, 0.1)' : '#d4edda',
//                     color: '#28a745',
//                     border: '1px solid #28a745'
//                   }}
//                 >
//                   Message sent successfully!
//                 </div>
//               )}
//               <form ref={form} onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Your Name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     style={formStyles.input}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Your Email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     style={formStyles.input}
//                   />
//                 </div>
//                 {/* <div className="mb-3">
//                   <textarea
//                     className="form-control"
//                     rows="5"
//                     placeholder="Your Message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     style={formStyles.input}
//                   ></textarea>
//                 </div> */}
//                 <div className="mb-3">
//                   <textarea
//                     className="form-control"
//                     rows="5"
//                     placeholder="Your Message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     style={formStyles.input}
//                     onKeyDown={e => {
//                       if (e.key === 'Enter' && !e.shiftKey) {
//                         e.preventDefault();
//                         handleSubmit(e);
//                       }
//                     }}
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="btn btn-lg w-100"
//                   disabled={status.submitting}
//                   style={{
//                     backgroundColor: theme.primaryColor,
//                     color: '#ffffff',
//                     border: 'none',
//                     transition: 'all 0.3s ease-in-out',
//                     opacity: status.submitting ? 0.7 : 1
//                   }}
//                 >
//                   {status.submitting ? 'Sending...' : 'Send Message'}
//                 </button>
//                 {/* Social Links Below Send Button */}
//                                 <div className="mt-4 text-center">
//                   <a
//                     href="https://github.com/cvenkataravikiran"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-decoration-none d-inline-block mx-3 social-link"
//                     title="GitHub"
//                     style={{
//                       color: theme.primaryColor,
//                       display: 'inline-block',
//                       transition: 'transform 0.2s'
//                     }}
//                     onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)'}
//                     onMouseLeave={e => e.currentTarget.style.transform = 'none'}
//                   >
//                     <div className="contact-icon-wrapper">
//                       <i className="fab fa-github fa-2x"
//                         style={{
//                           color: theme.primaryColor,
//                           padding: '15px',
//                           borderRadius: '50%',
//                           backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
//                           boxShadow: `0 4px 6px ${theme.shadowColor}`
//                         }}
//                       ></i>
//                       <h3 className="h6 mt-2 mb-0">GitHub</h3>
//                     </div>
//                   </a>
//                   <a
//                     href="https://www.linkedin.com/in/venkataravikiran/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-decoration-none d-inline-block mx-3 social-link"
//                     title="LinkedIn"
//                     style={{
//                       color: theme.primaryColor,
//                       display: 'inline-block',
//                       transition: 'transform 0.2s'
//                     }}
//                     onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)'}
//                     onMouseLeave={e => e.currentTarget.style.transform = 'none'}
//                   >
//                     <div className="contact-icon-wrapper">
//                       <i className="fab fa-linkedin fa-2x"
//                         style={{
//                           color: theme.primaryColor,
//                           padding: '15px',
//                           borderRadius: '50%',
//                           backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
//                           boxShadow: `0 4px 6px ${theme.shadowColor}`
//                         }}
//                       ></i>
//                       <h3 className="h6 mt-2 mb-0">LinkedIn</h3>
//                     </div>
//                   </a>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from './ThemeContext';

function Contact() {
  const { theme, isDarkMode } = useTheme();
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section 
      id="contact" 
      className="py-5"
      style={{
        backgroundColor: theme.cardBg,
        color: theme.textColor,
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <div className="container py-5">
        <h2 
          className="text-center mb-5"
          style={{
            color: theme.primaryColor,
            textShadow: isDarkMode ? '2px 2px 4px rgba(0, 0, 0, 0.3)' : 'none'
          }}
        >
          Contact Me
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div 
              className="p-4 rounded"
              style={{
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
                border: `1px solid ${theme.borderColor}`,
                boxShadow: `0 4px 6px ${theme.shadowColor}`
              }}
            >
              <div className="row mb-4">
                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="text-center">
                    <a 
                      href="mailto:venkataravikiran.challa@gmail.com"
                      className="text-decoration-none d-inline-block"
                      style={{ 
                        cursor: 'pointer',
                        transform: hoveredItem === 'email' ? 'translateY(-3px)' : 'none',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={() => setHoveredItem('email')}
                      onMouseLeave={() => setHoveredItem(null)}
                      title="Send me an email"
                    >
                      <div className="contact-icon-wrapper">
                        <i 
                          className="fas fa-envelope fa-2x"
                          style={{ 
                            color: theme.primaryColor,
                            padding: '15px',
                            borderRadius: '50%',
                            backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                            boxShadow: `0 4px 6px ${theme.shadowColor}`
                          }}
                        ></i>
                        <h3 className="h6 mt-2 mb-0">Email</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="text-center">
                    <a 
                      href="tel:+919490595604"
                      className="text-decoration-none d-inline-block"
                      style={{ 
                        cursor: 'pointer',
                        transform: hoveredItem === 'phone' ? 'translateY(-3px)' : 'none',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={() => setHoveredItem('phone')}
                      onMouseLeave={() => setHoveredItem(null)}
                      title="Call me"
                    >
                      <div className="contact-icon-wrapper">
                        <i 
                          className="fas fa-phone fa-2x"
                          style={{ 
                            color: theme.primaryColor,
                            padding: '15px',
                            borderRadius: '50%',
                            backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                            boxShadow: `0 4px 6px ${theme.shadowColor}`
                          }}
                        ></i>
                        <h3 className="h6 mt-2 mb-0">Phone</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-center">
                    <a
                      href="https://www.google.com/maps/place/Hyderabad,+Telangana,+India"
                      className="text-decoration-none d-inline-block"
                      style={{
                        cursor: 'pointer',
                        transform: hoveredItem === 'location' ? 'translateY(-3px)' : 'none',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={() => setHoveredItem('location')}
                      onMouseLeave={() => setHoveredItem(null)}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View location on Google Maps"
                    >
                      <div className="contact-icon-wrapper">
                        <i
                          className="fas fa-map-marker-alt fa-2x"
                          style={{
                            color: theme.primaryColor,
                            padding: '15px',
                            borderRadius: '50%',
                            backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                            boxShadow: `0 4px 6px ${theme.shadowColor}`
                          }}
                        ></i>
                        <h3 className="h6 mt-2 mb-0">Location</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* Social Links */}
              <div className="mt-4 text-center">
                <a
                  href="https://github.com/cvenkataravikiran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none d-inline-block mx-3 social-link"
                  title="GitHub"
                  style={{
                    color: theme.primaryColor,
                    display: 'inline-block',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'none'}
                >
                  <div className="contact-icon-wrapper">
                    <i className="fab fa-github fa-2x"
                      style={{
                        color: theme.primaryColor,
                        padding: '15px',
                        borderRadius: '50%',
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                        boxShadow: `0 4px 6px ${theme.shadowColor}`
                      }}
                    ></i>
                    <h3 className="h6 mt-2 mb-0">GitHub</h3>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/venkataravikiran/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none d-inline-block mx-3 social-link"
                  title="LinkedIn"
                  style={{
                    color: theme.primaryColor,
                    display: 'inline-block',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'none'}
                >
                  <div className="contact-icon-wrapper">
                    <i className="fab fa-linkedin fa-2x"
                      style={{
                        color: theme.primaryColor,
                        padding: '15px',
                        borderRadius: '50%',
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                        boxShadow: `0 4px 6px ${theme.shadowColor}`
                      }}
                    ></i>
                    <h3 className="h6 mt-2 mb-0">LinkedIn</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
