import React, { useState } from "react";

const Table = ({ heading, items }) => {
  const [openIndexes, setOpenIndexes] = useState(() =>
    new Array(items.length).fill(false)
  );

  const toggleItem = (index) => {
    setOpenIndexes((prevOpenIndexes) => {
      const newOpenIndexes = [...prevOpenIndexes];
      newOpenIndexes[index] = !newOpenIndexes[index];
      return newOpenIndexes;
    });
  };

  return (
    <div className="pb-10 mx-auto">
      <h1 className="lg:text-2xl text-xl font-bold pb-2 uppercase">
        {heading}
      </h1>

      {items.map((item, index) => (
        <div className="py-2 mx-4 border-b-2 leading-5" key={index}>
          <div className="group">
            <summary
              className="flex justify-between items-center font-medium cursor-pointer"
              onClick={() => toggleItem(index)}>
              <span className="hover:text-gray-500 text-gray-700">
                {item.head}
              </span>
              <span className="transition hover:text-gray-500">
                {openIndexes[index] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 12H4"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12M6 12h12"
                    />
                  </svg>
                )}
              </span>
            </summary>
            {openIndexes[index] && (
              <div className="mt-2 text-gray-700 ">
                {item.body}
                <a
                  href={item.link}
                  target="_blank"
                  className="hover:text-red-500 text-blue-500 text-sm hover:font-semibold">
                  <div className="flex mt-5 rounde-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                    {item.link}
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
