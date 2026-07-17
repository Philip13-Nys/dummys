import { DollarSign, TrendingUp, Users, Calendar } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const monthlyData = [
  { id: 1, month: 'Jan', total: 12400, manager: 3200, receptionist: 4800, diving: 4400 },
  { id: 2, month: 'Feb', total: 15200, manager: 3800, receptionist: 5600, diving: 5800 },
  { id: 3, month: 'Mar', total: 13800, manager: 3500, receptionist: 5100, diving: 5200 },
  { id: 4, month: 'Apr', total: 18600, manager: 4600, receptionist: 6800, diving: 7200 },
  { id: 5, month: 'May', total: 16800, manager: 4200, receptionist: 6200, diving: 6400 },
  { id: 6, month: 'Jun', total: 21200, manager: 5400, receptionist: 7800, diving: 8000 },
];

const topEarners = [
  { name: 'Sarah Johnson', role: 'Manager', commission: '$5,420', transactions: 156, rate: '3.5%' },
  { name: 'Carlos Rodriguez', role: 'Diving Instructor', commission: '$4,890', transactions: 98, rate: '5.0%' },
  { name: 'Emma Williams', role: 'Receptionist', commission: '$4,320', transactions: 203, rate: '2.1%' },
  { name: 'Mike Chen', role: 'Manager', commission: '$3,980', transactions: 142, rate: '3.5%' },
  { name: 'Anna Peterson', role: 'Restaurant Manager', commission: '$3,650', transactions: 187, rate: '2.0%' },
];

const commissionStats = [
  { label: 'Total Commission', value: '$21,200', change: '+15%', color: 'from-green-500 to-emerald-600' },
  { label: 'Avg Per Employee', value: '$1,240', change: '+8%', color: 'from-blue-500 to-cyan-600' },
  { label: 'Pending Payouts', value: '$8,450', change: '-12%', color: 'from-orange-500 to-amber-600' },
  { label: 'Total Transactions', value: '1,847', change: '+23%', color: 'from-purple-500 to-pink-600' },
];

export default function CommissionReport() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Commission Report</h1>
        <p className="text-gray-600 mt-1">Generate and review commission-related records and calculations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {commissionStats.map((stat) => (
          <div key={stat.label} className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 text-white`}>
            <p className="text-sm text-white/80 mb-2">{stat.label}</p>
            <p className="text-3xl font-bold mb-1">{stat.value}</p>
            <p className="text-sm text-white/90">{stat.change} from last month</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Commission Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="total" stroke="#0891b2" strokeWidth={2} name="Total Commission" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Commission by Department</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="manager" fill="#3b82f6" name="Management" />
              <Bar dataKey="receptionist" fill="#06b6d4" name="Reception" />
              <Bar dataKey="diving" fill="#8b5cf6" name="Diving" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Top Commission Earners</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Commission
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transactions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {topEarners.map((earner, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                        {earner.name.charAt(0)}
                      </div>
                      <span className="font-medium text-gray-900">{earner.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{earner.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-semibold text-green-600">{earner.commission}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{earner.transactions}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">
                      {earner.rate}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-sm text-cyan-600 hover:text-cyan-700 font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors">
          <Calendar className="size-4" />
          Generate Monthly Report
        </button>
        <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
          Export to CSV
        </button>
      </div>
    </div>
  );
}
