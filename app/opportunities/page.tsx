'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

interface Opportunity {
  id: string;
  title: string;
  type: 'PhD' | 'Research Fellow' | 'Internship' | 'Postdoc' | 'Teaching Assistant' | 'JRF' | 'SRF' | 'Predoc' | 'Professorship';
  professor: string;
  institution: string;
  department: string;
  location: string;
  field: string;
  subField: string;
  deadline: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: string;
  duration: string;
  fundingSource: string;
  applicationUrl: string;
  tags: string[];
  posted: string;
}

const mockOpportunities: Opportunity[] = [
  {
    id: '1',
    title: 'PhD Position in Machine Learning',
    type: 'PhD',
    professor: 'Dr. Sarah Chen',
    institution: 'Stanford University',
    department: 'Computer Science',
    location: 'Stanford, CA',
    field: 'Computer Science',
    subField: 'Deep Learning',
    deadline: '2024-03-15',
    description: 'Seeking a motivated PhD student to work on cutting-edge machine learning research focusing on neural networks and deep learning applications.',
    requirements: ['Master\'s degree in CS or related field', 'Strong programming skills in Python', 'Experience with TensorFlow/PyTorch', 'Published research papers preferred'],
    benefits: ['Full tuition coverage', 'Health insurance', 'Research travel funds', 'Conference attendance support'],
    salary: '$55,000/year',
    duration: '4-5 years',
    fundingSource: 'NSF',
    applicationUrl: 'https://stanford.edu/apply/phd-ml',
    tags: ['Machine Learning', 'Deep Learning', 'Neural Networks'],
    posted: '2024-01-15'
  },
  {
    id: '2',
    title: 'Senior Research Fellow - Cancer Biology',
    type: 'SRF',
    professor: 'Dr. Michael Johnson',
    institution: 'Harvard Medical School',
    department: 'Molecular Biology',
    location: 'Boston, MA',
    field: 'Biology',
    subField: 'Deep Learning',
    deadline: '2024-02-28',
    description: 'Senior postdoctoral research fellowship investigating novel therapeutic targets in pancreatic cancer using CRISPR-Cas9 technology.',
    requirements: ['PhD in Biology/Biochemistry with 2+ years postdoc experience', 'Experience with CRISPR techniques', 'Cell culture expertise', 'Strong publication record'],
    benefits: ['Competitive salary', 'Independent research budget', 'Lab management opportunity', 'Career development support'],
    salary: '$75,000/year',
    duration: '3 years',
    fundingSource: 'NIH',
    applicationUrl: 'https://hms.harvard.edu/apply/srf-cancer',
    tags: ['Cancer Biology', 'CRISPR-Cas9', 'Pancreatic Cancer'],
    posted: '2024-01-10'
  },
  {
    id: '3',
    title: 'Junior Research Fellow - Quantum Computing',
    type: 'JRF',
    professor: 'Dr. Elena Rodriguez',
    institution: 'MIT',
    department: 'Physics',
    location: 'Cambridge, MA',
    field: 'Physics',
    subField: 'Deep Learning',
    deadline: '2024-02-15',
    description: 'Junior research fellowship exploring quantum algorithms and their applications in optimization problems.',
    requirements: ['PhD in Physics/Math/CS', 'Linear algebra knowledge', 'Programming experience', 'Fresh PhD graduates encouraged'],
    benefits: ['Research mentorship', 'Training programs', 'Conference funding', 'Publication support'],
    salary: '$62,000/year',
    duration: '2 years',
    fundingSource: 'DOE',
    applicationUrl: 'https://mit.edu/apply/jrf-quantum',
    tags: ['Quantum Computing', 'Quantum Algorithms', 'Optimization Problems'],
    posted: '2024-01-08'
  },
  {
    id: '4',
    title: 'Predoctoral Research Position - Environmental Chemistry',
    type: 'Predoc',
    professor: 'Dr. James Wilson',
    institution: 'UC Berkeley',
    department: 'Chemistry',
    location: 'Berkeley, CA',
    field: 'Chemistry',
    subField: 'Deep Learning',
    deadline: '2024-03-01',
    description: 'Pre-doctoral research position focused on developing sustainable catalysts for environmental remediation and green chemistry applications.',
    requirements: ['BS/MS in Chemistry', 'Analytical chemistry skills', 'Lab experience', 'Intent to pursue PhD'],
    benefits: ['PhD preparation', 'Research training', 'Stipend support', 'Graduate school guidance'],
    salary: '$45,000/year',
    duration: '1-2 years',
    fundingSource: 'Department',
    applicationUrl: 'https://berkeley.edu/apply/predoc-chem',
    tags: ['Environmental Chemistry', 'Sustainable Catalysts', 'Green Chemistry'],
    posted: '2024-01-12'
  },
  {
    id: '5',
    title: 'Assistant Professor - Behavioral Psychology',
    type: 'Professorship',
    professor: 'Department Search Committee',
    institution: 'Yale University',
    department: 'Psychology',
    location: 'New Haven, CT',
    field: 'Psychology',
    subField: 'Deep Learning',
    deadline: '2024-03-10',
    description: 'Tenure-track Assistant Professor position investigating cognitive behavioral patterns in social decision-making using neuroimaging techniques.',
    requirements: ['PhD in Psychology/Neuroscience', 'Postdoc experience', 'Strong research record', 'Teaching experience'],
    benefits: ['Tenure track', 'Startup funds', 'Research lab space', 'Graduate student support'],
    salary: '$85,000-95,000/year',
    duration: 'Permanent',
    fundingSource: 'University',
    applicationUrl: 'https://yale.edu/apply/asst-prof-psych',
    tags: ['Behavioral Psychology', 'Cognitive Behavioral Patterns', 'Neuroimaging Techniques'],
    posted: '2024-01-05'
  },
  {
    id: '6',
    title: 'Summer Research Internship - AI Ethics',
    type: 'Internship',
    professor: 'Dr. Amanda Davis',
    institution: 'Carnegie Mellon University',
    department: 'Computer Science',
    location: 'Pittsburgh, PA',
    field: 'Computer Science',
    subField: 'Deep Learning',
    deadline: '2024-02-20',
    description: 'Undergraduate research internship exploring ethical implications of artificial intelligence in healthcare applications.',
    requirements: ['Undergraduate in CS/Philosophy/Ethics', 'Programming experience', 'GPA 3.5+', 'Interest in AI ethics'],
    benefits: ['Research experience', 'Mentorship', 'Networking opportunities', 'Certificate completion'],
    salary: '$4,500/month',
    duration: '3 months',
    fundingSource: 'NSF',
    applicationUrl: 'https://cmu.edu/apply/intern-ai-ethics',
    tags: ['AI Ethics', 'Artificial Intelligence', 'Healthcare Applications'],
    posted: '2024-01-18'
  },
  {
    id: '7',
    title: 'JRF Position - Materials Science',
    type: 'JRF',
    professor: 'Dr. Raj Patel',
    institution: 'Georgia Tech',
    department: 'Materials Science',
    location: 'Atlanta, GA',
    field: 'Engineering',
    subField: 'Deep Learning',
    deadline: '2024-03-05',
    description: 'Junior Research Fellowship in advanced materials for renewable energy applications, focusing on perovskite solar cells.',
    requirements: ['PhD in Materials Science/Chemistry', 'Nanomaterials experience', 'Characterization techniques', 'Publication record'],
    benefits: ['Research independence', 'Equipment access', 'Industry collaboration', 'Patent opportunities'],
    salary: '$58,000/year',
    duration: '2-3 years',
    fundingSource: 'DOE',
    applicationUrl: 'https://gatech.edu/apply/jrf-materials',
    tags: ['Materials Science', 'Renewable Energy', 'Perovskite Solar Cells'],
    posted: '2024-01-20'
  },
  {
    id: '8',
    title: 'Associate Professor - Theoretical Physics',
    type: 'Professorship',
    professor: 'Physics Search Committee',
    institution: 'Princeton University',
    department: 'Physics',
    location: 'Princeton, NJ',
    field: 'Physics',
    subField: 'Deep Learning',   
    deadline: '2024-02-25',
    description: 'Tenured Associate Professor position in theoretical physics with focus on quantum field theory and string theory applications.',
    requirements: ['PhD in Physics', '8+ years research experience', 'Excellent publication record', 'Teaching excellence'],
    benefits: ['Tenured position', 'Sabbatical eligibility', 'Research funds', 'Graduate student supervision'],
    salary: '$120,000-140,000/year',
    duration: 'Permanent',
    fundingSource: 'University',
    applicationUrl: 'https://princeton.edu/apply/assoc-prof-physics',
    tags: ['Theoretical Physics', 'Quantum Field Theory', 'String Theory'],
    posted: '2024-01-22'
  }
];

