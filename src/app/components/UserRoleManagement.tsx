import { useState } from 'react';
import { Shield, Edit, Trash2, Plus, Search } from 'lucide-react';

const users = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@resort.com',
    role: 'Manager',
    status: 'Active',
    permissions: ['View Reports', 'Manage Bookings', 'Staff Management'],
    lastActive: '2 hours ago',
  },
  {
    id: 2,
    name: 'Mike Chen',
    email: 'mike.c@resort.com',
    role: 'Manager',
    status: 'Active',
    permissions: ['View Reports', 'Manage Bookings', 'Financial Access'],
    lastActive: '30 mins ago',
  },
  {
    id: 3,
    name: 'Emma Williams',
    email: 'emma.w@resort.com',
    role: 'Receptionist',
    status: 'Active',
    permissions: ['Check-in/out', 'Booking Management', 'Payment Processing'],
    lastActive: '5 mins ago',
  },
  {
    id: 4,
    name: 'David Brown',
    email: 'david.b@resort.com',
    role: 'Receptionist',
    status: 'Active',
    permissions: ['Check-in/out', 'Booking Management'],
    lastActive: '1 hour ago',
  },
  {
    id: 5,
    name: 'Lisa Martinez',
    email: 'lisa.m@resort.com',
    role: 'Staff',
    status: 'Inactive',
    permissions: ['View Schedule', 'Update Availability'],
    lastActive: '2 days ago',
  },
];

const roles = [
  { name: 'Administrator', count: 2, color: 'bg-red-100 text-red-700' },
  { name: 'Manager', count: 8, color: 'bg-blue-100 text-blue-700' },
  { name: 'Receptionist', count: 12, color: 'bg-green-100 text-green-700' },
  { name: 'Staff', count: 25, color: 'bg-purple-100 text-purple-700' },
];

export default function UserRoleManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">User Role and Access Management</h1>
          <p className="text-gray-600 mt-1">Create, update, and manage user accounts and permissions</p>
        </div>
        <button className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors">
          <Plus className="size-4" />
          Add New User
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {roles.map((role) => (
          <div key={role.name} className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{role.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{role.count}</p>
              </div>
              <div className={`size-10 rounded-full ${role.color} flex items-center justify-center`}>
                <Shield className="size-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search users by name, email, or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Permissions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Active
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-semibold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {user.permissions.slice(0, 2).map((perm) => (
                        <span key={perm} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded">
                          {perm}
                        </span>
                      ))}
                      {user.permissions.length > 2 && (
                        <span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded">
                          +{user.permissions.length - 2}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        user.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.lastActive}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit className="size-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="size-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
