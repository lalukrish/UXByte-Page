import Image from "next/image";
import React from "react";

const WhyUs = () => {
  return (
    <div className="mt-12 text-center" id="why_us">
      <div className=" mb-6">
        <span className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
          Why us !
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 justify-center mt-12 gap-6">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/assets/pie-and-charts.svg"
              alt=""
              className="filter brightness-100 hover:brightness-75"
              width={180}
              height={200}
            />
            <div className="text-center">
              <h1 className="text-2xl font-semibold my-4" style={{fontSize:24,fontWeight:700}}>
                Future Proof Execution
              </h1>
              <p className="mx-20  text-left mr-6 md:ml-10 " style={{fontSize:16,fontWeight:400}}>
                We build with the latest advancements in mind, ensuring your
                product scales, stays secure, and thrives for years to come.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center my-8 md:mt-2">
            <Image
              src="/assets/smart-people.svg"
              alt=""
              className="filter brightness-100 hover:brightness-75"
              width={180}
              height={200}
            />
            <div className="text-center">
              <h1 className="text-2xl font-semibold my-4" style={{fontSize:24,fontWeight:700}}>
                Streamlined Efficiency
              </h1>
              <p className="mx-20 text-left mr-6 md:ml-10" style={{fontSize:16,fontWeight:400}}>
                Our refined processes guarantee transparency and keep your
                project on track and within budget.{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center my-8 md:mt-8">
            <Image
              src="/assets/designer-working.svg"
              alt=""
              className="filter brightness-100 hover:brightness-75"
              width={180}
              height={200}
            />
            <div className="text-center">
              <h1 className="text-2xl font-semibold my-4" style={{fontSize:24,fontWeight:700}}>
                Design that Captivates
              </h1>
              <p className="mx-20 text-left mr-6 md:ml-9" style={{fontSize:16,fontWeight:400}}>
                We create beautiful and user-friendly interfaces that not only
                look amazing but also deliver an intuitive experience.{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center my-8 md:mt-2">
            <Image
              src="/assets/business-deal.svg"
              alt=""
              className="filter brightness-100 hover:brightness-75"
              width={180}
              height={200}
            />
            <div className="text-center">
              <h1 className="text-2xl font-semibold my-4" style={{fontSize:24,fontWeight:700}}>
                End-to-End Partnership
              </h1>
              <p className="mx-20 text-left mr-6 md:ml-8" style={{fontSize:16,fontWeight:400}}>
                We &apos;re here for the long haul, supporting you from brainstorming
                to launch and beyond.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
