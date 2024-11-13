import Project1Img from '../assests/Project1.jpg';
import Project2Img from '../assests/Project2.jpg';
import Project3Img from '../assests/Project3.jpg';
import Project4Img from '../assests/Project4.jpg';

export default function Portfolio() {
  return (
    <div className="bg-gray-900 py-20 max-w-full rounded-lg shadow-lg">
      <div className="text-center mb-12">
        <h1 className="text-4xl text-teal-400 font-semibold tracking-wide">Portfolio</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="p-6">
            <img src={Project1Img} alt="Hospital Management System" className="rounded-md w-full h-64 object-cover mb-4" />
            <div className="uppercase tracking-wide text-sm text-teal-400 font-semibold mb-2">
              Hospital Management System
            </div>
            <a href="#" className="block mt-2 text-xl leading-tight font-medium text-teal-200 hover:underline">
              Manage hospital operations and patient data efficiently.
            </a>
            <p className="mt-2 text-gray-400">
              A complete hospital management system designed to streamline medical and administrative workflows for healthcare institutions.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="p-6">
            <img src={Project2Img} alt="Inventory Management System" className="rounded-md w-full h-64 object-cover mb-4" />
            <div className="uppercase tracking-wide text-sm text-teal-400 font-semibold mb-2">
              Inventory Management System
            </div>
            <a href="#" className="block mt-2 text-xl leading-tight font-medium text-teal-200 hover:underline">
              Efficient tracking of inventory for businesses.
            </a>
            <p className="mt-2 text-gray-400">
              An inventory system for businesses to track, manage, and streamline product supply, orders, and warehouse operations.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="p-6">
            <img src={Project3Img} alt="E-commerce Platform" className="rounded-md w-full h-64 object-cover mb-4" />
            <div className="uppercase tracking-wide text-sm text-teal-400 font-semibold mb-2">
              E-commerce Platform
            </div>
            <a href="#" className="block mt-2 text-xl leading-tight font-medium text-teal-200 hover:underline">
              Building an online store and marketplace.
            </a>
            <p className="mt-2 text-gray-400">
              A fully functional e-commerce platform to manage products, users, and orders, providing seamless shopping experiences.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="p-6">
            <img src={Project4Img} alt="Chat Application" className="rounded-md w-full h-64 object-cover mb-4" />
            <div className="uppercase tracking-wide text-sm text-teal-400 font-semibold mb-2">
              Chat Application
            </div>
            <a href="#" className="block mt-2 text-xl leading-tight font-medium text-teal-200 hover:underline">
              Real-time communication for users.
            </a>
            <p className="mt-2 text-gray-400">
              A messaging platform for users to engage in real-time conversations with text, images, and file sharing capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
