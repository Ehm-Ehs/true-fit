import { Link } from "@remix-run/react";
import Card from "~/components/card";

import { Whys, steps } from "~/components/info";
import Footer from "~/components/nav/footer";
import Header from "~/components/nav/header";

export default function Index() {
  return (
    <>
      <div className=" ">
        <div className=" bg-hero px-4  bg-no-repeat bg-cover bg-center min-h-[25rem] md:min-h-[40rem]">
          <Header />

          <div className="">
            <div className="mx-auto flex flex-col justify-center  text-center  py-12 md:py-36 max-w-[45rem]">
              <h1 className="text-2xl md:text-6xl font-bold mb-4 text-primary pt-12">
                Unlock Your Potential. Discover Your Ideal Career Path.
              </h1>
              <p className="  text-tertiary text-lg font-medium mb-8">
                Find your perfect career in just 3 minutes with our personalized
                quiz. Get tailored recommendations, explore learning paths, and
                connect with expert advisors.
              </p>
              <div>
                <Link
                  to="/interest"
                  className="bg-cta text-white px-6 py-3 rounded "
                >
                  Start Your Journey Now
                </Link>
                <p className="text-lg text-tertiary mt-8">
                  ✨ Takes 8-10 minutes • Get instant results • No email
                  required
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 ">
          <div className="py-8 md:py-32">
            <h2 className="text-secondaryCta text-2xl md:text-3xl font-bold mb-8 text-center">
              Why Choose True Fit ?
            </h2>
            <div className="flex gap-5 flex-col justify-center md:justify-between md:flex-row">
              {Whys.map((Why, idx) => (
                <Card
                  key={idx}
                  className="item-left"
                  title={Why.title}
                  description={Why.description}
                  icon={Why.icon}
                  styleText="text-left"
                  bgClassName={Why.bgClassName}
                  buttonText={Why.text}
                />
              ))}
            </div>
          </div>
          <div className="py-8 md:py-32">
            <h2 className=" text-secondary text-2xl md:text-3xl font-bold mb-8 text-center">
              How True Fit Works
            </h2>
            <div className=" flex flex-col justify-center gap-10">
              <div className="flex gap-5 flex-col justify-center md:justify-between md:flex-row">
                {steps.map((step, idx) => (
                  <Card
                    key={idx}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                    bgClassName={step.bgClassName}
                  />
                ))}
              </div>
              <div className="item-center mx-auto">
                <Link
                  to="/interest"
                  className="bg-cta text-white px-6 py-3 rounded "
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
