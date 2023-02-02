import React, { useState } from "react";

import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

function NavBar() {
  const [show, setShow] = useState();
  return (
    <section>
      <div className=" bg-white fixed w-full z-10 delay-300 duration-500">
        <div className="flex justify-between max-w-7xl mx-auto px-4">
          <div className=" py-[20px]">
            <img
              className="w-[145px] h-[45px] filter"
              src="/vectors/logo.svg"
            />
          </div>
          <div className="flex py-[20px]">
            <div className="flex items-center">
              {["company", "services", "work", "insights", "careers"].map(
                (items, index) => {
                  return (
                    <div key={index} className="group">
                      <Link
                        href=""
                        className="text-[#2a2a2a] laading-[16px] py-[40px] px-[22px]"
                      >
                        {items}
                      </Link>

                      <div
                        className={`absolute border-t border-t-gray-300 left-0 right-0 top-20 p-4  ${
                          items == "company" || items == "work"
                            ? "hidden group-hover:block"
                            : "hidden"
                        } w-full h-48 bg-white bg-opacity-50 backdrop-filter backdrop-blur-md`}
                      >
                        <div className="grid text-[14px] leading-[16px]  font-normal grid-cols-2 gap-6 absolute right-[35rem] ">
                          {[
                            "our story",
                            "people",
                            "awards",
                            "partnerships",
                            "locations",
                            "10Pearls Labs",
                            "10Pearls University",
                            "Empower Foundation",
                          ].map((items, index) => {
                            return (
                              <div key={index} className="">
                                <Link href="" className="hover:text-[#0045a6]">
                                  {items}
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div
                        className={`absolute border-t border-t-gray-300 left-0 right-0 top-20 p-4  ${
                          items == "services"
                            ? "hidden group-hover:block"
                            : "hidden"
                        }   w-full h-48 bg-white bg-opacity-50 backdrop-filter backdrop-blur-md`}
                      >
                        <div className="grid grid-cols-2 text-[14px] leading-[16px] font-normal  gap-6 absolute right-[28rem] ">
                          {[
                            ,
                            "locations",
                            "10Pearls Labs",
                            "10Pearls University",
                            "Empower Foundation",
                          ].map((items, index) => {
                            return (
                              <div key={index} className="">
                                <Link href="" className="hover:text-[#0045a6]">
                                  {items}
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div
                        className={`absolute border-t border-t-gray-300 left-0 right-0 top-20 p-4  ${
                          items == "careers"
                            ? "hidden group-hover:block"
                            : "hidden"
                        }   w-full h-48 bg-white bg-opacity-50 backdrop-filter backdrop-blur-md`}
                      >
                        <div className=" space-y-4 text-[14px] leading-[16px] font-normal  gap-6 absolute right-[23rem] ">
                          {[, "locations", "10Pearls Labs"].map(
                            (items, index) => {
                              return (
                                <div key={index} className="">
                                  <Link
                                    href=""
                                    className="hover:text-[#0045a6]"
                                  >
                                    {items}
                                  </Link>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            <div className="flex items-center">
              <button className="text-[#2a2a2a] hover:text-white delay-200 duration-300 hover:bg-[#0045a6] laading-[16px] py-[10px] px-[22px] border border-[#2a2a2a]">
                Contact
              </button>
              <FiSearch
                onClick={() => setShow(!show)}
                className="text-[#0045a6] w-5 h-5 ml-[22px] cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>{" "}
      {show && (
        <div
          className={`bg-white w-full  fixed  py-[6px] z-20 shadow-lg top-0  transition-all duration-500 ease-in-out delay-1000}`}
        >
          <div className="flex py-[20px] justify-between max-w-7xl mx-auto px-4 ">
            <h2 className="text-[16px] leading-[24px] font-normal text-[#212529]">
              Search...
            </h2>
            <div>
              <CgClose
                onClick={() => setShow(!show)}
                className="w-8 h-8 cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default NavBar;
