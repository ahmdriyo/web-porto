"use client"
import CountUp from "react-countup";
const stats = [
  {
    num : 2,
    text : "Years of experience"
  },
  {
    num : 9,
    text : "Independent project completed"
  },
]
const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-3 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-5xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
  
}

export default Stats