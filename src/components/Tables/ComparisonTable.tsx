'use client';

import { ComparisonTable } from '@/types';

interface ComparisonTableComponentProps {
  table: ComparisonTable;
}

export default function ComparisonTableComponent({ table }: ComparisonTableComponentProps) {
  const getPlatformColor = (platform: string) => {
    if (platform.toLowerCase().includes('gcp') || platform.toLowerCase().includes('google')) {
      return 'text-blue-600 bg-blue-50';
    }
    if (platform.toLowerCase().includes('azure') || platform.toLowerCase().includes('microsoft')) {
      return 'text-blue-700 bg-blue-100';
    }
    if (platform.toLowerCase().includes('aws') || platform.toLowerCase().includes('amazon')) {
      return 'text-orange-600 bg-orange-50';
    }
    return 'text-gray-600 bg-gray-50';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">{table.title}</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {table.headers.map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium rounded-l ${getPlatformColor(row.platform)}`}>
                  {row.platform}
                </td>
                {row.data.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {typeof cell === 'number' ? cell.toLocaleString() : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
