import fingerprint1 from "../assets/me.webp";
import fingerprint2 from "../assets/me.webp";
import fingerprint3 from "../assets/me.webp";
import fingerprint4 from "../assets/me.webp";

const fingerprints = [
  { name: "Ulnar", src: fingerprint1 },
  { name: "Radial", src: fingerprint2 },
  { name: "Whorl", src: fingerprint3 },
  { name: "Arch", src: fingerprint4 },
];

const data = [
  {
    name: "Logical & Language Ability",
    value: "18.60",
    color: "bg-red-500",
    label: "L2",
  },
  {
    name: "Spatial & Creativity",
    value: "23.45",
    color: "bg-gray-500",
    label: "R2",
  },
  {
    name: "Communication Planning & Execution",
    value: "24.20",
    color: "bg-green-500",
    label: "L1",
  },
  {
    name: "Leadership Creation & Vision",
    value: "23.45",
    color: "bg-green-500",
    label: "R1",
  },
  {
    name: "Fine Motor Skill",
    value: "23.50",
    color: "bg-green-500",
    label: "L3",
  },
  {
    name: "Gross Motor Skill",
    value: "17.80",
    color: "bg-red-500",
    label: "R3",
  },
  {
    name: "Visual & Observation Comprehension",
    value: "20.50",
    color: "bg-orange-500",
    label: "L5",
  },
  {
    name: "Visual & Image Appreciation",
    value: "21.20",
    color: "bg-orange-500",
    label: "R5",
  },
  {
    name: "Auditory & Language Comprehension",
    value: "22.05",
    color: "bg-green-500",
    label: "L4",
  },
  {
    name: "Auditory & Music Appreciation",
    value: "21.38",
    color: "bg-orange-500",
    label: "R4",
  },
];

const brainFunctions = [
  { name: "Thought Function", value: "42.05" },
  { name: "Kinesthetic Function", value: "41.30" },
  { name: "Mental Function", value: "47.65" },
  { name: "Visual Function", value: "41.70" },
  { name: "Auditory Function", value: "43.43" },
];

