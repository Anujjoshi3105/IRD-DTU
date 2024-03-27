import React from "react";

const Table = ({ data }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-md">
      <table className="w-full text-sm text-left rtl:text-right">
        <thead className="uppercase bg-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Department
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              File
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white border-b hover:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-semibold text-gray-900">
                {item.title}
              </th>
              <td className="px-6 py-4">{item.department}</td>
              <td className="px-6 py-4">{item.date}</td>
              <td className="px-6 py-4 text-right">
                <a
                  href={item.link}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
