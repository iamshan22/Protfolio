const journeyData = [
  {
    year: "2024",
    role: "Frontend Developer Intern",
    company: "Digital Lync",
  },
  {
    year: "2025",
    role: "Full Stack Developer Trainee",
    company: "Digital Lync",
  },
  {
    year: "2025",
    role: "Bachelor of Science (MPCS)",
    company: "Andhra University",
  },
];

const Journey = () => {
  return (
    <div className="flex flex-col ">
      <h2 className="h2 mb-8">
        Education & <span className="text-accent">Experience</span>
      </h2>
      {journeyData.map((item, index) => {
        const { year, role, company } = item;
        return (
          <div key={index} className="flex items-center gap-12 w-full">
            {/* bullets*/}
            <div className=" flex flex-col w-max  justify-center items-center">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="w-[1px] h-[180px] bg-white/10"></div>
            </div>
            {/* text */}
            <div className=" max-w-[500px]">
              <p className="mb-6 text-lg text-white/50">{year}</p>
              <h4 className="h4 mb-2">{role}</h4>
              <p className="text-lg text-white/50">{company}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Journey;
