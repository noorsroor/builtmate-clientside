import React from 'react';
import { FaHome } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { BsChatFill } from "react-icons/bs";

function AboutPage() {
  return (
    <div className="font-sans">
      {/* Hero Section - Modern and Bold */}
      <div className="relative w-full h-[500px]" id="home">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent ">
          {/* We'll use a placeholder since external images aren't allowed */}
          <img
            src="https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Construction Project"
            className="object-cover object-center w-full h-full mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 flex lg:ml-30 items-center">
          <div className="container mx-auto px-6">
            <div className="md:w-3/5 text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="text-[#c8a876]">Built</span>mate
              </h1>
              <p className="text-2xl mb-8 max-w-lg">
                Your Trusted Platform for Construction, Renovation & Inspiration in Jordan
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contactUs"
                  className="px-8 py-3 bg-[#c8a876] text-white font-medium rounded-md hover:bg-[#b99765] transition duration-300 shadow-lg"
                >
                  Contact Us
                </a>
                <a
                  href="#services"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-gray-900 transition duration-300"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      {/* <div className="bg-[#c8a876] rounded-full py-10 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatCard number="500+" text="Verified Professionals" />
            <StatCard number="1,200+" text="Completed Projects" />
            <StatCard number="85+" text="Partner Stores" />
            <StatCard number="7,000+" text="Happy Clients" />
          </div>
        </div>
      </div> */}

      {/* About Us Section - Modern Layout */}
      <section className="py-20 px-20" id="aboutus">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
              <div className="bg-[#c8a876] w-full h-full absolute -top-5 -left-5 rounded-lg opacity-20"></div>
              <img
                src="https://i.pinimg.com/736x/1d/89/23/1d8923047edf67493152e909bd4baed1.jpg"
                alt="Team at work"
                className="relative h-120 rounded-lg shadow-xl w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">About Builtmate</h2>
              <div className="w-20 h-1 bg-[#c8a876] mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Builtmate is your all-in-one solution for construction and renovation in Jordan. Whether you're building
                a home, upgrading a space, or seeking fresh design inspiration — we've got you covered.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our platform connects you with skilled professionals, showcases user and expert projects, and highlights trusted local
                stores for materials and tools.
              </p>
              <p className="text-lg text-gray-600">
                We aim to simplify the building process, bridge the gap between clients and professionals, and empower
                everyone with ideas and resources to bring their vision to life.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#c8a876] text-white">
                    <span className="text-2xl">✓</span>
                  </div>
                  <span className="ml-3 text-gray-700 font-medium">Quality Assurance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#c8a876] text-white">
                    <span className="text-2xl">✓</span>
                  </div>
                  <span className="ml-3 text-gray-700 font-medium">Local Expertise</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#c8a876] text-white">
                    <span className="text-2xl">✓</span>
                  </div>
                  <span className="ml-3 text-gray-700 font-medium">Customer First</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Card Grid with Hover Effects */}
      <section className="py-16 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">What We Offer</h2>
            <div className="w-24 h-1 bg-[#c8a876] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for all your construction and renovation needs in Jordan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ServiceCard
              title="Find Skilled Professionals"
              icon={<GrUserWorker className='text-white'/>}
              text="Connect with trusted engineers, carpenters, electricians, and other experts for your next construction or home improvement project."
            />

            <ServiceCard
              title="Browse Construction & Decoration Ideas"
              icon={<FaHome className='text-white'/>}
              text="Get inspired by real-world projects and design ideas shared by professionals and homeowners across Jordan."
            />

            <ServiceCard
              title="Expert Consultation"
              icon={<BsChatFill className='text-white'/>}
              text="Book appointments with industry experts for personalized advice on your construction or renovation projects."
            />

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">How Builtmate Works</h2>
            <div className="w-24 h-1 bg-[#c8a876] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your journey to a successful construction or renovation project is just 4 simple steps away
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start">
            <StepCard 
              number="1" 
              title="Create Your Profile" 
              description="Sign up and tell us about your project needs and preferences" 
            />
            <div className="hidden md:block w-24 h-1 bg-gray-300 mt-12"></div>
            <StepCard 
              number="2" 
              title="Browse Professionals" 
              description="Find and connect with verified experts in your area" 
            />
            <div className="hidden md:block w-24 h-1 bg-gray-300 mt-12"></div>
            <StepCard 
              number="3" 
              title="Get Quotes" 
              description="Review proposals and select the best match for your project" 
            />
            <div className="hidden md:block w-24 h-1 bg-gray-300 mt-12"></div>
            <StepCard 
              number="4" 
              title="Complete Your Project" 
              description="Work with your chosen professional and transform your space" 
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Modern Grid */}
      <section className="py-20 lg:px-20 bg-[#292929] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-2">Why Choose Builtmate</h2>
            <div className="w-24 h-1 bg-[#c8a876] mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto text-gray-300">
              We're committed to transforming the construction industry in Jordan through technology and trust
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Verified Professionals"
              description="Every professional on our platform is thoroughly vetted and reviewed"
            />
            <FeatureCard
              title="User-Friendly Experience"
              description="Intuitive platform designed for both homeowners and construction pros"
            />
            <FeatureCard
              title="Jordan-Focused Platform"
              description="Built specifically for the Jordanian market and construction industry"
            />
            <FeatureCard
              title="Real Projects & Ideas"
              description="Browse authentic local projects for inspiration and realistic expectations"
            />
            <FeatureCard
              title="Transparent Pricing"
              description="Clear information on costs and no hidden fees for any service"
            />
            <FeatureCard
              title="Secure Communication"
              description="Safe and direct communication channels with service providers"
            />
            <FeatureCard
              title="Post-Project Support"
              description="Continuing assistance even after your project is completed"
            />
            <FeatureCard
              title="Local Material Sources"
              description="Connect with trusted suppliers for all your construction needs"
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-[#c8a876] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't take our word for it - hear from homeowners and professionals who have used Builtmate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Mahmoud"
              role="Homeowner in Amman"
              quote="Builtmate made renovating my apartment so much easier. I found a reliable contractor within days and the project was completed on budget!"
            />
            <TestimonialCard
              name="Ahmad Al-Nasser"
              role="Interior Designer"
              quote="As a professional, Builtmate has connected me with clients who truly value quality work. The platform is intuitive and has helped grow my business."
            />
            <TestimonialCard
              name="Layla Haddad"
              role="First-time Home Builder"
              quote="Building our first home was daunting, but Builtmate guided us through the process and connected us with amazing professionals. Couldn't be happier!"
            />
          </div>
        </div>
      </section>

    </div>
  );
}

