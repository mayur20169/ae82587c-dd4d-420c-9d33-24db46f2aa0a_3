
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

interface Job {
  id: string;
  title: string;
  type: 'PhD' | 'Research Fellow' | 'Internship';
  professor: string;
  institution: string;
  department: string;
  location: string;
  field: string;
  deadline: string;
  description: string;
  requirements: string[];
  salary?: string;
  duration: string;
}

const mockJobs: Job[] = [
  {
    id: '1',
    title: 'PhD Position in Machine Learning',
    type: 'PhD',
    professor: 'Dr. Sarah Chen',
    institution: 'Stanford University',
    department: 'Computer Science',
    location: 'Stanford, CA',
    field: 'Computer Science',
    deadline: '2024-03-15',
    description: 'Seeking a motivated PhD student to work on cutting-edge machine learning research focusing on neural networks and deep learning applications.',
    requirements: ['Master\'s degree in CS or related field', 'Strong programming skills in Python', 'Experience with TensorFlow/PyTorch', 'Published research papers preferred'],
    salary: '$55,000/year',
    duration: '4-5 years'
  },
  {
    id: '2',
    title: 'Research Fellowship in Cancer Biology',
    type: 'Research Fellow',
    professor: 'Dr. Michael Johnson',
    institution: 'Harvard Medical School',
    department: 'Molecular Biology',
    location: 'Boston, MA',
    field: 'Biology',
    deadline: '2024-02-28',
    description: 'Postdoctoral research fellowship investigating novel therapeutic targets in pancreatic cancer using CRISPR-Cas9 technology.',
    requirements: ['PhD in Biology/Biochemistry', 'Experience with CRISPR techniques', 'Cell culture expertise', 'Strong publication record'],
    salary: '$65,000/year',
    duration: '2-3 years'
  },
  {
    id: '3',
    title: 'Summer Research Internship - Quantum Computing',
    type: 'Internship',
    professor: 'Dr. Elena Rodriguez',
    institution: 'MIT',
    department: 'Physics',
    location: 'Cambridge, MA',
    field: 'Physics',
    deadline: '2024-02-15',
    description: 'Undergraduate research internship exploring quantum algorithms and their applications in optimization problems.',
    requirements: ['Undergraduate in Physics/Math/CS', 'Linear algebra knowledge', 'Programming experience', 'GPA 3.5+'],
    salary: '$4,000/month',
    duration: '3 months'
  },
  {
    id: '4',
    title: 'PhD Student - Environmental Chemistry',
    type: 'PhD',
    professor: 'Dr. James Wilson',
    institution: 'UC Berkeley',
    department: 'Chemistry',
    location: 'Berkeley, CA',
    field: 'Chemistry',
    deadline: '2024-03-01',
    description: 'Research focused on developing sustainable catalysts for environmental remediation and green chemistry applications.',
    requirements: ['BS/MS in Chemistry', 'Analytical chemistry skills', 'Lab experience', 'Research publications preferred'],
    salary: '$52,000/year',
    duration: '5-6 years'
  },
  {
    id: '5',
    title: 'Postdoc - Behavioral Psychology',
    type: 'Research Fellow',
    professor: 'Dr. Lisa Park',
    institution: 'Yale University',
    department: 'Psychology',
    location: 'New Haven, CT',
    field: 'Psychology',
    deadline: '2024-03-10',
    description: 'Investigating cognitive behavioral patterns in social decision-making using neuroimaging techniques.',
    requirements: ['PhD in Psychology/Neuroscience', 'fMRI experience', 'Statistical analysis skills', 'Strong publication record'],
    salary: '$58,000/year',
    duration: '2 years'
  }
];

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedField, setSelectedField] = useState<string>('');
  const [filteredJobs, setFilteredJobs] = useState(mockJobs);

  const handleSearch = () => {
    let filtered = mockJobs;
    
    if (searchTerm) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.professor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedType) {
      filtered = filtered.filter(job => job.type === selectedType);
    }
    
    if (selectedField) {
      filtered = filtered.filter(job => job.field === selectedField);
    }
    
    setFilteredJobs(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 bg-gray-50">
        {/* Search Header */}
        <div className="bg-white border-b border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Browse Academic Positions</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <i className="ri-search-line absolute left-3 top-3 text-gray-400 text-lg"></i>
                  <input
                    type="text"
                    placeholder="Search positions, professors, institutions..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <div className="relative">
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none pr-8"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    <option value="">All Types</option>
                    <option value="PhD">PhD</option>
                    <option value="Research Fellow">Research Fellow</option>
                    <option value="Internship">Internship</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-2 top-3 text-gray-400 pointer-events-none"></i>
                </div>
              </div>
              
              <div>
                <div className="relative">
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none pr-8"
                    value={selectedField}
                    onChange={(e) => setSelectedField(e.target.value)}
                  >
                    <option value="">All Fields</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Biology">Biology</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Physics">Physics</option>
                    <option value="Psychology">Psychology</option>
                    <option value="Mathematics">Mathematics</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-2 top-3 text-gray-400 pointer-events-none"></i>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleSearch}
              className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap cursor-pointer"
            >
              Search Positions
            </button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              Found {filteredJobs.length} positions
            </p>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <div className="relative">
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm appearance-none pr-8">
                  <option>Most Recent</option>
                  <option>Deadline</option>
                  <option>Salary</option>
                </select>
                <i className="ri-arrow-down-s-line absolute right-2 top-2 text-gray-400 pointer-events-none"></i>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        job.type === 'PhD' ? 'bg-blue-100 text-blue-800' :
                        job.type === 'Research Fellow' ? 'bg-green-100 text-green-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {job.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <i className="ri-user-line"></i>
                        <span>{job.professor}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <i className="ri-building-line"></i>
                        <span>{job.institution}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <i className="ri-map-pin-line"></i>
                        <span>{job.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                          {req}
                        </span>
                      ))}
                      {job.requirements.length > 3 && (
                        <span className="px-2 py-1 text-gray-500 text-sm">
                          +{job.requirements.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="ml-6 text-right">
                    <div className="text-sm text-gray-600 space-y-1">
                      {job.salary && (
                        <div className="font-semibold text-green-600">{job.salary}</div>
                      )}
                      <div>Duration: {job.duration}</div>
                      <div>Deadline: {new Date(job.deadline).toLocaleDateString()}</div>
                    </div>
                    
                    <Link
                      href={`/jobs/${job.id}`}
                      className="mt-4 block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-semibold whitespace-nowrap cursor-pointer"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <i className="ri-search-line text-4xl text-gray-400 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No positions found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or browse all available positions.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
