export default function Contact() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl text-indigo-700 font-semibold">Contact Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Have questions or want to get in touch? We’re here to help! Reach out to us using the form below.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto px-6">
        <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="text-lg text-gray-600">Full Name</label>
            <input
              id="name"
              type="text"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Your Name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="text-lg text-gray-600">Email Address</label>
            <input
              id="email"
              type="email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Your Email"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="text-lg text-gray-600">Message</label>
            <textarea
              id="message"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-indigo-700 text-white font-semibold rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl text-indigo-700 font-semibold">Our Location</h2>
        <p className="text-lg text-gray-600 mt-4">
          We are located at the heart of the city, but you can also reach us virtually! Below is our office address.
        </p>
        
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7290332979754!2d-74.00601518459304!3d40.71277677933169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a189ad627b5%3A0x283a149f6f1f4285!2sNew%20York%20Public%20Library!5e0!3m2!1sen!2sus!4v1630305700422!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
