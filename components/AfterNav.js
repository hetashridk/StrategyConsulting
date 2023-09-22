"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo_mv from "../public/images/logo_mv.png";
import afterHeader_wv from "../public/images/afterHeader_wv.png";
import left2 from "../public/images/left2.png";
import right from "../public/images/right.png";

import paypal from "../public/images/paypal.png";
import blackrock from "../public/images/blackrock.png";
import tsb from "../public/images/tsb.png";
import whychoose from "../public/images/whychoose.png";
import strategy from "../public/images/strategy.png";
import managing from "../public/images/managing.png";
import technology from "../public/images/technology.png";
import financial from "../public/images/financial.png";
import hr from "../public/images/hr.png";
import operations from "../public/images/operations.png";
import marketing from "../public/images/marketing.png";
import risk from "../public/images/risk.png";

import twitter_m from "../public/images/twitter_m.png";
import insta_mv from "../public/images/insta_mv.png";
import fb_mv from "../public/images/fb_mv.png";
import ld_mv from "../public/images/ld_mv.png";
import twitter_logo from "../public/images/twitter_logo.png";
import insta_logo from "../public/images/insta_logo.png";
import fb_logo from "../public/images/fb_logo.png";
import ld_logo from "../public/images/ld_logo.png";
import location from "../public/images/location.png";
import call from "../public/images/call.png";
import email from "../public/images/email.png";
import data from "@/data";

