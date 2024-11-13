import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import HeroPic from '../assests/heroo.png';

const Hero = () => {
  return (
    <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 bg-gray-900 text-gray-100">
      {/* Introduction Section */}
      <div className="lg:w-1/3 ssm:w-fit">
        <p className="text-4xl mb-3 text-teal-400">Hello, I'm</p>
        <h1 className="text-5xl font-bold text-purple-300">Saqib Hussain</h1>
        <hr className="my-4 border-teal-500" />
        <p className="mt-6 text-gray-400 leading-relaxed">
          Lorem ipsum is placeholder text commonly used in graphic design, 
          publishing, and web development to fill empty spaces in a layout 
          that do not yet have content.
        </p>
      </div>
      
      {/* Profile Image */}
      <div className="w-1/3 flex items-center justify-center ssm:w-fit">
        <img src={HeroPic} alt="Hero" className="rounded-full border-8 border-teal-500 shadow-lg" width={250} height={250} />
      </div>
      
      {/* About Me Section */}
      <div className="w-1/3 ssm:w-fit text-center lg:text-left">
        <p className="text-4xl mb-4 text-teal-400">About Me</p>
        <p className="text-gray-400 mb-6">
          Building quality in programming and design through reliable, professional services.
        </p>
        <button className="bg-teal-500 text-gray-900 px-8 py-3 my-3 rounded-full transition-transform hover:bg-teal-400 hover:scale-105 focus:outline-none">
          Show More
        </button>
        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start mt-6 space-x-4">
          <BsFacebook size={30} className="text-gray-400 hover:text-teal-500 transition-colors" />
          <BsInstagram size={30} className="text-gray-400 hover:text-teal-500 transition-colors" />
          <BsTwitter size={30} className="text-gray-400 hover:text-teal-500 transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