const ComponentTwo = () => {
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

      <div className="flex items-center justify-center my-8">
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

      {/* Main Div */}

      {/* <div className="grid grid-cols-3 gap-4">F
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div> */}

      {/*  */}

      <div className="bg-blue-200 rounded-xl">
        {/* <div></div> */}
        <div className="grid grid-cols-2 gap-14 px-8 pt-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center border-b pb-2">
              <h1 className="text-lg font-semibold">
                TRFC{" "}
                <span className="text-blue-600 text-xl font-bold">122.76</span>
              </h1>
              <h2 className="text-gray-600">
                Benchmark <span className="text-blue-600 font-bold">12.07</span>{" "}
                (TRFC/10)
              </h2>
            </div>

            {/* TRFC Categories */}
            <div className="mt-4 space-y-2">
              {/* Weakness */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <p className="text-gray-700 font-semibold text-lg">
                    Weakness
                  </p>
                </div>
                <p className="text-red-500 text-base">{"< 9.6"}</p>
              </div>

              {/* Below Average */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                  <p className="text-gray-700 font-semibold text-lg">
                    Below Average
                  </p>
                </div>
                <p className="text-blue-600 text-base">9.6 To 12.6</p>
              </div>

              {/* Above Average */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-green-300 rounded-full"></span>
                  <p className="text-gray-700 font-semibold text-lg">
                    Above Average
                  </p>
                </div>
                <p className="text-blue-600 text-base">12.6 To 15.6</p>
              </div>

              {/* Strength */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                  <p className="text-gray-700 font-semibold text-lg">
                    Strength
                  </p>
                </div>
                <p className="text-green-600 text-base">{"> 15.6"}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4">Finger Identity</h1>
            <div className="grid grid-cols-2 gap-4">
              {/* Left Side */}
              <div className="space-y-2">
                <div className="border px-4 py-2 rounded-md font-bold">
                  L1 - Left Pre-Frontal Lobe
                </div>
                <div className="border px-4 py-2 rounded-md font-bold">
                  L2 - Left Post-Frontal Lobe
                </div>
                <div className="border px-4 py-2 rounded-md font-bold">
                  L3 - Left Parietal Lobe
                </div>
                <div className="border px-4 py-2 rounded-md font-bold">
                  L4 - Left Temporal Lobe
                </div>
                <div className="border px-4 py-2 rounded-md font-bold">
                  L5 - Left Occipital Lobe
                </div>
              </div>

              {/* Right Side */}
              <div className="space-y-2">
                <div className="border px-4 py-2 rounded-md font-bold">
                  R1 - Right Pre-Frontal Lobe
                </div>
                <div className="border px-4 py-2 rounded-md font-bold">
                  R2 - Right Post-Frontal Lobe
                </div>
                <div className="border px-4 py-2 rounded-md font-bold">
                  R3 - Right Parietal Lobe
                </div>
                <div className="border px-4 py-2 rounded-md font-bold">
                  R4 - Right Temporal Lobe
                </div>
                <div className="border px-4 py-2 rounded-md font-bold">
                  R5 - Right Occipital Lobe
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div></div> */}

        {/* <div></div> */}

        <div className=" mt-10 mx-8 rounded-lg overflow-hidden">
          <div className="bg-white ">
            {/* Header Row */}
            <div className="grid grid-cols-6 gap-4 border border-gray-300 rounded-t-lg font-semibold text-gray-700">
              <div className="text-left border-r border-gray-300 p-6">
                PART OF THE BRAIN
              </div>
              <div className="text-center border-r border-gray-300 p-6">
                Pre-frontal
              </div>
              <div className="text-center border-r border-gray-300 p-6">
                Post-frontal
              </div>
              <div className="text-center border-r border-gray-300 p-6">
                Parietal
              </div>
              <div className="text-center border-r border-gray-300 p-6">
                Temporal
              </div>
              <div className="text-center p-6">Occipital</div>
            </div>

            {/* Data Row */}
            <div className="grid grid-cols-6 gap-4 font-semibold border-b border-gray-300 border-l border-r rounded-b-lg">
              <div className="text-left border-r border-gray-300 p-6">
                DISTRIBUTION
              </div>
              <div className="text-center text-blue-600 border-r border-gray-300 p-6">
                21.95%
              </div>
              <div className="text-center text-blue-600 border-r border-gray-300 p-6">
                19.02%
              </div>
              <div className="text-center text-blue-600 border-r border-gray-300 p-6">
                26.39%
              </div>
              <div className="text-center text-blue-600 border-r border-gray-300 p-6">
                17.12%
              </div>
              <div className="text-center text-blue-600">15.88%</div>
            </div>
          </div>
        </div>

        {/* <div></div> */}
        <div className="p-4  mt-6">
          <div className="flex w-full  gap-x-4 p-4">
            {/* First Child Div - 35% Width */}
            <div className="w-[35%] p-4 border-2 bg-white border-gray-200 rounded-xl">
              <h1 className="text-2xl font-semibold pb-6">Learning Style</h1>
              <div className="grid grid-cols-2">
                <div className="border-r-2 pr-4">
                  <h1 className="text-2xl font-semibold text-blue-600">
                    Primary
                  </h1>
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
                <h1 className="text-3xl text-blue-600 font-semibold">
                  Emotional
                </h1>
              </div>
            </div>

            {/* Third Child Div - 35% Width */}
            <div className="w-[45%] rounded-lg">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-7">
                  Fingerprints Categories
                </h2>
                <div className="grid grid-cols-4 gap-4">
                  {fingerprints.map((fingerprint, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <img
                        src={fingerprint.src}
                        alt={fingerprint.name}
                        className="w-40 h-44 object-cover rounded-lg"
                      />
                      <p className="mt-2 font-medium">{fingerprint.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentTwo;
