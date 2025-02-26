import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Interpersonal Intelligence", value: 80, color: "#008000" }, // Green
  { name: "Linguistic Intelligence", value: 70, color: "#FFA500" }, // Orange
  { name: "Intrapersonal Intelligence", value: 75, color: "#FFA500" }, // Orange
  { name: "Naturalist Intelligence", value: 65, color: "#FFA500" }, // Orange
  { name: "Logical-Mathematical Intelligence", value: 72, color: "#FFA500" }, // Orange
  { name: "Musical Intelligence", value: 50, color: "#FF0000" }, // Red
  { name: "Spatial Intelligence", value: 90, color: "#008000" }, // Green
  { name: "Bodily-Kinesthetic Intelligence", value: 80, color: "#008000" }, // Green
];
const careersData = [
  { name: "Science", value: 46, color: "#2F769E" },
  { name: "Commerce", value: 30, color: "#69A4C7" },
  { name: "Arts", value: 16, color: "#9ACBE8" },
  { name: "Others", value: 8, color: "#C4E7FB" },
];

const industryData = [
  { name: "Marketing", value: 38, color: "#2F769E" },
  { name: "Management", value: 22, color: "#69A4C7" },
  { name: "Engineering & IT", value: 20, color: "#9ACBE8" },
  { name: "Design", value: 12, color: "#C4E7FB" },
  { name: "Other", value: 8, color: "#DFDFDF" },
];

const ComponentThree = () => {
  const charts = [
    {
      title: "Careers",
      description:
        "Discover careers that align with your natural talents and intelligence.",
      data: careersData,
      total: 20,
    },
    {
      title: "Industry",
      description:
        "Discover industries that align with your natural talents and intelligence.",
      data: industryData,
      total: 120,
    },
  ];

  return (
    <div className="my-[140px]">
      <h1 className="text-3xl font-bold mb-8">
        Classification 8 Multiple Intelligences
      </h1>
      <div className="grid grid-cols-2 gap-10">
        {/* Left Div */}
        <div className="bg-white rounded-lg w-full border">
          <div className="flex justify-center items-center space-x-4 my-6">
            {/* Strength */}
            <div className="flex items-center space-x-3">
              <span className="w-4 h-4 bg-green-600 rounded-full"></span>
              <span className="text-sm font-semibold">Strength - 3</span>
            </div>

            {/* Average */}
            <div className="flex items-center space-x-1">
              <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
              <span className="text-sm font-semibold">Average - 3</span>
            </div>

            {/* Weakness */}
            <div className="flex items-center space-x-1">
              <span className="w-4 h-4 bg-red-600 rounded-full"></span>
              <span className="text-sm font-semibold">Weakness - 2</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-0">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 border"
              >
                <p className="text-sm font-semibold text-center py-4">
                  {item.name}
                </p>
                <div className="flex items-center space-x-2">
                  <PieChart width={80} height={80} className="">
                    <Pie
                      data={[
                        { value: item.value },
                        { value: 100 - item.value },
                      ]}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      innerRadius={18}
                      outerRadius={32}
                      startAngle={90}
                      endAngle={450}
                    >
                      <Cell fill={item.color} />
                      <Cell fill="#e5e7eb" />{" "}
                      {/* Gray for the remaining part */}
                    </Pie>
                  </PieChart>
                  <span
                    className="text-xl font-bold text-[#222222]"
                    // style={{ color: item.color }}
                  >
                    {item.value}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right Div */}
        <div className="flex flex-col gap-6 items-center">
          {charts.map(({ title, description, data, total }, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 shadow-lg bg-white w-[570px] h-[370px]"
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-500 text-sm">{description}</p>

              <div className="flex items-center justify-between mt-4">
                <div className="w-44 h-44 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        labelLine={false}
                        label={({
                          cx,
                          cy,
                          midAngle,
                          innerRadius,
                          outerRadius,
                          percent,
                        }) => {
                          const radius =
                            innerRadius + (outerRadius - innerRadius) * 0.5;
                          const x =
                            cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                          const y =
                            cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                          return (
                            <text
                              x={x}
                              y={y}
                              fill="white"
                              textAnchor="middle"
                              dominantBaseline="middle"
                              className="text-xs font-bold"
                            >
                              {`${(percent * 100).toFixed(0)}%`}
                            </text>
                          );
                        }}
                      >
                        {data.map((entry, i) => (
                          <Cell
                            key={`cell-${i}`}
                            fill={entry.color}
                            stroke="none"
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-lg font-semibold">Total</span>
                      <div className="text-2xl font-bold">{total}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  {data.map((entry, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 border-b-2 pb-[2px] border-[#dedede]"
                    >
                      <span
                        className="w-4 h-4 rounded-sm"
                        style={{ backgroundColor: entry.color }}
                      ></span>
                      <span className="pr-24 text-[#222222] text-sm font-medium">
                        {entry.name}
                      </span>
                      <span className="text-[#222222] ml-auto font-medium pr-3">
                        {entry.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button className="py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentThree;
