import React from "react";

const FeatureCard = ({ title, description, link, image }) => {
  return (
    <div className="p-2 lg:max-w-72 overflow-auto">
      <div className="flex rounded-lg h-full bg-gray-100 p-4 flex-col hover:shadow-lg">
        <div className="flex items-center mb-3">
          <div className="mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <img
              className="w-8 h-8"
              src="https://www.ediindia.org/wp-content/uploads/2020/11/DST-GoI.png"
              alt={title}
            />
          </div>
          <h2 className="font-bold leading-5">{title}</h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <p className="text-sm">{description}</p>
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
        "The Department of Science and Technology (DST) is a department within the Government of India, responsible for formulating and implementing science and technology policies and programs in the country. DST plays a crucial role in fostering research and innovation across various scientific disciplines.",
      link: "https://dst.gov.in/",
      image: "https://www.ediindia.org/wp-content/uploads/2020/11/DST-GoI.png",
    },
    {
      title: "Indian Council of Social Science Research (ICSSR)",
      description:
        "The Indian Council of Social Science Research (ICSSR) is an autonomous body under the Ministry of Education, Government of India. It promotes research in social sciences, including economics, sociology, political science, and anthropology, among others.",
      link: "http://www.icssr.org/",
    },
    {
      title: "Department of Biotechnology (DBT)",
      description:
        "The Department of Biotechnology (DBT) is a government department under the Ministry of Science and Technology, responsible for the development and application of biotechnology for various sectors, including healthcare, agriculture, and environment.",
      link: "http://dbtindia.gov.in/",
    },
    {
      title: "Department of Atomic Energy (DAE)",
      description:
        "The Department of Atomic Energy (DAE) is a department directly under the Prime Minister of India, responsible for the development and application of atomic energy for peaceful purposes such as power generation, medicine, and industry.",
      link: "https://dae.gov.in/",
    },
    {
      title: "University Grants Commission (UGC)",
      description:
        "The University Grants Commission (UGC) is a statutory body of the Government of India, responsible for the coordination, determination, and maintenance of standards of university education in India. UGC also provides funding to universities and colleges.",
      link: "https://www.ugc.ac.in/",
    },
    {
      title: "Defence Research & Development Organisation (DRDO)",
      description:
        "The Defence Research and Development Organisation (DRDO) is an agency of the Government of India, responsible for the development and research of military technologies and equipment.",
      link: "https://www.drdo.gov.in/",
    },
    {
      title:
        "Ministry of Environment, Forest and Climate Change of India (MoEFCC)",
      description:
        "The Ministry of Environment, Forest and Climate Change (MoEFCC) is a government ministry responsible for the protection, conservation, and sustainable development of the environment, forests, and wildlife in India.",
      link: "http://moef.gov.in/",
    },
    {
      title: "Indian Space Research Organisation (ISRO)",
      description:
        "The Indian Space Research Organisation (ISRO) is the space agency of the Government of India, responsible for space research and exploration. ISRO conducts satellite launches, planetary exploration, and satellite communication projects.",
      link: "https://www.isro.gov.in/",
    },
    {
      title: "Ministry of New and Renewable Energy (MNRE)",
      description:
        "The Ministry of New and Renewable Energy (MNRE) is a government ministry responsible for the development and deployment of renewable energy sources such as solar, wind, biomass, and hydro power in India.",
      link: "https://mnre.gov.in/",
    },
    {
      title:
        "Ministry of Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homoeopathy (AYUSH)",
      description:
        "The Ministry of Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homoeopathy (AYUSH) is a government ministry dedicated to promoting traditional Indian systems of medicine, including Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homoeopathy.",
      link: "https://www.ayush.gov.in/",
    },
    {
      title: "Ministry of Earth Sciences (MoES)",
      description:
        "The Ministry of Earth Sciences (MoES) is a government ministry responsible for the research and development of earth sciences, including meteorology, oceanography, seismology, and climate change studies.",
      link: "https://www.moes.gov.in/",
    },
    {
      title: "Ministry of Jal Shakti (MoJS)",
      description:
        "The Ministry of Jal Shakti (MoJS) is a government ministry responsible for the management, development, and conservation of water resources in India.",
      link: "https://jalshakti-dowr.gov.in/",
    },
    {
      title: "Ministry of Power (MoP)",
      description:
        "The Ministry of Power (MoP) is a government ministry responsible for the formulation and implementation of policies and programs relating to electricity generation, transmission, and distribution in India.",
      link: "https://powermin.gov.in/",
    },
    {
      title: "National Science Foundation (NSF)",
      description:
        "The National Science Foundation (NSF) is an independent federal agency of the United States government, responsible for funding research and education in all non-medical fields of science and engineering.",
      link: "https://www.nsf.gov/",
    },
    {
      title: "Atomic Energy Regulatory Board (AERB)",
      description:
        "The Atomic Energy Regulatory Board (AERB) is the nuclear regulatory body of India, responsible for ensuring the safe use of radiation sources and nuclear energy in the country.",
      link: "https://www.aerb.gov.in/",
    },
    {
      title: "Petroleum Conservation Research Association (PCRA)",
      description:
        "The Petroleum Conservation Research Association (PCRA) is an Indian government agency engaged in promoting energy efficiency and conservation in the petroleum sector.",
      link: "https://www.pcra.org/",
    },
    {
      title: "Centre for Development of Advanced Computing (C-DAC)",
      description:
        "The Centre for Development of Advanced Computing (C-DAC) is an Indian government agency engaged in research and development in the field of advanced computing technologies.",
      link: "https://cdac.in/",
    },
    {
      title: "Ministry of Petroleum and Natural Gas (MoPNG)",
      description:
        "The Ministry of Petroleum and Natural Gas (MoPNG) is a government ministry responsible for the exploration, production, refining, and distribution of petroleum and natural gas in India.",
      link: "https://mopng.gov.in/",
    },
    {
      title: "Ministry of Electronics and Information Technology (MeitY)",
      description:
        "The Ministry of Electronics and Information Technology (MeitY) is a government ministry responsible for the formulation and implementation of policies and programs relating to electronics, IT, and telecommunications in India.",
      link: "https://www.meity.gov.in/",
    },
    {
      title: "Ministry of Food Processing Industries (MoFPI)",
      description:
        "The Ministry of Food Processing Industries (MoFPI) is a government ministry responsible for the development and promotion of food processing industries in India.",
      link: "https://mofpi.nic.in/",
    },
    {
      title:
        "Ministry of Health and Family Welfare, Government of India (MoHFW)",
      description:
        "The Ministry of Health and Family Welfare (MoHFW) is a government ministry responsible for public health, healthcare, and family welfare services in India.",
      link: "https://www.mohfw.gov.in/",
    },
    {
      title: "Ministry of Defence (MoD)",
      description:
        "The Ministry of Defence (MoD) is a government ministry responsible for the defence of India and its armed forces. MoD formulates policies and procedures related to defence and security.",
      link: "https://mod.gov.in/",
    },
    {
      title: "Centre For Development Of Telematics (C-DOT)",
      description:
        "The Centre for Development of Telematics (C-DOT) is an Indian government agency engaged in research and development in the field of telecommunications and networking technologies.",
      link: "https://cdot.in/",
    },
    {
      title: "Bhabha Atomic Research Centre (BARC)",
      description:
        "The Bhabha Atomic Research Centre (BARC) is India's premier nuclear research facility, carrying out nuclear research in various disciplines including physics, chemistry, and engineering.",
      link: "https://www.barc.gov.in/",
    },
    {
      title: "Ministry of Housing and Urban Affairs (MoHUA)",
      description:
        "The Ministry of Housing and Urban Affairs (MoHUA) is a government ministry responsible for urban development, housing, and urban poverty alleviation in India.",
      link: "https://mohua.gov.in/",
    },
    {
      title: "Ministry of Coal (MoC)",
      description:
        "The Ministry of Coal (MoC) is a government ministry responsible for the regulation and development of the coal sector in India, including exploration, mining, and distribution.",
      link: "https://coal.gov.in/",
    },
    {
      title: "European Commission (EC)",
      description:
        "The European Commission (EC) is the executive branch of the European Union, responsible for proposing legislation, implementing decisions, and managing the day-to-day business of the EU.",
      link: "https://ec.europa.eu/",
    },
    {
      title: "Ministry of Micro, Small and Medium Enterprises (MSME)",
      description:
        "The Ministry of Micro, Small and Medium Enterprises (MSME) is a government ministry responsible for the promotion and development of micro, small, and medium enterprises in India.",
      link: "https://msme.gov.in/",
    },
    {
      title: "India Meteorological Department (IMD)",
      description:
        "The India Meteorological Department (IMD) is the national meteorological service of India, responsible for weather forecasting, seismology, and climate monitoring.",
      link: "https://mausam.imd.gov.in/",
    },
    {
      title: "Ministry of Social Justice and Empowerment (MSJE)",
      description:
        "The Ministry of Social Justice and Empowerment (MSJE) is a government ministry responsible for the welfare, development, and empowerment of disadvantaged and marginalized sections of society in India.",
      link: "https://socialjustice.gov.in/",
    },
    {
      title: "Ministry of Science and Technology (MoST)",
      description:
        "The Ministry of Science and Technology (MoST) is a government ministry responsible for the promotion and coordination of scientific and technological research and development activities in India.",
      link: "https://dst.gov.in/",
    },
    {
      title: "Department of Scientific and Industrial Research (DSIR)",
      description:
        "The Department of Scientific and Industrial Research (DSIR) is a department within the Ministry of Science and Technology, responsible for promoting industrial research and development in India.",
      link: "https://www.dsir.gov.in/",
    },
    {
      title: "Ministry of Road Transport and Highways of India (MoRTH)",
      description:
        "The Ministry of Road Transport and Highways (MoRTH) is a government ministry responsible for the development and maintenance of national highways and roads in India.",
      link: "https://morth.nic.in/",
    },
    {
      title: "Aeronautical Development Agency (ADA)",
      description:
        "The Aeronautical Development Agency (ADA) is an Indian government agency responsible for the design and development of indigenous military aircraft and related technologies.",
      link: "https://www.ada.gov.in/",
    },
    {
      title: "European Research Council (ERC)",
      description:
        "The European Research Council (ERC) is a funding organization for scientific research in Europe. It supports investigator-driven frontier research across all fields of science, scholarship, and engineering.",
      link: "https://erc.europa.eu/",
    },
    {
      title: "National Human Genome Research Institute (NHGRI)",
      description:
        "The National Human Genome Research Institute (NHGRI) is one of the 27 institutes and centers at the National Institutes of Health (NIH), responsible for advancing human genomics research.",
      link: "https://www.genome.gov/",
    },
    {
      title: "Ministry of Education of India (MoE)",
      description:
        "The Ministry of Education (MoE) is a government ministry responsible for the formulation and implementation of policies related to education in India, including school education, higher education, and vocational education.",
      link: "https://www.education.gov.in/",
    },
    {
      title: "Indian National Centre for Ocean Information Services (INCOIS)",
      description:
        "The Indian National Centre for Ocean Information Services (INCOIS) is an autonomous organization under the Ministry of Earth Sciences, responsible for providing oceanographic information and services to various stakeholders.",
      link: "https://www.incois.gov.in/",
    },
    {
      title: "National Institutes of Health (NIH)",
      description:
        "The National Institutes of Health (NIH) is the primary agency of the United States government responsible for biomedical and public health research. It comprises 27 institutes and centers.",
      link: "https://www.nih.gov/",
    },
    {
      title: "Agence nationale de la recherche (ANR)",
      description:
        "The Agence nationale de la recherche (ANR) is a French government agency responsible for funding research projects in all scientific disciplines. It supports both fundamental and applied research.",
      link: "https://anr.fr/",
    },
    {
      title: "Inter-American Foundation (IAF)",
      description:
        "The Inter-American Foundation (IAF) is an independent agency of the United States government that provides grants and assistance to grassroots organizations in Latin America and the Caribbean.",
      link: "https://www.iaf.gov/",
    },
    {
      title: "United States Agency for International Development (USAID)",
      description:
        "The United States Agency for International Development (USAID) is an independent agency of the United States federal government, responsible for administering foreign aid and development assistance.",
      link: "https://www.usaid.gov/",
    },
    {
      title:
        "National Council for Scientific and Technological Development (CNPq)",
      description:
        "The National Council for Scientific and Technological Development (CNPq) is an agency of the Brazilian government, responsible for funding scientific research and promoting technological development.",
      link: "http://www.cnpq.br/",
    },
    {
      title: "United States Department of Health and Human Services (HHS)",
      description:
        "The United States Department of Health and Human Services (HHS) is a cabinet-level department of the U.S. federal government, responsible for protecting the health of all Americans and providing essential human services.",
      link: "https://www.hhs.gov/",
    },
    {
      title:
        "Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (CAPES)",
      description:
        "The Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (CAPES) is a foundation within the Brazilian Ministry of Education, responsible for promoting and funding postgraduate education in Brazil.",
      link: "https://www.capes.gov.br/",
    },
    {
      title: "Technology Development Board (TDB)",
      description:
        "The Technology Development Board (TDB) is a statutory body of the Government of India, established to promote the development and commercialization of indigenous technology.",
      link: "http://www.tdb.gov.in/",
    },
    {
      title: "Department of Higher Education (DHE)",
      description:
        "The Department of Higher Education (DHE) is a government department responsible for the formulation and implementation of policies related to higher education in India.",
      link: "https://education.gov.in",
    },
    {
      title: "National Endowment for the Humanities (NEH)",
      description:
        "The National Endowment for the Humanities (NEH) is an independent federal agency of the United States government, dedicated to supporting research, education, preservation, and public programs in the humanities.",
      link: "https://neh.gov/",
    },
    {
      title: "National Endowment for the Arts (NEA)",
      description:
        "The National Endowment for the Arts (NEA) is an independent federal agency of the United States government, responsible for funding and supporting artistic excellence, creativity, and innovation in the arts.",
      link: "https://www.arts.gov/",
    },
    {
      title: "Health Resources and Services Administration (HRSA)",
      description:
        "The Health Resources and Services Administration (HRSA) is an agency of the U.S. Department of Health and Human Services, responsible for improving access to healthcare services for people who are uninsured, isolated, or medically vulnerable.",
      link: "https://www.hrsa.gov/",
    },
    {
      title: "Indian National Science Academy (INSA)",
      description:
        "The Indian National Science Academy (INSA) is an apex body of Indian scientists, responsible for promoting science and scientific research in India.",
      link: "https://insaindia.res.in",
    },
    {
      title:
        "Indo French Centre for the Promotion of Advanced Research (IFCPAR)",
      description:
        "The Indo French Centre for the Promotion of Advanced Research (IFCPAR) is a bilateral organization established by the governments of India and France to promote collaborative research between the two countries.",
      link: "http://www.cefipra.org",
    },
    {
      title: "Indo-US Science & Technology Forum",
      description:
        "The Indo-US Science and Technology Forum is a bilateral organization established by the governments of India and the United States to promote collaboration in science, technology, and innovation.",
      link: "https://www.iusstf.org",
    },
    {
      title: "Ministry of Rural Development",
      description:
        "The Ministry of Rural Development is a government ministry responsible for the formulation and implementation of policies and programs related to rural development in India.",
      link: "https://rural.nic.in",
    },
    {
      title: "Ministry of Textiles",
      description:
        "The Ministry of Textiles is a government ministry responsible for the formulation and implementation of policies related to the textile industry in India.",
      link: "https://texmin.nic.in",
    },
    {
      title: "Council of Scientific & Industrial Research (CSIR)",
      description:
        "The Council of Scientific and Industrial Research (CSIR) is an autonomous body under the Ministry of Science and Technology, responsible for scientific and industrial research in India.",
      link: "https://www.csir.res.in",
    },
    {
      title:
        "Department of Chemicals & Petrochemicals, Ministry of Chemicals & Fertilizers",
      description:
        "The Department of Chemicals & Petrochemicals is a government department under the Ministry of Chemicals & Fertilizers, responsible for the regulation and development of the chemicals and petrochemicals industry in India.",
      link: "https://chemicals.gov.in/",
    },
    {
      title:
        "Deutsche Forschungsgemeinschaft (DFG – German Research Foundation)",
      description:
        "The Deutsche Forschungsgemeinschaft (DFG) is a German research funding organization, responsible for funding and promoting research projects in various disciplines.",
      link: "https://www.dfg.de",
    },
    {
      title: "GAIL (India) Ltd.",
      description:
        "GAIL (India) Ltd. is a natural gas company owned by the Government of India. It is involved in the exploration, production, transmission, and distribution of natural gas in India.",
      link: "https://gailonline.com",
    },
    {
      title: "Indian Council of Agricultural Research (ICAR)",
      description:
        "The Indian Council of Agricultural Research (ICAR) is an autonomous organization under the Department of Agricultural Research and Education, Ministry of Agriculture & Farmers' Welfare, Government of India. It is responsible for coordinating agricultural research and education in India.",
      link: "https://www.icar.org.in",
    },
    {
      title: "Indian Council of Medical Research (ICMR)",
      description:
        "The Indian Council of Medical Research (ICMR) is the apex body in India for the formulation, coordination, and promotion of biomedical research.",
      link: "https://www.icmr.nic.in",
    },
    {
      title: "Northern Indian Textile Research Association (NITRA)",
      description:
        "The Northern Indian Textile Research Association (NITRA) is an autonomous body under the Ministry of Textiles, Government of India. It is engaged in research and development in the field of textiles.",
      link: "https://www.nitratextile.org",
    },
    {
      title: "Oil & Natural Gas Corporation Ltd (ONGC)",
      description:
        "Oil and Natural Gas Corporation Limited (ONGC) is an Indian multinational oil and gas company, headquartered in Dehradun, Uttarakhand. It is a public sector undertaking under the administrative control of the Ministry of Petroleum and Natural Gas.",
      link: "https://www.ongcindia.com",
    },
    {
      title: "Science and Engineering Research Board (SERB)",
      description:
        "The Science and Engineering Research Board (SERB) is a statutory body under the Department of Science and Technology, Government of India, responsible for promoting and funding research in science and engineering.",
      link: "https://www.serb.gov.in",
    },
    {
      title: "Tata Institute of Fundamental Research (TIFR)",
      description:
        "The Tata Institute of Fundamental Research (TIFR) is a research institution in India dedicated to basic research in mathematics and the sciences. It is funded by the Government of India and is located in Mumbai.",
      link: "https://www.tifr.res.in",
    },
    {
      title: "Technology Information, Forecasting & Assessment Council (TIFAC)",
      description:
        "The Technology Information, Forecasting & Assessment Council (TIFAC) is an autonomous organization under the Department of Science and Technology, Government of India, responsible for technology forecasting and assessment.",
      link: "http://www.tifac.org.in",
    },
    {
      title: "UK India Education and Research Initiative (UKIERI)",
      description:
        "The UK India Education and Research Initiative (UKIERI) is a bilateral education and research initiative between India and the United Kingdom, aimed at promoting collaboration in higher education and research.",
      link: "https://www.ukieri.org",
    },
    {
      title: "Department of Electronics (DOE)",
      description:
        "The Department of Electronics (DOE) is a government department responsible for the formulation and implementation of policies related to electronics and information technology in India.",
      link: "http://www.dde.nic.in",
    },
    {
      title: "Indian Renewable Energy Development Agency Limited (IREDAL)",
      description:
        "The Indian Renewable Energy Development Agency Limited (IREDAL) is a government-owned financial institution in India, responsible for promoting and financing renewable energy projects in the country.",
      link: "http://www.ireda.gov.in",
    },
    {
      title: "Indian Society For Technical Education (ISTE)",
      description:
        "The Indian Society for Technical Education (ISTE) is a national professional society for educators and researchers in the field of engineering and technology education in India.",
      link: "http://www.isteonline.in",
    },
    {
      title: "The Institution of Engineering and Technology (IET)",
      description:
        "The Institution of Engineering and Technology (IET) is a professional engineering institution based in the United Kingdom, dedicated to promoting engineering and technology worldwide.",
      link: "http://www.theiet.org",
    },
    {
      title: "Ministry of Human Resource Development (MHRD)",
      description:
        "The Ministry of Human Resource Development (MHRD) is a government ministry responsible for the development and implementation of policies related to education in India.",
      link: "www.mhrd.gov.in",
    },
    {
      title: "Ministry of Food Processing Industries (MFPI)",
      description:
        "The Ministry of Food Processing Industries (MFPI) is a government ministry responsible for the formulation and implementation of policies related to food processing industries in India.",
      link: "www.mofpi.nic.in",
    },
    {
      title: "National Jute Board (NJB)",
      description:
        "The National Jute Board (NJB) is an organization under the Ministry of Textiles, Government of India, responsible for the promotion and development of the jute industry in the country.",
      link: "www.jute.org",
    },
    {
      title: "Research Scheme on Flood Control (RSFC)",
      description:
        "The Research Scheme on Flood Control (RSFC) is a government initiative aimed at funding research projects related to flood control and management in India.",
      link: "www.rsfc.vsnl.net.in",
    },
    {
      title: "Research Scheme on Power (RSOP)",
      description:
        "The Research Scheme on Power (RSOP) is a government initiative aimed at funding research projects related to power generation, transmission, and distribution in India.",
      link: "www.cbip.org",
    },
    {
      title: "SDC - SAARC Documentation Centre",
      description:
        "The SAARC Documentation Centre (SDC) is an intergovernmental organization of South Asian countries, responsible for collecting and disseminating information on South Asian regional cooperation and development.",
      link: "http://www.sdc.gov.in/",
    },
    {
      title: "Science and Engineering Research Council (SERC)",
      description:
        "The Science and Engineering Research Council (SERC) is a statutory body under the Department of Science and Technology, Government of India, responsible for promoting and funding research in science and engineering.",
      link: "www.serc-dst.org",
    },
    {
      title: "Technology Absorption and Adaptation Scheme (TAAS)",
      description:
        "The Technology Absorption and Adaptation Scheme (TAAS) is a government scheme aimed at promoting the adoption and adaptation of new technologies by Indian industries.",
      link: "http://www.taas-dst.org/",
    },
    {
      title: "Vikram Sarabhai Space Centre (VSSC)",
      description:
        "The Vikram Sarabhai Space Centre (VSSC) is a major space research centre of the Indian Space Research Organisation (ISRO), located in Thiruvananthapuram, Kerala. It is involved in the development of satellite launch vehicles and sounding rockets.",
      link: "https://www.vssc.gov.in/",
    },
    {
      title: "Waste to Energy (W2E)",
      description:
        "The Waste to Energy (W2E) program is a government initiative aimed at converting waste materials into usable forms of energy, such as electricity or heat.",
      link: "http://www.w2es.com/",
    },
    {
      title: "Technological Advancement for Rural Areas (TARA)",
      description:
        "The Technological Advancement for Rural Areas (TARA) program is a government initiative aimed at developing and implementing technology solutions for rural development and empowerment.",
      link: "https://dsttara.in/InnerPages/TARA.aspx",
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