function AfterNav() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  function nextText() {
    const newIndex =
      currentTextIndex === data.length - 1 ? 0 : currentTextIndex + 1;
    setCurrentTextIndex(newIndex);
  }

  function previousText() {
    const newIndex =
      currentTextIndex === 0 ? data.length - 1 : currentTextIndex - 1;
    setCurrentTextIndex(newIndex);
  }
  return (
    <>
      <div className="bg-slate-400">
        <div className="flex">
          <div className="w-[50%] m-5">
            <Image src={afterHeader_wv} />
          </div>
          <div className="w-[50%] flex flex-col items-center m-5">
            <div>
              <p className="lg:text-6xl md:text-4xl">Strategy</p>
            </div>
            <div className="md:m-5">
              <p className="text-[0.25rem] md:text-[0.5rem] lg:text-[1rem]">
                In today's rapidly evolving business landscape, success is often
                determined by the ability to adapt, innovate, and make informed
                decisions. This is where strategy and consulting services play a
                pivotal role. Strategy and consulting professionals bring their
                expertise to help organizations navigate challenges, capitalize
                on opportunities, and achieve sustainable growth. In this
                article, we'll explore the essence of strategy and consulting
                and how it contributes to the success of businesses across
                various industries.
              </p>
            </div>
            <div className="md:m-5 md:space-y-4 mt-4 space-y-2">
              <li className="text-[0.25rem] md:text-[0.5rem] lg:text-[1rem]">
                One of the primary roles of consultants is to identify and solve
                complex business problems. They use their expertise to analyze
                data, conduct market research, and recommend actionable
                solutions. Whether it's optimizing operations, improving
                customer experience, or addressing financial issues, consultants
                bring fresh perspectives to the table.
              </li>
              <li className="text-[0.25rem] md:text-[0.5rem] lg:text-[1rem]">
                Consultants help organizations define their vision, mission, and
                strategic objectives. They assist in creating roadmaps and
                action plans to achieve these goals. Strategic planning ensures
                that an organization's resources are allocated efficiently and
                that everyone is aligned toward a common purpose.
              </li>
              <li className="text-[0.25rem] md:text-[0.5rem] lg:text-[1rem]">
                {" "}
                Implementing new strategies or making significant organizational
                changes can be challenging. Consultants specialize in change
                management, guiding businesses through transitions, and ensuring
                that changes are embraced by employees and stakeholders.
              </li>
              <li className="text-[0.25rem] md:text-[0.5rem] lg:text-[1rem]">
                Staying competitive requires a deep understanding of the market.
                Consultants provide valuable market research and analysis,
                helping organizations make informed decisions about product
                development, market entry, and expansion strategies.
              </li>
              <li className="text-[0.25rem] md:text-[0.5rem] lg:text-[1rem]">
                With the rapid advancement of technology, businesses need to
                adapt to stay relevant. Consultants assist in selecting and
                integrating technology solutions that enhance efficiency,
                productivity, and customer engagement
              </li>
            </div>
            <div className="md:m-5 mt-4">
              <p className="text-[0.25rem] md:text-[0.5rem] lg:text-[1rem]">
                In an era of constant change and complexity, strategy and
                consulting services have become indispensable for organizations
                striving to thrive and grow. Whether you're a startup looking to
                enter the market, an established company seeking to innovate, or
                a non-profit organization aiming to maximize impact, strategic
                consulting can be a catalyst for your success. By collaborating
                with experts who understand your industry and challenges, you
                can unlock new opportunities and achieve sustainable results.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-blue-400 flex flex-col items-center m-5">
          <h2 className="font-bold md:text-4xl">Many company trusted us</h2>
        </div>
        <div className="m-5 bg-gray-700">
          <div className="text-[0.5rem] text-white p-4 md:text-[1rem] md:text-center">
            <p>
              CXOs of many big companies Trust and believe in our ethics and
              professional journey can emulate their business goals and success.
              The list includes multinational corporations, financial
              institutions, private equity funds, domestic corporations, joint
              ventures, emerging companies, start-ups, non-governmental
              organisations, international organisations, individuals, and the
              government.
            </p>
          </div>
          <div className="p-5 flex items-center justify-center">
            <div className="-mt-8 flex flex-col md:m-4">
              <Image src={paypal} className=" w-14 md:w-36" />
              <Image src={tsb} className="mt-2 w-14 md:w-36" />
            </div>
            <div className="ml-4  flex flex-col md:m-4">
              <Image src={blackrock} className="-mt-2 w-14 md:w-36" />
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <Image src={whychoose} />
            <div className="absolute z-10 top-2 md:ml-56 lg:ml-[40rem]">
              <p className="text-white font-bold ml-5 md:text-3xl lg:mt-10">
                Why Choose Fintract Global
              </p>

              <div className="flex md:mt-5 lg:mt-10">
                <div className="w-[50%] mt-3">
                  <div className="ml-5 lg:mt-10">
                    <p className="text-white font-bold md:text-2xl">01.</p>
                  </div>
                  <div className="ml-5 ">
                    <p className="text-white text-[0.6rem] md:text-xl lg:text-2xl">
                      EXPERIENCED
                    </p>
                  </div>
                  <div className="ml-5">
                    <p className="text-white text-[0.6rem]  md:text-[1rem]">
                      We have world class team with industry expertise.
                    </p>
                  </div>
                  <div className="ml-5 mt-1 lg:mt-10">
                    <p className="text-white font-bold md:text-2xl">03.</p>
                  </div>
                  <div className="ml-5 ">
                    <p className="text-white text-[0.6rem] md:text-xl lg:text-2xl">
                      REPUTATION
                    </p>
                  </div>
                  <div className="ml-5">
                    <p className="text-white text-[0.6rem] md:text-[1rem]">
                      We commit to provide quality services to our clients
                    </p>
                  </div>
                </div>
                <div className="mt-3 md:mt-4">
                  <div className="ml-5 lg:mt-10">
                    <p className="text-white font-bold md:text-2xl">02.</p>
                  </div>
                  <div className="ml-5 ">
                    <p className="text-white text-[0.6rem] md:text-xl lg:text-2xl">
                      FOCUS ON YOU
                    </p>
                  </div>
                  <div className="ml-5">
                    <p className="text-white text-[0.6rem] md:text-[1rem]">
                      We do our best to achieve client’s satisfaction.
                    </p>
                  </div>
                  <div className="ml-5 mt-1 lg:mt-10">
                    <p className="text-white font-bold md:text-2xl">04.</p>
                  </div>
                  <div className="ml-5 ">
                    <p className="text-white text-[0.6rem] md:text-xl lg:text-2xl">
                      WORK
                    </p>
                  </div>
                  <div className="ml-5">
                    <p className="text-white text-[0.6rem] md:text-[1rem]">
                      We are dedicated to give our 100% to our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-blue-400 flex flex-col items-center m-5">
            <h2 className="font-bold md:text-4xl">
              Strategy and Consulting Practice areas
            </h2>
          </div>
          <div className="p-10">
            <div className="bg-white rounded-xl ring ring-black shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] flex flex-col items-center justify-center p-4 lg:hidden">
              <div className="flex">
                <div className="-ml-16">
                  <Image
                    src={data[currentTextIndex].src}
                    width={20}
                    height={20}
                  />
                </div>
                <div className="font-semibold ml-5">
                  <p className="text-black">{data[currentTextIndex].title}</p>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-black">{data[currentTextIndex].text}</p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <button onClick={previousText}>
                  <Image src={left2} width={20} height={20} alt="" />
                </button>
                <button onClick={nextText}>
                  <Image src={right} width={20} height={20} alt="" />
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div>
                <div className="flex">
                  <div className="bg-white m-5 rounded-xl ring ring-black shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] flex flex-col items-center justify-center p-4">
                    <div className="flex">
                      <div>
                        <Image src={strategy} width={50} height={50} />
                      </div>
                      <div>
                        <p className="text-2xl font-semibold text-black">
                          Strategy Consulting
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-black">
                          This is the core area of consulting and involves
                          helping organizations define their long-term goals,
                          develop strategic plans, and make decisions on how to
                          allocate resources to achieve those objectives.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white m-5 rounded-xl ring ring-black shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] flex flex-col items-center justify-center p-4">
                    <div className="flex">
                      <div>
                        <Image src={managing} width={50} height={50} />
                      </div>
                      <div className="ml-4">
                        <p className="text-2xl font-semibold text-black">
                          Management Consulting
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-black">
                          Management consultants work on improving overall
                          organizational effectiveness. They might focus on
                          areas like organizational structure, process
                          optimization, and change management.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white m-5 rounded-xl ring ring-black shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] flex flex-col items-center justify-center p-4">
                    <div className="flex">
                      <div>
                        <Image src={technology} width={50} height={50} />
                      </div>
                      <div className="ml-4">
                        <p className="text-2xl font-semibold text-black">
                          Technology Consulting
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-black">
                          Technology consultants help organizations leverage
                          technology to achieve their business objectives. This
                          can include IT strategy, digital transformation,
                          cybersecurity, and data analytics.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white m-5 rounded-xl ring ring-black shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] flex flex-col items-center justify-center p-4">
                    <div className="flex">
                      <div>
                        <Image src={financial} width={50} height={50} />
                      </div>
                      <div className="ml-4">
                        <p className="text-2xl font-semibold text-black">
                          Financial Consulting
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-black">
                          Financial consultants assist with financial planning,
                          budgeting, mergers and acquisitions, and risk
                          management. They help organizations make sound
                          financial decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-white m-5 rounded-xl ring ring-black shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] flex flex-col items-center justify-center p-4">
                    <div className="flex">
                      <div>
                        <Image src={hr} width={50} height={50} />
                      </div>
                      <div className="ml-4">
                        <p className="text-2xl font-semibold text-black">
                          Human Resources Consulting
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-black">
                          HR consultants work on talent management,
                          organizational development, workforce planning, and HR
                          strategy.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white m-5 rounded-xl ring ring-black shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] flex flex-col items-center justify-center p-4">
                    <div className="flex">
                      <div>
                        <Image src={operations} width={50} height={50} />
                      </div>
                      <div className="ml-4">
                        <p className="text-2xl font-semibold text-black">
                          Operations Consulting
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-black">
                          This area focuses on improving day-to-day operations
                          and processes. Consultants might work on supply chain
                          optimization, logistics, and efficiency improvement
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white m-5 rounded-xl ring ring-black shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] flex flex-col items-center justify-center p-4">
                    <div className="flex">
                      <div>
                        <Image src={marketing} width={50} height={50} />
                      </div>
                      <div className="ml-4">
                        <p className="text-2xl font-semibold text-black">
                          Marketing and Sales Consulting
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-black">
                          Consultants in this area help organizations with
                          market research, marketing strategy, branding, and
                          sales optimization.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white m-5 rounded-xl ring ring-black shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] flex flex-col items-center justify-center p-4">
                    <div className="flex">
                      <div>
                        <Image src={risk} width={50} height={50} />
                      </div>
                      <div className="ml-4">
                        <p className="text-2xl font-semibold text-black">
                          Risk Management Consulting
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-black">
                          These consultants specialize in identifying and
                          mitigating various risks that an organization might
                          face, including financial, operational, and regulatory
                          risks.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gray-700 mt-36">
            <div className="">
              <div>
                <div className="flex md:flex-row">
                  <div className="pl-5 pt-6 md:-p-[25rem]">
                    <Image src={logo_mv} className="" />
                  </div>
                  <div>
                    <p className="text-white text-2xl font-semibold pl-5 pt-6">
                      FINTRACT GLOBAL
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-white text-left pl-5 px-4 pt-6 text-[1rem] md:text-[15px] lg:pr-96">
                    At Fintract Global Ltd, we combine a cutting-edge tech stack
                    with exceptional talent from Europe, Asia and America to
                    lead change in how financial entities work. Headquartered in
                    London, Fintract Global develops cutting edge fintech and
                    regtech products.
                  </p>
                </div>
                <div className="flex m-5">
                  <div className="p-2">
                    {/* <Image src={twitter_m} className="sm:hidden" /> */}
                    <Image src={twitter_logo} width={30} height={30} />
                  </div>
                  <div className="p-2">
                    {/* <Image src={insta_mv} className="sm:hidden" /> */}
                    <Image src={insta_logo} width={30} height={30} />
                  </div>
                  <div className="p-2">
                    {/* <Image src={fb_mv} className="sm:hidden" /> */}
                    <Image src={fb_logo} width={30} height={30} />
                  </div>
                  <div className="p-2">
                    {/* <Image src={ld_mv} className="sm:hidden" /> */}
                    <Image src={ld_logo} width={30} height={30} />
                  </div>
                </div>
              </div>
              <div className="mr-10 mt-10">
                <div>
                  <p className="text-xl text-white font-semibold  p-4">
                    Contacts
                  </p>
                </div>
                <div>
                  <div className="flex m-4">
                    <div>
                      <Image src={call} width={35} height={35} />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">Phone:</p>
                    </div>
                    <div className="ml-2">
                      <p>+447588401441</p>
                    </div>
                  </div>
                  <div className="flex m-4">
                    <div>
                      <Image src={email} width={35} height={35} />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">Email:</p>
                    </div>
                    <div className="ml-2">
                      <p>contact@fintractglobal.com</p>
                    </div>
                  </div>
                  <div className="flex m-4">
                    <div>
                      <Image src={location} width={35} height={35} />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">Address:</p>
                    </div>
                    <div className="ml-2">
                      <p>Docklands Business Centre 10-16</p>
                      <p>Tiller Road E14 8PX</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="mx-6" />

            <div>
              <p className="text-white text-[0.75rem] p-5 md:text-white md:text-[15px]">
                Fintract Global takes your privacy very seriously. We may
                process your personal information for carefully considered and
                specific purpose which are in our interests and enable us to
                enhance the service we provide.
              </p>
            </div>
            <div className="flex ml-5">
              <div>
                <p className="text-white text-[0.75rem]">Privacy Policy</p>
              </div>
              <div className="ml-32 md:ml-[30rem] lg:ml-[77rem]">
                <p className="text-white text-[0.75rem]">Terms and Condition</p>
              </div>
            </div>
            <div>
              <p className="text-white text-[10px] text-center p-5 md:text-white md:text-[15px]">
                Copyright ©2021 All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AfterNav;
