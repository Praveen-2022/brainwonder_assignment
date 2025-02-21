import React from "react";

import img1 from "../assets/1.jpg";
const ComponentOne = () => {
  return (
    <div>
      <div className="my-10">
        <h1 className="text-xl font-semibold text-center">DMIT Reports</h1>
        <h1 className="text-3xl font-semibold text-center text-blue-400 ">
          Sunil Sharma
        </h1>
      </div>

      <div className="border-b-1 grid grid-cols-6">
        <div>
          <h2 className="font-semibold text-gray-500">Number</h2>
          <p className="font-semibold">XX5544XXYYXX43</p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-500">Assessment Date</h2>
          <p className="font-semibold">2016/4/3</p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-500">DOB</h2>
          <p className="font-semibold">1982/4/23</p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-500">Gender</h2>
          <p className="font-semibold">Male</p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-500">Email</h2>
          <p className="font-semibold">Ankit123@gmail.com</p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-500">Mobile Number</h2>
          <p className="font-semibold">9632228575</p>
        </div>
      </div>
      <h1 className="text-3xl font-semibold my-10">
        DMIT&apos;s Four Quadrant model of excellence
      </h1>
      <div className="flex items-center justify-center">
        <div className=" flex flex-row gap-4">
          <span className="flex items-center space-x-2 border-2 px-4 py-2 rounded-lg border-blue-500">
            <span className=" bg-red-600 rounded-full p-2"></span>
            <p className="text-base font-semibold">Weakness - 2</p>
          </span>
          <span className="flex items-center space-x-2 border-2 px-4 py-2 rounded-lg border-blue-500">
            <span className="bg-orange-600 rounded-full p-2"></span>
            <p className="text-base font-semibold">Below Average - 6</p>
          </span>
          <span className="flex items-center space-x-2 border-2 px-4 py-2 rounded-lg border-blue-500">
            <span className="bg-lime-600 rounded-full p-2"></span>
            <p className="text-base font-semibold">Above Average - 7</p>
          </span>
          <span className="flex items-center space-x-2 border-2 px-4 py-2 rounded-lg border-blue-500">
            <span className="bg-green-600 rounded-full p-2"></span>
            <p className="text-base font-semibold">Strength - 4</p>
          </span>
        </div>
      </div>

      {/*  */}
      {/* main div */}
      <div className="grid grid-cols-3 mt-12">
        {/* left */}
        <div className="">
          <div className="border border-orange-300 rounded-xl p-6 w-[450px]">
            {/* Title & Buttons */}
            <div className="flex justify-between items-center">
              <div className="font-semibold text-2xl">Personal</div>
              <div className="flex space-x-2">
                <span className="border border-orange-300 font-semibold px-3 py-1 text-lg rounded-md">
                  L1
                </span>
                <span className="border border-orange-300 font-semibold px-3 py-1 text-lg rounded-md">
                  L4
                </span>
                <span className="border border-orange-300 font-semibold px-3 py-1 text-lg rounded-md">
                  R1
                </span>
                <span className="border border-orange-300 font-semibold px-3 py-1 text-lg rounded-md">
                  R4
                </span>
              </div>
            </div>

            {/* Capability List */}
            <div className="mt-8 space-y-4">
              {/* Communication Capability */}
              <div className="flex justify-between">
                <div className="-mr-8">
                  <div className="w-8 h-8 bg-green-600 rounded"></div>
                </div>
                <div>
                  <p className="text-xl">Communication Capability</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">10.02%</p>
                </div>
              </div>

              {/* Visual Observation Capability */}
              <div className="flex justify-between items-center">
                <div className="mr-3">
                  <div className="w-8 h-8 bg-lime-500 rounded"></div>
                </div>
                <div>
                  <p className="text-xl">
                    Visual Observation & Comprehension Capability
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">10.02%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 border border-orange-300 rounded-xl p-6 w-[450px]">
            {/* Title & Buttons */}
            <div className="flex justify-between items-center">
              <div className="font-semibold text-2xl">Strategy</div>
              <div className="flex space-x-2">
                <span className="border border-orange-300 font-semibold px-3 py-1 text-lg rounded-md">
                  L2
                </span>
                <span className="border border-orange-300 font-semibold px-3 py-1 text-lg rounded-md">
                  L5
                </span>
                <span className="border border-orange-300 font-semibold px-3 py-1 text-lg rounded-md">
                  R5
                </span>
              </div>
            </div>

            {/* Capability List */}
            <div className="mt-8 space-y-4">
              {/* Communication Capability */}
              <div className="flex justify-between">
                <div className="">
                  <div className="w-8 h-8 bg-green-600 rounded"></div>
                </div>
                <div>
                  <p className="text-xl ml-3">
                    Analytical Capability Decisiveness
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">08.02%</p>
                </div>
              </div>

              {/* Visual Observation Capability */}
              <div className="flex justify-between items-center">
                <div className="mr-3">
                  <div className="w-8 h-8 bg-orange-600 rounded"></div>
                </div>
                <div>
                  <p className="text-xl">Spatial Calculations & Imagination</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">08.22%</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="mr-3">
                  <div className="w-8 h-8 bg-red-600 rounded"></div>
                </div>
                <div>
                  <p className="text-xl">
                    Attention to Fine Details & Asethetics
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">06.08%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* center */}
        <div>
        <img
                        src={img1}
                        alt="hello"
                        className="object-cover rounded-lg"
                      />
        </div>
        {/* right */}
        <div className="ml-10">
          <div className="border border-orange-300 rounded-xl p-6 w-[450px]">
            {/* Title & Buttons */}
            <div className="flex justify-between items-center">
              <div className="font-semibold text-2xl">Physical</div>
              <div className="flex space-x-2">
                <span className="border border-orange-300 font-semibold px-3 py-1 text-lg rounded-md">
                  R2
                </span>
              </div>
            </div>

            {/* Capability List */}
            <div className="mt-8 space-y-4">
              {/* Communication Capability */}
              <div className="flex justify-between">
                <div className="-mr-8">
                  <div className="w-8 h-8 bg-green-600 rounded"></div>
                </div>
                <div>
                  <p className="text-xl">
                    Gross Motor Skills &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">10.02%</p>
                </div>
              </div>

              {/* Visual Observation Capability */}
              <div className="flex justify-between items-center">
                <div className="mr-3">
                  <div className="w-8 h-8 bg-lime-500 rounded"></div>
                </div>
                <div>
                  <p className="text-xl">
                    Fine Motor Skills
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">08.08%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 border border-orange-300 rounded-xl p-6 w-[450px]">
            {/* Title & Buttons */}
            <div className="flex justify-between items-center">
              <div className="font-semibold text-2xl">Mental</div>
              <div className="flex space-x-2">
                <span className="border border-orange-300 font-semibold px-3 py-1 text-lg rounded-md">
                  L3
                </span>
                <span className="border border-orange-300 font-semibold px-3 py-1 text-lg rounded-md">
                  R3
                </span>
              </div>
            </div>

            {/* Capability List */}
            <div className="mt-8 space-y-4">
              {/* Communication Capability */}
              <div className="flex justify-between">
                <div className="">
                  <div className="w-8 h-8 bg-green-600 rounded"></div>
                </div>
                <div>
                  <p className="text-xl ml-3">
                    Self Confidence & Leadership Capability
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">11.05%</p>
                </div>
              </div>

              {/* Visual Observation Capability */}
              <div className="flex justify-between items-center">
                <div className="mr-3">
                  <div className="w-8 h-8 bg-lime-500 rounded"></div>
                </div>
                <div>
                  <p className="text-xl">
                    Team Connectivity & &ensp; &emsp; Visionary
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">09.20%</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="mr-3">
                  <div className="w-8 h-8 bg-red-600 rounded"></div>
                </div>
                <div>
                  <p className="text-xl">
                    Emotional Quotient
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">05.20%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-200 p-4 rounded-xl mt-6">
      <div className="flex w-full  gap-x-4 p-4">
        {/* First Child Div - 35% Width */}
        <div className="w-[35%] p-4 border-2 bg-white border-gray-200 rounded-xl">
          <h1 className="text-2xl font-semibold pb-6">Learning Style</h1>
          <div className="grid grid-cols-2">
            <div className="border-r-2 pr-4">
              <h1 className="text-2xl font-semibold text-blue-600">Primary</h1>
              <div className="flex w-full">
                <div className="text-lg font-semibold w-[70%] mb-3">
                  <h1>Motive</h1>
                </div>
                <div className="text-lg font-semibold w-[30%] mb-3">
                  <h1>22%</h1>
                </div>
              </div>
              <div className="flex w-full">
                <div className="text-lg font-semibold w-[70%]">
                  <h1>Concept</h1>
                </div>
                <div className="text-lg font-semibold w-[30%]">
                  <h1>18%</h1>
                </div>
              </div>
            </div>
            <div className="ml-6">
              <h1 className="text-2xl font-semibold text-blue-600">
                Secondary
              </h1>
              <div className="flex w-full">
                <div className="text-lg font-semibold w-[70%] mb-3">
                  <h1>Kinesthetic</h1>
                </div>
                <div className="text-lg font-semibold w-[30%] mb-3">
                  <h1>25%</h1>
                </div>
              </div>
              <div className="flex w-full">
                <div className="text-lg font-semibold w-[70%] mb-3">
                  <h1>Visual</h1>
                </div>
                <div className="text-lg font-semibold w-[30%] mb-3">
                  <h1>18%</h1>
                </div>
              </div>
              <div className="flex w-full">
                <div className="text-lg font-semibold w-[70%] mb-3">
                  <h1>Auditory</h1>
                </div>
                <div className="text-lg font-semibold w-[30%] mb-3">
                  <h1>20%</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Child Div - 30% Width */}
        <div className="w-[25%] bg-white p-4 border-2 border-gray-200 rounded-xl">
          <h1 className="text-2xl font-semibold pb-3">Personality Style</h1>
          <div className="mx-2 bg-blue-200 text-center flex items-center justify-center h-56 rounded-md">
            <h1 className="text-3xl text-blue-600 font-semibold">Emotional</h1>
          </div>
        </div>

        {/* Third Child Div - 35% Width */}
        <div className="w-[45%] p-4 border-2 border-gray-200 bg-white rounded-xl">
          <h1 className="text-2xl mx-6 font-semibold pb-6">Finger Identity</h1>
          <div className="grid grid-cols-2">
            {/* left */}
            <div className="mx-6">
              <div className="flex items-center mb-1">
                <div className="w-[15%] border-[3px] border-orange-300 text-xl font-bold text-center p-1 rounded ">
                  <h1 className="">L1</h1>
                </div>
                <div className="pl-4 w-[80%] text-lg">
                  <h1>Left Thumb</h1>
                </div>
              </div>

              <div className="flex items-center mb-1">
                <div className="w-[15%] border-[3px] border-orange-300 text-xl font-bold text-center p-1 rounded ">
                  <h1 className="">L2</h1>
                </div>
                <div className="pl-4 w-[80%] text-lg">
                  <h1>Left Index Finger</h1>
                </div>
              </div>

              <div className="flex items-center mb-1">
                <div className="w-[15%] border-[3px] border-orange-300 text-xl font-bold text-center p-1 rounded ">
                  <h1 className="">L3</h1>
                </div>
                <div className="pl-4 w-[80%] text-lg">
                  <h1>Left Middle Finger</h1>
                </div>
              </div>

              <div className="flex items-center mb-1">
                <div className="w-[15%] border-[3px] border-orange-300 text-xl font-bold text-center p-1 rounded ">
                  <h1 className="">L4</h1>
                </div>
                <div className="pl-4 w-[80%] text-lg">
                  <h1>left Right Finger</h1>
                </div>
              </div>

              <div className="flex items-center mb-1">
                <div className="w-[15%] border-[3px] border-orange-300 text-xl font-bold text-center p-1 rounded ">
                  <h1 className="">L5</h1>
                </div>
                <div className="pl-4 w-[80%] text-lg">
                  <h1>Left Little Finger</h1>
                </div>
              </div>
            </div>
            {/* right */}
            <div className=" mx-6">
              <div className="flex items-center mb-1">
                <div className="w-[15%] border-[3px] border-orange-300 text-xl font-bold text-center p-1 rounded ">
                  <h1 className="">R1</h1>
                </div>
                <div className="pl-4 w-[80%] text-lg">
                  <h1>Right Thumb</h1>
                </div>
              </div>

              <div className="flex items-center mb-1">
                <div className="w-[15%] border-[3px] border-orange-300 text-xl font-bold text-center p-1 rounded ">
                  <h1 className="">R2</h1>
                </div>
                <div className="pl-4 w-[80%] text-lg">
                  <h1>Right Index Finger</h1>
                </div>
              </div>

              <div className="flex items-center mb-1">
                <div className="w-[15%] border-[3px] border-orange-300 text-xl font-bold text-center p-1 rounded ">
                  <h1 className="">R3</h1>
                </div>
                <div className="pl-4 w-[80%] text-lg">
                  <h1>Right Middle Finger</h1>
                </div>
              </div>

              <div className="flex items-center mb-1">
                <div className="w-[15%] border-[3px] border-orange-300 text-xl font-bold text-center p-1 rounded ">
                  <h1 className="">R4</h1>
                </div>
                <div className="pl-4 w-[80%] text-lg">
                  <h1>Right Ring Finger</h1>
                </div>
              </div>

              <div className="flex items-center mb-1">
                <div className="w-[15%] border-[3px] border-orange-300 text-xl font-bold text-center p-1 rounded ">
                  <h1 className="">R5</h1>
                </div>
                <div className="pl-4 w-[80%] text-lg">
                  <h1>Right Little Finger</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis commodi exercitationem modi nam doloribus eaque magni temporibus id hic aut laborum asperiores, cum suscipit dolorem dolorum pariatur quisquam illo sit praesentium. Ex cum, recusandae deserunt sunt optio voluptatibus architecto assumenda aliquid, doloribus tempora quisquam iste dolorum excepturi, quae distinctio perspiciatis.</h1>
    </div>
    </div>
  );
};

export default ComponentOne;
