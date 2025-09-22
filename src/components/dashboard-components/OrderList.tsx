import React, { useState, useTransition, useMemo } from "react";
// import { formatCurrency, formatNumber } from "../lib/utils";
import {
  Plus,
  Filter,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import { SearchIcon } from "./Icons";
import { orderData } from "../../data";


export const OrderList = () => {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSelectAll = () => {
    if (selectedRows.size === orderData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(orderData.map((emp) => emp.id)));
    }
  };

  const handleSelectRow = (id: string) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) {
      return orderData;
    }
    
    return orderData.filter(
      (emp) =>
        emp.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    startTransition(() => {
      setSearchTerm(value);
    });
  };

  return (
    <div className="p-6 min-h-screen" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <h1 className="text-base font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>Order List</h1>
          <div className="flex items-center gap-16 justify-between p-2 rounded-lg w-full" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
            {/* Buttons container */}
            <div className="flex items-center gap-3">
              <button 
                className="p-2 rounded-lg"
                style={{ 
                  backgroundColor: 'transparent',
                  color: 'var(--color-text-secondary)'
                }}
              >
                <Plus className="w-5 h-5" />
              </button>
              <button 
                className="p-2 rounded-lg"
                style={{ 
                  backgroundColor: 'transparent',
                  color: 'var(--color-text-secondary)'
                }}
              >
                <Filter className="w-5 h-5" />
              </button>
              <button 
                className="p-2 rounded-lg"
                style={{ 
                  backgroundColor: 'transparent',
                  color: 'var(--color-text-secondary)'
                }}
              >
                <ArrowUpDown className="w-5 h-5" />
              </button>
            </div>

            {/* Search container */}
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: 'var(--color-text-muted)' }} />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-64 h-9 pl-9 pr-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ 
                  borderColor: 'var(--color-border-primary)', 
                  backgroundColor: 'var(--color-bg-secondary)', 
                  color: 'var(--color-text-primary)'
                }}
              />
              {isPending && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div 
                    className="w-4 h-4 border-2 rounded-full animate-spin"
                    style={{
                      borderColor: 'var(--color-border-secondary)',
                      borderTopColor: 'var(--color-focus-ring)'
                    }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div 
        className="rounded-lg overflow-hidden"
        style={{ backgroundColor: 'var(--color-order-table-bg)' }}
      >
        <table className="w-full">
          <thead className="">
            <tr 
              className="border-b-2"
              style={{ borderColor: 'var(--color-border-primary)' }}
            >
              <th className="py-3 pl-2 text-left">
                <input
                  type="checkbox"
                  checked={selectedRows.size === orderData.length}
                  onChange={handleSelectAll}
                  className="w-4 h-4 text-black bg-white border-gray-300 rounded focus:ring-black opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </th>
              <th className="pr-6 pl-2 py-3 text-left text-xs font-medium tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
                Project
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
                Status
              </th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: 'transparent' }}>
            {filteredData.map((employee, index) => (
              <tr
                key={employee.id}
                className="group border-b"
                style={{
                  borderColor: 'var(--color-border-muted)',
                  backgroundColor: selectedRows.has(employee.id) ? 'var(--color-bg-selected)' : 'transparent'
                }}
              > 
                <td className="py-4 pl-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.has(employee.id)}
                    onChange={() => handleSelectRow(employee.id)}
                    className={`w-4 h-4 text-black bg-white border-gray-300 rounded focus:ring-black transition-opacity ${
                      selectedRows.has(employee.id)
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </td>
                <td className="pr-6 pl-2 py-4 text-sm font-normal" style={{ color: 'var(--color-text-primary)' }}>
                  {employee.id}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <img
                      className="w-6 h-6 rounded-full mr-3"
                      src={employee.user.avatar}
                      alt={employee.user.name}
                    />
                    <span className="text-sm" style={{ color: 'var(--color-text-primary)' }}>
                      {employee.user.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--color-text-primary)' }}>
                  {employee.project}
                </td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--color-text-primary)' }}>
                  {employee.address}
                </td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  <div className="flex items-center gap-2">
                    <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 1H9.5V0.5C9.5 0.367392 9.44732 0.240215 9.35355 0.146447C9.25979 0.0526784 9.13261 0 9 0C8.86739 0 8.74021 0.0526784 8.64645 0.146447C8.55268 0.240215 8.5 0.367392 8.5 0.5V1H3.5V0.5C3.5 0.367392 3.44732 0.240215 3.35355 0.146447C3.25979 0.0526784 3.13261 0 3 0C2.86739 0 2.74021 0.0526784 2.64645 0.146447C2.55268 0.240215 2.5 0.367392 2.5 0.5V1H1C0.734784 1 0.48043 1.10536 0.292893 1.29289C0.105357 1.48043 0 1.73478 0 2V12C0 12.2652 0.105357 12.5196 0.292893 12.7071C0.48043 12.8946 0.734784 13 1 13H11C11.2652 13 11.5196 12.8946 11.7071 12.7071C11.8946 12.5196 12 12.2652 12 12V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1ZM2.5 2V2.5C2.5 2.63261 2.55268 2.75979 2.64645 2.85355C2.74021 2.94732 2.86739 3 3 3C3.13261 3 3.25979 2.94732 3.35355 2.85355C3.44732 2.75979 3.5 2.63261 3.5 2.5V2H8.5V2.5C8.5 2.63261 8.55268 2.75979 8.64645 2.85355C8.74021 2.94732 8.86739 3 9 3C9.13261 3 9.25979 2.94732 9.35355 2.85355C9.44732 2.75979 9.5 2.63261 9.5 2.5V2H11V4H1V2H2.5ZM11 12H1V5H11V12Z"
                      fill="currentColor"
                    />
                  </svg>

                  {employee.date}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className={`w-2 h-2 rounded-full ${employee.status.dot} mr-2`}
                      ></div>
                      <span 
                        className="text-sm"
                        style={{ color: employee.status.color }}
                      >
                        {employee.status.text}
                      </span>
                    </div>
                    {employee.status.text === "Rejected" && (
                      <button 
                        className="p-1 rounded"
                        style={{ 
                          backgroundColor: 'transparent',
                          color: 'var(--color-text-muted)' 
                        }}
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end mt-6">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              borderColor: 'var(--color-border-primary)',
              color: 'var(--color-text-primary)',
              backgroundColor: 'transparent'
            }}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className="px-3 py-2 rounded-lg text-sm font-medium"
              style={{
                backgroundColor: currentPage === page ? 'var(--color-primary-faded)' : 'transparent',
                color: 'var(--color-text-primary)'
              }}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
            disabled={currentPage === 5}
            className="p-2 rounded-lg border disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              borderColor: 'var(--color-border-primary)',
              color: 'var(--color-text-primary)',
              backgroundColor: 'transparent'
            }}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
