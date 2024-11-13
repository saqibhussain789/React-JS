import T1 from '../assests/T1.jpg'
import T2 from '../assests/T2.jpg'
import T3 from '../assests/T3.jpg'
import T4 from '../assests/T4.jpg'
export default function About() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl text-indigo-700 font-semibold">About Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Learn more about our team, our values, and our mission to empower businesses with innovative solutions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-6">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl text-indigo-700 font-semibold">Who We Are</h2>
          <p className="text-lg text-gray-600 mt-4">
            We are a passionate team of developers, designers, and strategists who are dedicated to delivering the best web and mobile solutions for your business. With years of experience in the industry, we combine technical expertise with creativity to create innovative solutions.
          </p>
        </div>

        <div className="text-center lg:text-left">
          <h2 className="text-3xl text-indigo-700 font-semibold">Our Mission</h2>
          <p className="text-lg text-gray-600 mt-4">
            Our mission is to empower businesses by providing high-quality digital products and services. We believe in the power of technology to solve real-world problems, enhance user experiences, and drive business growth. Every project we take on is an opportunity to push the boundaries of what's possible.
          </p>
        </div>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-3xl text-indigo-700 font-semibold">Meet Our Team</h2>
        <p className="text-lg text-gray-600 mt-4">
          Our team is made up of passionate professionals who are experts in their respective fields. Together, we collaborate to deliver exceptional digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 mt-12">
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow">
          <div className="flex justify-center">
            <img src={T1} alt="Team Member 1" className="w-24 h-24 rounded-full shadow-md" />
          </div>
          <h3 className="text-center text-indigo-700 text-xl font-semibold mt-4">Dilawar Khan</h3>
          <p className="text-center text-gray-600 mt-2">Lead Developer</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow">
          <div className="flex justify-center">
            <img src={T2} alt="Team Member 2" className="w-24 h-24 rounded-full shadow-md" />
          </div>
          <h3 className="text-center text-indigo-700 text-xl font-semibold mt-4">Aqib Hussain</h3>
          <p className="text-center text-gray-600 mt-2">UI/UX Designer</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow">
          <div className="flex justify-center">
            <img src={T3} alt="Team Member 3" className="w-24 h-24 rounded-full shadow-md" />
          </div>
          <h3 className="text-center text-indigo-700 text-xl font-semibold mt-4">Saqib Hussain</h3>
          <p className="text-center text-gray-600 mt-2">Project Manager</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow">
          <div className="flex justify-center">
            <img src={T4} alt="Team Member 4" className="w-24 h-24 rounded-full shadow-md" />
          </div>
          <h3 className="text-center text-indigo-700 text-xl font-semibold mt-4">Ali Kazmi</h3>
          <p className="text-center text-gray-600 mt-2">Marketing Specialist</p>
        </div>
      </div>
    </div>
  )
}
