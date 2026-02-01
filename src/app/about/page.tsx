import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className=" bg-white dark:bg-black pt-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-teal-500">ZEXO</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
              We are a creative digital agency passionate about transforming ideas into exceptional digital experiences
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-gray-600 dark:text-slate-400 mb-4">
                Founded with a vision to bridge creativity and technology, ZEXO has been at the forefront of digital innovation.
                We believe in crafting solutions that not only meet business objectives but also create meaningful connections with users.
              </p>
              <p className="text-gray-600 dark:text-slate-400">
                Our team of dedicated professionals brings together diverse expertise in design, development, and strategy to deliver
                projects that exceed expectations and drive real results.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-linear-to-br from-teal-500 to-cyan-400 opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-32 h-32 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-linear-to-br from-teal-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Innovation</h3>
                <p className="text-gray-600 dark:text-slate-400">
                  We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions
                </p>
              </div>

              <div className="text-center p-8">
                <div className="w-16 h-16 bg-linear-to-br from-teal-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Quality</h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Excellence is our standard. We ensure every project meets the highest quality benchmarks
                </p>
              </div>

              <div className="text-center p-8">
                <div className="w-16 h-16 bg-linear-to-br from-teal-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Collaboration</h3>
                <p className="text-gray-600 dark:text-slate-400">
                  We work closely with our clients, treating every project as a partnership for success
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="text-5xl font-bold text-teal-500 mb-2">50+</div>
              <div className="text-gray-600 dark:text-slate-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-teal-500 mb-2">20+</div>
              <div className="text-gray-600 dark:text-slate-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-teal-500 mb-2">15+</div>
              <div className="text-gray-600 dark:text-slate-400">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-teal-500 mb-2">4+</div>
              <div className="text-gray-600 dark:text-slate-400">Years Experience</div>
            </div>
          </div>




        </div>
      </main>
      <Footer />
    </>
  );
}
