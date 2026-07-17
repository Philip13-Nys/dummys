import { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Plus, Search, Filter } from 'lucide-react';

const staffMembers = [
  {
    id: 1,
    name: 'Carlos Rodriguez',
    position: 'Diving Instructor',
    department: 'Water Sports',
    email: 'carlos.r@resort.com',
    phone: '+1 (555) 123-4567',
    joinDate: '2023-05-15',
    status: 'Active',
    certifications: ['PADI Master', 'Rescue Diver'],
  },
  {
    id: 2,
    name: 'Anna Peterson',
    position: 'Head Chef',
    department: 'Restaurant',
    email: 'anna.p@resort.com',
    phone: '+1 (555) 234-5678',
    joinDate: '2022-03-10',
    status: 'Active',
    certifications: ['Culinary Arts Degree', 'Food Safety'],
  },
  {
    id: 3,
    name: 'James Wilson',
    position: 'Maintenance Supervisor',
    department: 'Facilities',
    email: 'james.w@resort.com',
    phone: '+1 (555) 345-6789',
    joinDate: '2021-08-22',
    status: 'Active',
    certifications: ['HVAC Certified', 'Electrical License'],
  },
  {
    id: 4,
    name: 'Maria Santos',
    position: 'Spa Therapist',
    department: 'Spa & Wellness',
    email: 'maria.s@resort.com',
    phone: '+1 (555) 456-7890',
    joinDate: '2023-01-18',
    status: 'Active',
    certifications: ['Massage Therapy', 'Aromatherapy'],
  },
  {
    id: 5,
    name: 'Kevin Park',
    position: 'Diving Instructor',
    department: 'Water Sports',
    email: 'kevin.p@resort.com',
    phone: '+1 (555) 567-8901',
    joinDate: '2023-06-30',
    status: 'On Leave',
    certifications: ['PADI Advanced', 'First Aid'],
  },
  {
    id: 6,
    name: 'Sophie Laurent',
    position: 'Concierge',
    department: 'Guest Services',
    email: 'sophie.l@resort.com',
    phone: '+1 (555) 678-9012',
    joinDate: '2022-11-05',
    status: 'Active',
    certifications: ['Hospitality Management', 'Tour Guide'],
  },
];

const departments = [
  { name: 'Water Sports', count: 8 },
  { name: 'Restaurant', count: 15 },
  { name: 'Facilities', count: 6 },
  { name: 'Spa & Wellness', count: 5 },
  { name: 'Guest Services', count: 10 },
];

export default function StaffProfiles() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Staff Profiles Management</h1>
          <p className="text-gray-600 mt-1">View, add, update, and maintain staff records and information</p>
        </div>
        <button className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors">
          <Plus className="size-4" />
          Add Staff Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {departments.map((dept) => (
          <div key={dept.name} className="bg-white rounded-xl p-4 border border-gray-200">
            <p className="text-sm text-gray-600">{dept.name}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{dept.count}</p>
            <p className="text-xs text-gray-500 mt-1">staff members</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search staff by name, position, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="size-4" />
              Filter
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {staffMembers.map((staff) => (
            <div key={staff.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="size-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                  {staff.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{staff.name}</h3>
                      <p className="text-sm text-gray-600">{staff.position}</p>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        staff.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}
                    >
                      {staff.status}
                    </span>
                  </div>

                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="size-3.5" />
                      <span>{staff.department}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="size-3.5" />
                      <span>{staff.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="size-3.5" />
                      <span>{staff.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="size-3.5" />
                      <span>Joined {new Date(staff.joinDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-700 mb-1">Certifications:</p>
                    <div className="flex flex-wrap gap-1">
                      {staff.certifications.map((cert) => (
                        <span key={cert} className="px-2 py-0.5 text-xs bg-cyan-100 text-cyan-700 rounded">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