// Reusable components
const ServiceCard = ({ title, icon, text }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
    <div className="p-8">
      <div className="w-16 h-16 bg-[#c8a876] bg-opacity-20 rounded-full flex items-center justify-center text-3xl mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  </div>
);

const FeatureCard = ({ title, description }) => (
  <div className="p-6 bg-[#474747] rounded-lg transform transition duration-300 hover:-translate-y-1 hover:bg-[#5F5F5F]">
    <h3 className="text-xl font-semibold text-[#c8a876] mb-3">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const StatCard = ({ number, text }) => (
  <div className="p-4">
    <div className="text-4xl font-bold mb-2">{number}</div>
    <div className="opacity-80 text-sm uppercase tracking-wider">{text}</div>
  </div>
);

const StepCard = ({ number, title, description }) => (
  <div className="text-center mb-8 md:mb-0 w-full md:w-auto">
    <div className="w-16 h-16 bg-[#c8a876] rounded-full text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
      {number}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 max-w-xs mx-auto">{description}</p>
  </div>
);

const TestimonialCard = ({ name, role, quote }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
    <div className="text-[#c8a876] text-4xl mb-4">"</div>
    <p className="text-gray-700 mb-6 italic">{quote}</p>
    <div className="flex items-center">
      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 mr-4">
        👤
      </div>
      <div>
        <h4 className="font-bold text-gray-900">{name}</h4>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>
  </div>
);

export default AboutPage;