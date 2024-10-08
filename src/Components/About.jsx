import React from 'react';

const About = () => {
  return (
    <>
      {/* About Us Section */}
      <div className=" bg-cover bg-center bg-no-repeat h-auto py-20" style={{ backgroundImage: "url('/public/assets/img/others/about.jpg')" }}>
        <div className="inset-0 bg-gray-900 bg-opacity-70"></div> {/* Dark Overlay */}
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-base tracking-wide uppercase text-slate-100 font-1">About Us</h2>
          <p className="mt-2 text-4xl leading-10 font-bold tracking-tight font-1">
            Welcome to BookArt
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-100   font-3">
            Your one-stop destination for books of all genres. We bring stories, knowledge, and inspiration to readers worldwide.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <img
                className="rounded-lg shadow-lg object-cover h-80 w-80 transition duration-500 hover:scale-105"
                src="/public/assets/img/others/about.jpg"
                alt="Bookstore"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Our Story</h3>
              <p className="mt-2 text-base text-gray-600">
                Founded by passionate book lovers, our bookstore offers a curated collection of both bestsellers and hidden gems. We aim to make books accessible to everyone, whether you're looking for classic literature, the latest releases, or something entirely unique.
              </p>

              <h3 className="mt-6 text-lg leading-6 font-medium text-gray-900">Our Mission</h3>
              <p className="mt-2 text-base text-gray-600">
                Our mission is to inspire readers by delivering high-quality books and fostering a community that loves reading. We strive to promote literacy and the joy of reading with our wide selection and excellent customer service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Footer Column 1 */}
            <div>
              <h3 className="text-lg font-semibold">About BookArt</h3>
              <p className="mt-4 text-sm text-gray-400">
                We are committed to offering the best selection of books to our customers, ensuring a seamless shopping experience.
              </p>
            </div>
            
            {/* Footer Column 2 */}
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="/home" className="hover:underline">Home</a></li>
                <li><a href="/about" className="hover:underline">About Us</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>

            {/* Footer Column 3 */}
            <div>
              <h3 className="text-lg font-semibold">Contact Us</h3>
              {/* <ul className="mt-4 text-sm text-gray-400">
                <li>123 Bookstore Lane</li>
                <li>City, Country 12345</li>
                <li>Email: support@bookart.com</li>
                <li>Phone: +123 456 7890</li>
              </ul> */}
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} BookArt. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default About;
