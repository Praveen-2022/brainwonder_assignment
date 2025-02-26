const jsonData = [
  {
    Name: "Interpersonal Intelligence",
    "Specific Performance": [
      "Refers to interpersonal communication and management abilities. Likes to interact with people and cares about others.",
      "Often influences others and opinions, to the extent of convincing others to accept one’s opinions.",
      "Likes to interact in a crowd, sociable, gets along with people and maintains a good relationship with others.",
    ],
    Careers: [
      "Leader",
      "Entrepreneur",
      "Direct marketing",
      "Insurance",
      "Politician",
      "Public relations",
    ],
    "Training Methods": [
      "Join leadership camp",
      "Take part in societies",
      "Seize opportunities to be in a committee/management team",
      "Read autobiographies of successful people",
    ],
  },
  {
    Name: "Planning Judgment",
    "Specific Performance": [
      "Draws up plans before doing things. Weighs the effectiveness of the work. Strong execution abilities.",
      "Flexible, able to handle the unexpected quickly and resourcefully. Finds a way to convert resistance to assistance and seeks out all kinds of solutions.",
      "Keeps to one's promises, will find a way to accomplish what has been promised.",
    ],
    Careers: [
      "Manager",
      "Director",
      "Secretary",
      "Supervisor",
      "Special assistant",
    ],
    "Training Methods": [
      "Event management",
      "Group activities",
      "Planning",
      "Reviews and Discussions",
    ],
  },
  {
    Name: "Intrapersonal Intelligence",
    "Specific Performance": [
      "Has the ability to self-reflect. Focuses on the value of life on a personal basis.",
      "Has strong willpower. Independent. Has high self-esteem.",
      "Learns from and gets inspired by successful or failed experiences in life.",
    ],
    Careers: [
      "Religious leader",
      "Psychiatrist",
      "Counselor",
      "Expert or Scholar",
      "Pastor",
      "Analyst",
    ],
    "Training Methods": [
      "Psychology",
      "Reflect on How to Self-Reflect",
      "Meditation",
      "Religious activities",
      "Read books on philosophy and classics",
    ],
  },
  {
    Name: "Creation & Imagination",
    "Specific Performance": [
      "Exceptional ability to draw and plan a future blueprint. Able to outline goals and visions for oneself or groups as well as motivates oneself to work towards one goal then another continually.",
      "Have an adventurous spirit, willing to take risks, accepts challenges courageously, strong willpower.",
      "Often motivates oneself to learn and grow continually.",
    ],
    Careers: [
      "Inventors",
      "Scriptwriter",
      "Novelist",
      "Author",
      "Comic artist",
    ],
    "Training Methods": [
      "Writing essays",
      "Creativity training",
      "Storytelling",
      "Keeping a diary",
      "Drawing",
    ],
  },
  {
    Name: "Logical Reasoning",
    "Specific Performance": [
      "Able to remember the contents of what was learnt through effective comprehension, analysis and summary.",
      "Even for language and arts subjects, uses understanding, classification and analysis to learn.",
      "Accustomed to thinking in an abstract manner. Likes to use computers and ask questions that require thinking.",
      "Likes reasoning games and films, novels and other games that require using the brain to think. Good with numbers.",
    ],
    Careers: [
      "Mathematician",
      "Statistician",
      "Accountant",
      "Economist",
      "Auditor",
    ],
    "Training Methods": [
      "Mathematical calculations",
      "Number games",
      "Science club",
      "Major in business",
      "Memory training",
    ],
  },
  {
    Name: "Spatial & Mental Image",
    "Specific Performance": [
      "Have a good sense of direction. Remember and recognize the paths that one has travelled before. Able to recognize roads extremely well.",
      "Very clear and aware of the displays and settings in the surroundings, and has a clear image of them in one’s mind.",
      "When drawing, angle and perspective is different from other children of the same age. For instance, draw the side view of a swing or the facial features of an ant.",
      "Has a strong grasp and concept of three-dimension. Able to have a good grasp and feel of visual space. Likes to use solid or three-dimensional objects to assist in learning.",
    ],
    Careers: [
      "Designer",
      "Space planner",
      "Architect",
      "Engineer",
      "Cartographer",
    ],
    "Training Methods": [
      "Combination and formation of building blocks",
      "Three-dimensional combinations",
      "Creative design training",
      "Tangrams",
      "Puzzles",
    ],
  },
  {
    Name: "Language Expression",
    "Specific Performance": [
      "Able to describe clearly and systematically when describing an event or expressing an opinion. Able to distill the information and even cite relevant examples so that others can understand even by listening only once.",
      "Good at persuading people using language or written words. Likes to play language games with sounds such as word chain.",
      "Good at reciting poems or verses from memory. Probably a great story teller.",
    ],
    Careers: [
      "Lawyer",
      "Orator",
      "Business expert",
      "Journalist",
      "Broadcaster",
      "Presenter",
      "Emcee/Master of Ceremonies",
    ],
    "Training Methods": [
      "Oratorical class",
      "Language study",
      "Speech training",
      "Pronunciation class",
      "Storytelling",
      "Debate",
    ],
  },
  {
    Name: "Kinesthetic Intelligence",
    "Specific Performance": [
      "Good at using body language i.e. body and movements to express thoughts and feelings.",
      "Prefers to learn through actual practice, success experiments and role play.",
      "Likes to learn and remember through physical touch, whether it is the body or real and tangible objects.",
      "Likes to use both hands to create or modify things, including special physical skills, such as balance, agility, power, flexibility.",
    ],
    Careers: [
      "Actor/Actress",
      "Athlete",
      "Mechanic",
      "Martial artist",
      "Arts practitioner",
      "Surgeon",
      "Dancer",
    ],
    "Training Methods": [
      "Body movements",
      "Crafts",
      "Sports",
      "Performances",
      "Choirs",
      "Bands/Orchestras",
      "Dancing",
    ],
  },
];

const ComponentFive = () => {
  return (
    <div className="my-24">
      {jsonData.map((item, index) => (
        <div key={index} className="border border-[#DEDEDE] rounded-2xl my-5">
          {/* Header */}
          <div className="p-4 bg-sky-100 rounded-t-2xl">
            <h1 className="font-semibold text-[18px] text-[#222222] capitalize">
              {item.Name}
            </h1>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-3">
            {/* Specific Performance */}
            <div className="border-r-2 px-6 my-6 border-[#DEDEDE]">
              <h1 className="font-bold text-sky-600">Specific Performance</h1>
              {item["Specific Performance"].map((performance, i) => (
                <p key={i}>
                  {i + 1}. {performance}
                </p>
              ))}
            </div>

            {/* Careers */}
            <div className="border-r-2 border-[#DEDEDE] px-6 my-4">
              <h1 className="font-bold text-sky-600">Careers</h1>
              {item.Careers.map((career, i) => (
                <p key={i}>
                  {i + 1}. {career}
                </p>
              ))}
            </div>

            {/* Training Methods */}
            <div className="px-6 my-4">
              <h1 className="font-bold text-sky-600">Training Methods</h1>
              {item["Training Methods"].map((method, i) => (
                <p key={i}>
                  {i + 1}. {method}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComponentFive;
