import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className=" flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-12">
      <div className="flex gap-4 ">
        <div className="  text-5xl font-bold text-accent flex">
          <CountUp start={12} end={1} duration={5} delay={2} className="block w-[60px]" />

        </div>
        <span>
          Years <br /> Experience
        </span>
      </div>

      <div className="flex gap-4 ">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp  start={8} end={2} duration={5} delay={2} className="block w-[60px]" />
        </div>
        <span>
          Clients <br /> Worldwide
        </span>
      </div>
    </div>
  );
};

export default Stats;
