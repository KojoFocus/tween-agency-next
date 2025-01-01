import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle form submission, like sending it to an API or email
    console.log('Form submitted', formData);
  };

  return (
    <section className="section-padding" id="section_6">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 col-12 mx-auto">
            <h2 className="mb-4 text-center">Let&apos;s chat</h2>

            <form className="custom-form" role="form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 my-2">
                  <label className="mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-lg-4 col-md-6 col-12 my-2">
                  <label className="mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    pattern="[^ @]*@[^ @]*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-lg-4 col-md-6 col-12 my-2">
                  <label className="mb-2" htmlFor="subject">
                    How did you know about us?
                  </label>
                  <select
                    className="form-select form-control"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Choose a subject</option>
                    <option value="web+search">Website Searches</option>
                    <option value="social+media">Social Media</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <div className="col-12 my-2">
                  <label className="mb-2" htmlFor="message">
                    Tell us about the project
                  </label>
                  <textarea
                    className="form-control"
                    rows={5}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <button type="submit" className="form-control mt-4" id="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
