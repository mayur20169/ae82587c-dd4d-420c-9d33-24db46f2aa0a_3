
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 flex-1 min-h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20university%20campus%20with%20students%20and%20professors%20walking%2C%20academic%20research%20environment%2C%20clean%20architectural%20lines%2C%20natural%20lighting%2C%20professional%20academic%20atmosphere%2C%20contemporary%20educational%20buildings%2C%20peaceful%20scholarly%20setting&width=1200&height=600&seq=hero-bg&orientation=landscape')`
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className="text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Connect Academic 
                <span className="text-blue-600"> Talent</span> with 
                <span className="text-blue-600"> Opportunities</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The premier platform where professors post PhD positions, research fellowships, and internships, 
                while students discover their perfect academic career match.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/login/student"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold text-center whitespace-nowrap cursor-pointer"
                >
                  Find Opportunities
                </Link>
                <Link 
                  href="/login/professor"
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold text-center whitespace-nowrap cursor-pointer"
                >
                  Post Positions
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src="https://readdy.ai/api/search-image?query=Diverse%20group%20of%20PhD%20students%20and%20professors%20collaborating%20in%20modern%20research%20laboratory%2C%20academic%20discussion%2C%20scientific%20equipment%20in%20background%2C%20bright%20natural%20lighting%2C%20professional%20academic%20setting%2C%20research%20collaboration%20scene&width=600&height=500&seq=hero-image&orientation=portrait"
                alt="Academic collaboration"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to connect academic talent with the right opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* For Professors */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-user-line text-2xl text-white"></i>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Professors</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Create Your Profile</h4>
                    <p className="text-gray-600">Set up your academic profile and institution details</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Post Positions</h4>
                    <p className="text-gray-600">Share PhD, research fellow, and internship opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Review Applications</h4>
                    <p className="text-gray-600">Connect with qualified candidates and build your team</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Students */}
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-graduation-cap-line text-2xl text-white"></i>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Students</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Build Your Profile</h4>
                    <p className="text-gray-600">Showcase your academic achievements and research interests</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Search & Filter</h4>
                    <p className="text-gray-600">Find positions that match your field and career goals</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Apply & Connect</h4>
                    <p className="text-gray-600">Submit applications and start your academic journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Active Professors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1,200+</div>
              <div className="text-gray-600">Open Positions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-gray-600">Student Applications</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Academic Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professors and students who have found their perfect match
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/jobs"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold whitespace-nowrap cursor-pointer"
            >
              Browse All Positions
            </Link>
            <Link 
              href="/login/professor"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold whitespace-nowrap cursor-pointer"
            >
              Start Hiring Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
