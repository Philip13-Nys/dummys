import { DollarSign, TrendingUp, CreditCard, PieChart } from 'lucide-react';
import { AreaChart, Area, PieChart as RePieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const financialStats = [
  { label: 'Total Revenue', value: '$847,500', change: '+18.5%', trend: 'up' },
  { label: 'Total Expenses', value: '$312,400', change: '+5.2%', trend: 'up' },
  { label: 'Net Profit', value: '$535,100', change: '+28.4%', trend: 'up' },
  { label: 'Profit Margin', value: '63.1%', change: '+6.8%', trend: 'up' },
];

const revenueData = [
  { id: 1, month: 'Jan', revenue: 125000, expenses: 48000 },
  { id: 2, month: 'Feb', revenue: 132000, expenses: 51000 },
  { id: 3, month: 'Mar', revenue: 128000, expenses: 49500 },
  { id: 4, month: 'Apr', revenue: 145000, expenses: 53000 },
  { id: 5, month: 'May', revenue: 138000, expenses: 52000 },
  { id: 6, month: 'Jun', revenue: 179500, expenses: 58900 },
];

const revenueByCategory = [
  { id: 1, name: 'Accommodations', value: 425000, percentage: 50.2 },
  { id: 2, name: 'Diving Services', value: 210000, percentage: 24.8 },
  { id: 3, name: 'Restaurant & Bar', value: 145000, percentage: 17.1 },
  { id: 4, name: 'Spa Services', value: 42500, percentage: 5.0 },
  { id: 5, name: 'Equipment Rental', value: 25000, percentage: 2.9 },
];

const COLORS = ['#0891b2', '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'];

const paymentMethods = [
  { method: 'Credit Card', amount: '$512,400', percentage: 60.4, transactions: 1234 },
  { method: 'Cash', amount: '$168,750', percentage: 19.9, transactions: 456 },
  { method: 'Debit Card', amount: '$127,125', percentage: 15.0, transactions: 678 },
  { method: 'Bank Transfer', amount: '$39,225', percentage: 4.7, transactions: 89 },
];

export default function SalesReports() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Sales and Financial Reports</h1>
        <p className="text-gray-600 mt-1">Monitor revenue, sales performance, and overall financial transactions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {financialStats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-6 border border-gray-200">
            <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <div className="flex items-center gap-1">
                <TrendingUp className="size-4 text-green-600" />
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue vs Expenses</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="revenue" stackId="1" stroke="#0891b2" fill="#06b6d4" name="Revenue" />
              <Area type="monotone" dataKey="expenses" stackId="2" stroke="#ef4444" fill="#fca5a5" name="Expenses" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RePieChart>
              <Pie
                data={revenueByCategory}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percentage }) => `${name}: ${percentage}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {revenueByCategory.map((entry) => (
                  <Cell key={`cell-${entry.id}`} fill={COLORS[(entry.id - 1) % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </RePieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Revenue Breakdown by Category</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {revenueByCategory.map((category) => (
              <div key={category.id}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="size-3 rounded-full" style={{ backgroundColor: COLORS[(category.id - 1) % COLORS.length] }} />
                    <span className="font-medium text-gray-900">{category.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">{category.percentage}%</span>
                    <span className="font-semibold text-gray-900">${category.value.toLocaleString()}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all"
                    style={{ width: `${category.percentage}%`, backgroundColor: COLORS[(category.id - 1) % COLORS.length] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Payment Method Distribution</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Percentage
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transactions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paymentMethods.map((method) => (
                <tr key={method.method} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <CreditCard className="size-5 text-gray-400" />
                      <span className="font-medium text-gray-900">{method.method}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-semibold text-gray-900">{method.amount}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-cyan-500 h-2 rounded-full"
                          style={{ width: `${method.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">{method.percentage}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{method.transactions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors">
          <DollarSign className="size-4" />
          Generate Financial Report
        </button>
        <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
          Export Data
        </button>
      </div>
    </div>
  );
}
