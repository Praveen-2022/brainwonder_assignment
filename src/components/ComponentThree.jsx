import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const intelligenceData = [
  { name: "Interpersonal Intelligence", value: 80, color: "bg-green-500" },
  { name: "Linguistic Intelligence", value: 70, color: "bg-orange-500" },
  { name: "Intrapersonal Intelligence", value: 75, color: "bg-orange-500" },
  { name: "Naturalist Intelligence", value: 65, color: "bg-red-500" },
  {
    name: "Logical-Mathematical Intelligence",
    value: 72,
    color: "bg-orange-500",
  },
  { name: "Musical Intelligence", value: 50, color: "bg-red-500" },
  { name: "Spatial Intelligence", value: 90, color: "bg-green-500" },
  { name: "Bodily-Kinesthetic Intelligence", value: 80, color: "bg-green-500" },
];
const careersData = [
  { name: "Science", value: 46, color: "#1E3A8A" },
  { name: "Commerce", value: 30, color: "#60A5FA" },
  { name: "Arts", value: 16, color: "#93C5FD" },
  { name: "Others", value: 8, color: "#E5E7EB" },
];

const industryData = [
  { name: "Marketing", value: 38, color: "#1E3A8A" },
  { name: "Management", value: 22, color: "#A8A8A8" },
  { name: "Engineering & IT", value: 20, color: "#60A5FA" },
  { name: "Design", value: 12, color: "#93C5FD" },
  { name: "Other", value: 8, color: "#E5E7EB" },
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
    <div className="mt-16">
      <h1 className="text-3xl font-bold mb-8">
        Classification 8 Multiple Intelligences
      </h1>
      <div className="grid grid-cols-2">
        {/*  */}
        <div className="grid grid-cols-2 gap-4">
          {intelligenceData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center border p-4 rounded-lg shadow-sm"
            >
              <div className="relative w-16 h-16">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <circle
                    className="text-gray-200 stroke-current"
                    strokeWidth="3"
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                  />
                  <circle
                    className="text-blue-500 stroke-current"
                    strokeWidth="4"
                    strokeDasharray={`${item.value}, 100`}
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                  />
                </svg>
              </div>
              <p className="text-center text-xl font-semibold mt-2">
                {item.name}
              </p>
              <span
                className={`px-2 py-1 mt-1 text-white text-lg font-bold rounded ${item.color}`}
              >
                {item.value}%
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 items-center">
          {charts.map(({ title, description, data, total }, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 shadow-lg bg-white max-w-lg"
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
                      className="flex items-center gap-2 border-b-2 pb-[2px] border-gray-400"
                    >
                      <span
                        className="w-4 h-4 rounded-sm"
                        style={{ backgroundColor: entry.color }}
                      ></span>
                      <span className="text-lg font-medium">{entry.name}</span>
                      <span className="ml-auto font-bold">{entry.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full mt-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
                VIEW DETAILS
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentThree;
