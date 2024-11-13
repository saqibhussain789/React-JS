import T1 from '../assests/T1.jpg'
import T2 from '../assests/T2.jpg'
import T3 from '../assests/T3.jpg'
import T4 from '../assests/T4.jpg'

export default function Services() {
  return (
    <div className='bg-gray-100 py-20'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl text-indigo-700 font-semibold'>Our Services</h1>
        <p className='text-lg text-gray-600 mt-4'>
          We offer a range of services to help your business grow.
        </p>
      </div>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6'>
        
        <div className='bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow'>
          <div className='flex justify-center'>
            <img src={T1} alt="Web Development" className='w-24 h-24 rounded-full shadow-md' />
          </div>
          <h3 className='text-center text-indigo-700 text-xl font-semibold mt-4'>Web Development</h3>
          <p className='text-center text-gray-600 mt-2'>
            Custom websites tailored to your business needs.
          </p>
        </div>

        <div className='bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow'>
          <div className='flex justify-center'>
            <img src={T2} alt="Mobile App Development" className='w-24 h-24 rounded-full shadow-md' />
          </div>
          <h3 className='text-center text-indigo-700 text-xl font-semibold mt-4'>Mobile App Development</h3>
          <p className='text-center text-gray-600 mt-2'>
            Android and iOS apps that enhance user experiences.
          </p>
        </div>

        <div className='bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow'>
          <div className='flex justify-center'>
            <img src={T3} alt="UX/UI Design" className='w-24 h-24 rounded-full shadow-md' />
          </div>
          <h3 className='text-center text-indigo-700 text-xl font-semibold mt-4'>UX/UI Design</h3>
          <p className='text-center text-gray-600 mt-2'>
            Creating intuitive designs that engage your users.
          </p>
        </div>

        <div className='bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow'>
          <div className='flex justify-center'>
            <img src={T4} alt="E-commerce Solutions" className='w-24 h-24 rounded-full shadow-md' />
          </div>
          <h3 className='text-center text-indigo-700 text-xl font-semibold mt-4'>E-commerce Solutions</h3>
          <p className='text-center text-gray-600 mt-2'>
            Build a scalable online storefront for your business.
          </p>
        </div>

      </div>
    </div>
  )
}
