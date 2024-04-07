import React from "react";

const Contact = () => {
  return (
    <div className="bg-slate-50 lg:w-3/5 mx-auto p-10 rounded-xl">
      <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold">CONTACT US</h2>
        <p className="mt-4 font-bold text-gray-500">
          Updated on Saturday, 22 October 2022 - 3:08pm
        </p>
      </div>
      <div className="mt-16 lg:mt-10">
        <div className="rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1rQQ1fphljUW4dQvPCGxo6EU_vO4&hl=en&ehbc=2E312F"
            width="100%"
            height="480"
            allowFullScreen=""
            loading="lazy"></iframe>
          <div>
            <div className="max-w-full mx-auto rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <h3 className="text-lg font-bold text-gray-900">Location</h3>
                <p className="text-gray-600">
                  Office of International Affairs, Mechanical Engineering Block,
                  Delhi Technological University, Shahbad Daulatpur, Rohini, New
                  Delhi (110042)
                </p>
              </div>
              <div className="border-t border-gray-300 px-6 py-4">
                <h3 className="text-lg font-bold text-gray-900">Hours</h3>
                <div className="text-gray-600">
                  <p>Monday - Friday: 9am - 5pm</p>
                  <p>Saturday: 10am - 4pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              <div className="border-t border-gray-300 px-6 py-4">
                <h3 className="text-lg font-bold text-gray-900">Contact</h3>
                <div className="text-gray-600">
                  <p>Email: info@example.com</p>
                  <p>Phone: +1 23494 34993</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
