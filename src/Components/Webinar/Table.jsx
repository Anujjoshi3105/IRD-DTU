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

      {items.map(({ head, body, link }, index) => (
        <div className="py-2 mx-4 border-b-2 leading-5" key={index}>
          <div className="group">
            <summary
              className="flex justify-between items-center font-medium cursor-pointer"
              onClick={() => toggleItem(index)}
              key={index}>
              {" "}
              {/* Provide key prop to summary element */}
              <span className="hover:text-gray-400 text-gray-700">{head}</span>
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
                {body}
                <iframe src={link} className="h-auto"></iframe>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
