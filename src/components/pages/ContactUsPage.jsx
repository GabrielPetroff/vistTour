import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Load EmailJS
    const script = document.createElement('script');
    script.src =
      'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init('7LclN2W11CnkK9OB6');
        console.log('EmailJS loaded successfully');
      }
    };
    script.onerror = () => {
      console.error('Failed to load EmailJS script');
      setError('Failed to load email service. Please refresh the page.');
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script on unmount
      document.head.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Check if EmailJS is loaded
      if (!window.emailjs) {
        throw new Error('EmailJS not loaded');
      }

      const result = await window.emailjs.send(
        'service_8gq28rm',
        'template_96yawyo',
        {
          to_email: 'italiainlimo@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      console.log('Email sent successfully:', result);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);

      // More specific error messages
      if (!window.emailjs) {
        setError(
          'Email service not loaded. Please refresh the page and try again.'
        );
      } else if (err.status === 412) {
        setError(
          'Email service authentication error. The administrator needs to reconnect the email service in EmailJS dashboard.'
        );
      } else if (
        err.text &&
        err.text.includes('insufficient authentication scopes')
      ) {
        setError(
          'Email service needs to be reconnected with proper permissions. Please contact the administrator.'
        );
      } else if (err.text) {
        setError(`Failed to send: ${err.text}`);
      } else {
        setError(
          'Failed to send message. Please check your internet connection and try again.'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24 lg:pt-[170px]">
      {/* Background Section */}
      <div className="w-full bg-[#FFCC98] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-[#FFCC98]">
            {/* Left Column - Contact Info */}
            <div className="flex flex-col ">
              <h1 className="text-5xl font-black text-gray-800 mb-8 text-center lg:text-left">
                Get In Touch!
              </h1>

              <p className="text-gray-800 text-lg font-semibold mb-12 text-center lg:text-left max-w-sm">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>

              {/* Contact Cards Stack */}
              <div className="flex flex-col gap-10">
                {/* Location Card */}
                <div className="flex flex-row justify-center items-center bg-[#FFCC98] rounded-2xl p-4 gap-3 shadow-none">
                  <div className="flex-shrink-0">
                    <MapPin
                      className="w-6 h-6 text-orange-500"
                      strokeWidth={2.5}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-semibold text-lg">
                      Piazza Napoleone, Lucca, Tuscany
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="flex flex-row justify-center items-center  border-2 border-orange-500 rounded-2xl p-4 gap-3">
                  <div className="flex-shrink-0">
                    <Phone
                      className="w-6 h-6 text-orange-500"
                      strokeWidth={2.5}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-semibold text-lg">
                      +39 346 368 5708
                    </p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex flex-row justify-center items-center  rounded-2xl p-4 gap-3 shadow-none">
                  <div className="flex-shrink-0">
                    <Mail
                      className="w-6 h-6 text-orange-500"
                      strokeWidth={2.5}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-semibold text-lg">
                      italiainlimo@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-[#FFE5B5] bg-opacity-30 backdrop-blur-md rounded-3xl p-8 lg:p-10 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                  book the bike
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
                    {error}
                  </div>
                )}

                <div className="space-y-8">
                  {/* Name Field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-800 font-semibold text-lg">
                      Name and Surname
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name and surname"
                      disabled={loading}
                      className="w-full px-6 py-3 bg-white rounded-lg text-gray-800 placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition disabled:opacity-50"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-800 font-semibold text-lg">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      disabled={loading}
                      className="w-full px-6 py-3 bg-white rounded-lg text-gray-800 placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition disabled:opacity-50"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-800 font-semibold text-lg">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your Message"
                      rows="6"
                      disabled={loading}
                      className="w-full px-6 py-3 bg-white rounded-lg text-gray-800 placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none disabled:opacity-50"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-2">
                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white font-semibold text-xl px-8 py-3 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                      {!loading && <Send className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11593.20946152144!2d24.60884703494873!3d43.412508948242554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40abf4abc9a90377%3A0xab42e57b845dff4f!2z0KLRg9GA0L7Qv9C10YDQsNGC0L7RgNGB0LrQsCDRhNC40YDQvNCwICLQktCY0KHQoiI!5e0!3m2!1sbg!2sbg!4v1768060638654!5m2!1sbg!2sbg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
