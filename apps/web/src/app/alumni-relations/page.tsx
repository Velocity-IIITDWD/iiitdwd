import Image from 'next/image';
import Link from 'next/link';

export default function AlumniPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Alumni Network
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Connecting alumni, fostering bonds, and shaping the future together
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-gray-600">Alumni Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-gray-600">Fortune 500 Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Startups Founded</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Alumni Association */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              About Our Alumni Association
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Alumni Association creates a dynamic space for alumni, maintains a vital presence 
              for the institute in the lives of alumni, and provides endless opportunities for both 
              alumni and the institute to find and build their places in a global community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To foster strong bonds between alumni, students, and the institute, keeping alumni 
                informed and engaged through diverse programs and services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3">Membership</h3>
              <p className="text-gray-600">
                Anyone who has completed one academic year as a student is eligible for life membership. 
                Join to reconnect, give back, and serve as a springboard for involvement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3">Global Network</h3>
              <p className="text-gray-600">
                With chapters across the world, our alumni network spans continents, industries, 
                and disciplines, creating opportunities for collaboration and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Alumni Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Networking Events',
                description: 'Annual alumni meets, chapter events, and professional networking opportunities',
              },
              {
                title: 'Mentorship Programs',
                description: 'Guide current students and share your expertise with the next generation',
              },
              {
                title: 'Career Services',
                description: 'Access to job postings, career guidance, and professional development resources',
              },
              {
                title: 'Campus Access',
                description: 'Guest house accommodations, library access, and gymkhana facilities at discounted rates',
              },
              {
                title: 'Alumni Directory',
                description: 'Connect with fellow alumni through our online directory and social platforms',
              },
              {
                title: 'Exclusive Updates',
                description: 'Monthly newsletters, event updates, and institute news delivered to your inbox',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distinguished Alumni Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Distinguished Alumni
            </h2>
            <p className="text-lg text-gray-600">
              Celebrating excellence and outstanding contributions to society
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'John Doe',
                batch: 'B.Tech 2005',
                achievement: 'CEO, Fortune 500 Company',
              },
              {
                name: 'Jane Smith',
                batch: 'M.Tech 2008',
                achievement: 'Leading AI Researcher',
              },
              {
                name: 'Alex Johnson',
                batch: 'B.Tech 2010',
                achievement: 'Successful Entrepreneur',
              },
              {
                name: 'Sarah Williams',
                batch: 'PhD 2012',
                achievement: 'Academic Excellence Award',
              },
            ].map((alumni, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="bg-primary h-32"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {alumni.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{alumni.batch}</p>
                  <p className="text-gray-700">{alumni.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Reunions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Upcoming Events & Reunions
          </h2>
          <div className="space-y-6">
            {[
              {
                title: 'Annual Alumni Meet 2025',
                date: 'March 15, 2025',
                location: 'Main Campus',
                description: 'Join us for networking, cultural programs, and reconnecting with batchmates',
              },
              {
                title: 'Batch of 2000 - Silver Jubilee Reunion',
                date: 'April 20, 2025',
                location: 'Main Campus',
                description: 'Celebrating 25 years of excellence and achievements',
              },
              {
                title: 'Alumni Mentorship Program Launch',
                date: 'May 10, 2025',
                location: 'Virtual',
                description: 'Connect with current students and guide them in their career journey',
              },
            ].map((event, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{event.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>📅 {event.date}</span>
                      <span>📍 {event.location}</span>
                    </div>
                  </div>
                  <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              There are many ways to stay connected and contribute to your alma mater
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Become a Mentor',
                description: 'Guide students and young alumni in their career paths',
              },
              {
                title: 'Join a Chapter',
                description: 'Connect with alumni in your city or region',
              },
              {
                title: 'Support Students',
                description: 'Contribute to scholarships and infrastructure development',
              },
              {
                title: 'Share Your Story',
                description: 'Inspire others by sharing your journey and achievements',
              },
            ].map((action, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all"
              >
                <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
                <p className="text-gray-100 mb-4">{action.description}</p>
                <Link
                  href="#"
                  className="text-white underline hover:text-gray-200"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Get in Touch
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Alumni Relations Office
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <strong>Email:</strong> alumni@institute.edu
                  </p>
                  <p>
                    <strong>Phone:</strong> +91-XXX-XXX-XXXX
                  </p>
                  <p>
                    <strong>Address:</strong> Alumni Relations Office, Main Campus
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold mb-3 text-gray-900">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      LinkedIn
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Facebook
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Twitter
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Update Your Information
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Alumni Directory
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Request Transcripts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Alumni ID Card
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Donate to Institute
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}