import React from "react";

const Profile = ({ imageSrc, name, title, telephone, email, link }) => {
  return (
    <a href={link} target="_blank">
      <figure className="flex rounded-lg border-2 hover:shadow-lg items-center mb-4">
        <img className="w-28 md:w-48 md:h-auto" src={imageSrc} alt="" />
        <div className="text-center mx-auto">
          <blockquote className="md:text-lg font-bold text-slate-800 pb-1">
            {name}
          </blockquote>
          <figcaption className="text-sm font-semibold md:font-medium text-slate-700 pb-4 md:pb-6">
            {title}
          </figcaption>
          <figcaption className="text-sm md:font-medium">
            <div className="text-slate-700 font-semibold md:font-bold">
              Telephone:
              <span className="text-slate-500 md:font-medium pl-2">
                {telephone}
              </span>
            </div>
            <div className="text-slate-700 font-semibold md:font-bold">
              Email:
              <span className="text-slate-500 font-medium pl-2">{email}</span>
            </div>
          </figcaption>
        </div>
      </figure>
    </a>
  );
};

export default Profile;
