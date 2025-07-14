
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Pacifico, serif' }}>
              AcademicJobs
            </h3>
            <p className="text-gray-400">
              Connecting academic talent with opportunities worldwide
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Students</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/jobs" className="hover:text-white transition-colors cursor-pointer">Browse Jobs</a></li>
              <li><a href="/login/student" className="hover:text-white transition-colors cursor-pointer">Student Login</a></li>
              <li><a href="/resources" className="hover:text-white transition-colors cursor-pointer">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Professors</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/login/professor" className="hover:text-white transition-colors cursor-pointer">Post Jobs</a></li>
              <li><a href="/pricing" className="hover:text-white transition-colors cursor-pointer">Pricing</a></li>
              <li><a href="/support" className="hover:text-white transition-colors cursor-pointer">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors cursor-pointer">About</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2024 AcademicJobs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
