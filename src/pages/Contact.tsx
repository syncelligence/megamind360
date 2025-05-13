import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import Button from '../components/common/Button';

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
            <p className="text-lg text-gray-300">
              Have questions or feedback? We're here to help.
              Reach out to our team and we'll get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Get In Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="p-3 bg-brand-primary/10 text-brand-primary rounded-lg mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Our Location</h3>
                    <p className="text-gray-600">
                      123 Learning Street<br />
                      Education City, 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-brand-secondary/10 text-brand-secondary rounded-lg mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Email Us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@megamind360.com" className="hover:text-brand-primary transition-colors">
                        info@megamind360.com
                      </a><br />
                      <a href="mailto:support@megamind360.com" className="hover:text-brand-primary transition-colors">
                        support@megamind360.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-brand-accent/10 text-brand-accent rounded-lg mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Call Us</h3>
                    <p className="text-gray-600">
                      <a href="tel:+11234567890" className="hover:text-brand-primary transition-colors">
                        +1 (123) 456-7890
                      </a><br />
                      <span className="text-sm text-gray-500">Mon-Fri, 9am-6pm EST</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg mr-4">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Live Chat</h3>
                    <p className="text-gray-600">
                      Chat with our support team in real-time.
                      <br />
                      <button className="text-brand-primary hover:underline mt-1">
                        Start a conversation
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold mb-3 text-gray-900">Office Hours</h3>
                <table className="w-full text-gray-600">
                  <tbody>
                    <tr>
                      <td className="py-1">Monday - Friday</td>
                      <td className="py-1">9:00 AM - 6:00 PM EST</td>
                    </tr>
                    <tr>
                      <td className="py-1">Saturday</td>
                      <td className="py-1">10:00 AM - 4:00 PM EST</td>
                    </tr>
                    <tr>
                      <td className="py-1">Sunday</td>
                      <td className="py-1">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h2>
              
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  >
                    <option value="">Select an inquiry type</option>
                    <option value="general">General Question</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      className="mt-1 mr-2"
                    />
                    <span className="text-sm text-gray-600">
                      I agree to the <a href="/privacy" className="text-brand-primary hover:underline">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                    </span>
                  </label>
                </div>
                
                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="h-96 w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215151035404!2d-73.98783248469959!3d40.75797164274445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1658575851751!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Megamind360 Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How do I sign up for a course?",
                answer: "To sign up for a course, create an account, browse our course catalog, and click \"Enroll\" on the course you want to take. You'll be directed to the payment page to complete your enrollment.",
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and Apple Pay. For certain countries, we also offer local payment methods.",
              },
              {
                question: "Can I get a refund if I'm not satisfied?",
                answer: "Yes, we offer a 30-day money-back guarantee for most courses. If you're not satisfied with your purchase, you can request a refund within 30 days of enrollment.",
              },
              {
                question: "How long do I have access to course content?",
                answer: "Once enrolled, you have lifetime access to the course content, including any future updates the instructor makes to the course.",
              },
              {
                question: "Do you offer certificates of completion?",
                answer: "Yes, upon completing a course, you'll receive a certificate of completion that you can download, print, and share on your social profiles.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;