export default function OpportunitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<Opportunity['type'][]>([]);
  const [selectedField, setSelectedField] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedFunding, setSelectedFunding] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredOpportunities, setFilteredOpportunities] = useState(mockOpportunities);

  const handleSearch = () => {
    let filtered = mockOpportunities;

    if (searchTerm) {
      filtered = filtered.filter(opp =>
        opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.professor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedTypes.length > 0) {
      filtered = filtered.filter(opp => selectedTypes.includes(opp.type));
    }

    if (selectedField) {
      filtered = filtered.filter(opp => opp.field === selectedField);
    }

    if (selectedLocation) {
      filtered = filtered.filter(opp => opp.location.includes(selectedLocation));
    }

    if (selectedFunding) {
      filtered = filtered.filter(opp => opp.fundingSource.includes(selectedFunding));
    }

    setFilteredOpportunities(filtered);
  };

  const handleTypeFilter = (type: Opportunity['type']) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
    handleSearch();
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTypes([]);
    setSelectedField('');
    setSelectedLocation('');
    setSelectedFunding('');
    setFilteredOpportunities(mockOpportunities);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Academic Opportunity</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover PhD positions, research fellowships, internships, and teaching opportunities from top institutions worldwide
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <i className="ri-search-line absolute left-4 top-4 text-gray-400 text-xl"></i>
                  <input
                    type="text"
                    placeholder="Search by keywords, professor, institution, or field..."
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <button
                  onClick={handleSearch}
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg whitespace-nowrap cursor-pointer"
                >
                  Search Opportunities
                </button>
              </div>

              {/* Quick Filters */}
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 cursor-pointer"
                >
                  <i className="ri-filter-line"></i>
                  <span>Filters</span>
                  <i className={`ri-arrow-${showFilters ? 'up' : 'down'}-s-line`}></i>
                </button>

                {[ 'PhD', 'JRF', 'SRF', 'Predoc', 'Professorship', 'Internship' ].map((type) => (
                  <button
                    key={type}
                    onClick={() => handleTypeFilter(type)}
                    className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                      selectedTypes.includes(type)
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Advanced Filters */}
              {showFilters && (
                <div className="mt-6 p-6 bg-white rounded-xl border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Field</label>
                      <div className="relative">
                        <select
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none pr-8"
                          value={selectedField}
                          onChange={(e) => setSelectedField(e.target.value)}
                        >
                          <option value="">All Fields</option>
                          <option value="Computer Science">Computer Science</option>
                          <option value="Biology">Biology</option>
                          <option value="Engineering">Engineering</option>
                          <option value="Physics">Physics</option>
                          <option value="Mathematics">Mathematics</option>
                          <option value="Chemistry">Chemistry</option>
                        </select>
                        <i className="ri-arrow-down-s-line absolute right-2 top-3 text-gray-400 pointer-events-none"></i>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <div className="relative">
                        <select
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none pr-8"
                          value={selectedLocation}
                          onChange={(e) => setSelectedLocation(e.target.value)}
                        >
                          <option value="">All Locations</option>
                          <option value="CA">California</option>
                          <option value="MA">Massachusetts</option>
                          <option value="CT">Connecticut</option>
                          <option value="NY">New York</option>
                        </select>
                        <i className="ri-arrow-down-s-line absolute right-2 top-3 text-gray-400 pointer-events-none"></i>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Funding Source</label>
                      <div className="relative">
                        <select
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none pr-8"
                          value={selectedFunding}
                          onChange={(e) => setSelectedFunding(e.target.value)}
                        >
                          <option value="">All Funding</option>
                          <option value="NSF">NSF</option>
                          <option value="NIH">NIH</option>
                          <option value="DOE">DOE</option>
                          <option value="Department">Department</option>
                        </select>
                        <i className="ri-arrow-down-s-line absolute right-2 top-3 text-gray-400 pointer-events-none"></i>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <button
                      onClick={clearFilters}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
                    >
                      Clear All Filters
                    </button>
                    <button
                      onClick={handleSearch}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap cursor-pointer"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Available Opportunities</h2>
              <p className="text-gray-600 mt-1">
                {filteredOpportunities.length} opportunities found
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <div className="relative">
                  <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm appearance-none pr-8">
                    <option>Most Recent</option>
                    <option>Deadline</option>
                    <option>Salary</option>
                    <option>Institution</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-2 top-2 text-gray-400 pointer-events-none"></i>
                </div>
              </div>

              <div className="flex border border-gray-300 rounded-lg">
                <button className="p-2 bg-blue-600 text-white rounded-l-lg cursor-pointer">
                  <i className="ri-list-unordered w-4 h-4 flex items-center justify-center"></i>
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-r-lg cursor-pointer">
                  <i className="ri-layout-grid-line w-4 h-4 flex items-center justify-center"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Opportunity Cards */}
          <div className="space-y-8">
            {filteredOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">{opportunity.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            opportunity.type === 'PhD'
                              ? 'bg-purple-100 text-purple-800'
                              : opportunity.type === 'Research Fellow'
                                ? 'bg-green-100 text-green-800'
                                : opportunity.type === 'Postdoc'
                                  ? 'bg-blue-100 text-blue-800'
                                  : opportunity.type === 'Internship'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-orange-100 text-orange-800'
                          }`}>
                            {opportunity.type}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-3">
                          <div className="flex items-center space-x-2">
                            <i className="ri-user-line text-lg"></i>
                            <span className="font-medium">{opportunity.professor}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <i className="ri-building-line text-lg"></i>
                            <span>{opportunity.institution}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <i className="ri-map-pin-line text-lg"></i>
                            <span>{opportunity.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <i className="ri-bookmark-line text-lg"></i>
                            <span>{opportunity.field} • {opportunity.subField}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right space-y-2">
                        {opportunity.salary && (
                          <div className="text-lg font-bold text-green-600">{opportunity.salary}</div>
                        )}
                        <div className="text-sm text-gray-600">
                          <div>Duration: {opportunity.duration}</div>
                          <div>Deadline: {new Date(opportunity.deadline).toLocaleDateString()}</div>
                          <div className="text-blue-600 font-medium">{opportunity.fundingSource}</div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">{opportunity.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {opportunity.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Requirements & Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <i className="ri-checkbox-circle-line text-lg mr-2 text-red-500"></i>
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {opportunity.requirements.slice(0, 3).map((req, index) => (
                            <li key={index} className="text-sm text-gray-700 flex items-start">
                              <i className="ri-arrow-right-s-line text-gray-400 mt-0.5 mr-1"></i>
                              {req}
                            </li>
                          ))}
                          {opportunity.requirements.length > 3 && (
                            <li className="text-sm text-gray-500">
                              +{opportunity.requirements.length - 3} more requirements
                            </li>
                          )}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <i className="ri-gift-line text-lg mr-2 text-green-500"></i>
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {opportunity.benefits.map((benefit, index) => (
                            <li key={index} className="text-sm text-gray-700 flex items-start">
                              <i className="ri-check-line text-green-500 mt-0.5 mr-1"></i>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors cursor-pointer">
                          <i className="ri-heart-line text-lg"></i>
                          <span>Save</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                          <i className="ri-share-line text-lg"></i>
                          <span>Share</span>
                        </button>
                        <span className="text-sm text-gray-500">
                          Posted {new Date(opportunity.posted).toLocaleDateString()}
                        </span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Link
                          href={`/opportunities/${opportunity.id}`}
                          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold whitespace-nowrap cursor-pointer"
                        >
                          View Details
                        </Link>
                        <a
                          href={opportunity.applicationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap cursor-pointer flex items-center space-x-2"
                        >
                          <span>Apply Now</span>
                          <i className="ri-external-link-line"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredOpportunities.length === 0 && (
            <div className="text-center py-16 bg-white rounded-xl">
              <i className="ri-search-line text-6xl text-gray-300 mb-6"></i>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">No opportunities found</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Try adjusting your search criteria or clearing filters to see more results.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
