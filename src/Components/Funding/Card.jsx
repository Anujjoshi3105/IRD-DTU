import React from "react";

const FeatureCard = ({ title, description, link, image }) => {
  return (
    <div className="p-2 lg:max-w-72 overflow-auto">
      <div className="flex rounded-lg h-full bg-gray-100 p-4 flex-col hover:shadow-lg">
        <div className="flex items-center mb-3">
          <div className="mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <img className="w-8 h-8" src={image} alt={title} />
          </div>
          <h2 className="text-lg font-bold leading-5">{title}</h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <p className="text-base">{description}</p>
          <a
            href={link}
            className="mt-3 hover:text-blue-600 inline-flex items-center font-semibold">
            View More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  const features = [
    {
      title: "Department of Science and Technology (DST)",
      description:
        "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
      link: "https://dst.gov.in/",
      image: "https://www.ediindia.org/wp-content/uploads/2020/11/DST-GoI.png",
    },
    {
      title: "Feature 2",
      description:
        "Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias.lorem ",
      link: "#",
    },
    {
      title: "Feature 3",
      description:
        "Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias.",
      link: "#",
    },
    {
      title: "Feature 2",
      description:
        "Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias.lorem ",
      link: "#",
    },
    {
      title: "Feature 3",
      description:
        "Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias.",
      link: "#",
    },
    {
      title: "Feature 2",
      description:
        "Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias.lorem ",
      link: "#",
    },
    {
      title: "Feature 3",
      description:
        "Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias.",
      link: "#",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center mt-10">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

export default Card;
