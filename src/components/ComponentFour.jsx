import Sun from "../assets/sun.svg";
import Star from "../assets/star.svg";
import Moon from "../assets/moon.png";
const ComponentFour = () => {
  const sections = [
    {
      title: "Main (primary) learning style - motive (goal-oriented type)",
      text: "An all-rounded learner, has leadership and management qualities. Must understand the reason to learn before learning, then willing to learn, not good to be forced to learn. Strong willpower, creative, the ability to train others, plan and make judgments is high. Motive-oriented, hence it is good to set up goals and move forward towards the desired direction. Likes to share one's learnings, likes interpersonal activities at heart.",
      borderColor: "border-gray-400",
      bgColor: "bg-white",
      textColor: "text-blue-600",
    },
    {
      title: "Supporting (Secondary) learning style - visual (reading type)",
      text: "Likes to learn through visual learning, good at remembering through pictures/images. Will be helped through the use of more visual teaching aids. Learning results will be enhanced. Good focus and concentration, likes to observe, does not easily forget what one has seen. Good communication through images, pictures or written words. Use highlighter pens or color codes to categorize notes in the notebook or other information. Observation, image appreciation and differentiation etc. visual related professional abilities can be trained and developed well.",
      borderColor: "border-gray-400",
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      title: "Main (primary) character : Self-Conscious",
      text: "Likes things done the way one sees fit, uses self-understanding as a guide, has subjective viewpoint. Ambitious and goal-oriented. Stubborn, express through reasoning, open to persuasion but not to coercion. Tends to learn independently, relies on oneself. Persistent, creative and innovative.",
      borderColor: "border-gray-400",
      bgColor: "bg-white",
      textColor: "text-blue-600",
    },
    {
      title: "Subconscious character : Selective insistence",
      text: "Has a stubborn persistence in the subconscious character. Discover and understand on one's own. Only believe in reasoning and evidence. Able to set goals and self-motivated. Loyal to friends, gets bogged down, gets into trouble easily because of friends.",
      borderColor: "border-gray-400",
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      title: "Attunement & guidance recommendations",
      text: "Before speaking or doing, put yourself in others' shoes to consider the problem/situation. Listen more to others' viewpoints and be more tactful when communicating with others. Develop your endurance, persistence and adaptability to the environment. Learn from failure, develop the spirit/habit of becoming more courageous with each setback that one faces.",
      borderColor: "border-gray-400",
      bgColor: "bg-white",
      textColor: "text-blue-600",
    },
    {
      title: "Parenting method : Self-conscious",
      text: "Take note of good values and have patience. Refrain from being overly insistent on own views and thinking too much for the child. Must understand the child's character and learning style as early as possible. Take note of the child's routine, learning styles during early childhood. During childhood, pay attention to the child's learning and apply suitable teaching model. Avoid being egotistic, not to hinder the child's true understandings, use more objective methods to educate. If the child's learning is a bit slow, the child may lack learning experience and deprived of a chance to display their learning results.",
      borderColor: "border-gray-400",
      bgColor: "bg-white",
      textColor: "text-black",
    },
  ];

  const sectionsData = [
    {
      title:
        "Predominant Strength | Location identification, operational combination",
      characteristics:
        "Likes to place puzzles and figure out mazes. Also likes games such as building blocks.Able to extract more information from pictures when reading.Values visual feel and experience. Places importance on first impression of things.Has great interest in the world of beauty. Often attracted by beautiful pictures.Likes to relax through appreciating art and pictures or strolling through art galleries.Has a strong ability to comprehend charts and maps.",
      recommendations:
        "Take/select educational courses that are related to nature.See more natural landscapes and phenomena, such as clouds, trees, mountains, and other scenes.Carry a notebook around to record your observations and discoveries.Share more of your knowledge of the natural world with children and friends.Collect plants, ore, minerals, insect specimens and then sort and classify them out.",
      bgColor: "bg-green-200",
    },
    {
      title: "Predominant Strength | Planning, self-awareness",
      characteristics:
        "Likes to feel and have contact with things through listening.Likes to have the accompaniment of music.Revels and gets carried away by music.Has a good sense of pitch, tune, rhythm, and melody.Relaxes through music, has a special ability to appreciate music.                Able to express one's thoughts and emotions through music.",
      recommendations:
        "Combine visual and auditory learning abilities.          Listen more to natural melodies or rhythms (such as insects, birds, wind, rain, etc.).Choose a musical instrument that one likes.Develop and cultivate potential strength in music, listen to more concerts.Train and cultivate concentration and patience.",
      bgColor: "bg-red-200",
    },
    {
      title:
        "To be strengthened | Sound Experience & Appreciation Visual Feel, Image appreciation",
      characteristics:
        "Needs to remember learning contents by heart in order to remember.Likes to do specific and concrete thinking, has a greater sensitivity towards emotions.Tends to be sentimental and emotional when describing things.Poor at inductive analysis and the understanding of numbers.Weaker in creativity, association, and language reasoning abilities.Poor at language organization and structure of expression (usually does not carry the main point across).",
      recommendations:
        "Cultivate and build the ability to analyze, classify, and induce.Establish the concept of sequence, sorting, and combination Cultivate mathematical, logic, and reasoning abilities Cultivate the ability to do abstract thinking.Increase oral ability to express better.",
      bgColor: "bg-blue-200",
    },
    {
      title:
        "To be strengthened | Sound Experience & Appreciation Visual Feel, Image appreciation",
      characteristics:
        "Dislikes physical contact.Prefers more quiet and static activities.Possesses average ability in the appreciation of arts.Likes to be alone.",
      recommendations:
        "Increase ability to distinguish using touch.Ability to control gestures and poses.Body balance ability.Vestibular balance ability.",
      bgColor: "bg-yellow-200",
    },
  ];

  const intelligenceData = [
    {
      category: "Predominant and Advantageous Intelligences",
      icon: Sun,
      items: [
        "Interpersonal Intelligence",
        "Intrapersonal Intelligence",
        "Logical Reasoning",
        "Language Expression",
        "Operation Intelligence",
        "Language Internalization",
      ],
    },
    {
      category: "Intelligences with Potential for Further Moulding",
      icon: Moon,
      items: [
        "Planning & Judgement",
        "Spatial & Mental Image",
        "Artistic Intelligence",
        "Observation Intelligence",
        "Image Appreciation",
        "Concentration Intelligence",
        "EQ Imagination",
      ],
    },
    {
      category: "Intelligences to be Strengthened",
      icon: Star,
      items: ["Creation & Imagination", "Kinesthetic Intelligence", "Music Appreciation"],
    },
  ];

  const categories = [
    {
      title: "Personality Analysis",
      left: [
        "Stronger ability in management.",
        "Clear thinking and not bound by traditions, able to integrate own opinions and understanding.",
        "Know own needs and directions, self-disciplined.",
        "Loyal to friends, easily bogged down and may get implicated by friends.",
        "Values spiritual growth.",
      ],
      right: [
        "Loyal to friends, easily get bogged down or may get implicated by friends.",
        "Takes initiative, sets goals often, and is self-motivated.",
        "Subjective, ego-centric, and individualistic.",
        "With a strong motive, will go all out, does not give up easily.",
      ],
    },
    {
      title: "Personality Traits & Types",
      left: [
        "Leadership: Good in planning and diagnosis, tends to be subjective.",
        "Possesses management abilities including decision making and strategy implementation.",
        "Belongs to the personality traits of leading and planning.",
        "Believes more in reasoning and evidence.",
      ],
      right: [
        "Proactive: Has a proactive personality and is ambitious.",
        "Able to set own goals, self-motivated.",
        "Has the personality trait to pioneer and start new things/ventures.",
        "Seeing is believing.",
      ],
    },
  ];

  return (
    <>
      <div>
        <div className="my-14">
          <h1 className="text-3xl font-semibold mb-6">
            Strength Indicator of 16 Innate Multiple Intelligences
          </h1>

          {/* Legend */}
          <div className="flex justify-start gap-8 mb-8">
            {intelligenceData.map((category, index) => (
              <div key={index} className="flex items-center space-x-1 py-3">
                <img
                  src={category.icon}
                  alt={category.category}
                  className="w-10 h-10"
                />
                <span className="text-base font-semibold text-blue-500 px-6">
                  {category.category}
                </span>
              </div>
            ))}
          </div>

          {/* Intelligence Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {intelligenceData.map((category, index) =>
              category.items.map((item, idx) => (
                <div
                  key={`${index}-${idx}`}
                  className="border rounded-lg p-4 items-center space-x-3"
                >
                  <img src={category.icon} alt="icon" className="w-8 h-8" />
                  <p className="text-base font-medium pt-2">{item}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div>
        {sectionsData.map((section, index) => (
          <div key={index} className="border rounded-2xl overflow-hidden mb-6">
            <h1
              className={`${section.bgColor} p-6 text-lg font-semibold text-[#222222]`}
            >
              {section.title}
            </h1>
            <div className="my-4 mx-6">
              <h1 className="text-sm font-semibold">CHARACTERISTICS</h1>
              <p className="text-[12px] text-[#86878C]">
                {section.characteristics}
              </p>
            </div>
            <div className="my-4 mx-6">
              <h1 className="text-sm font-semibold">RECOMMENDATIONS</h1>
              <p className="text-[12px] text-[#86878C]">
                {section.recommendations}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="my-8">
        <div className="grid grid-cols-3 border border-black rounded-xl overflow-hidden">
          <div className="bg-white border-r"></div>
          <div className="bg-yellow-500 text-black p-2 text-center text-sm font-semibold border-r border-b">
            Left Brain
          </div>
          <div className="bg-yellow-500 text-black p-2 text-center text-sm font-medium border-b">
            Right Brain
          </div>

          {categories.map((category, index) => (
            <>
              <div
                key={index}
                className="bg-gray-100 p-2 font-semibold border-r border-t"
              >
                {category.title}
              </div>
              <div className="p-2 border-r border-t">
                <ol className="list-decimal pl-4">
                  {category.left.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              </div>
              <div className="p-2 border-t">
                <ol className="list-decimal pl-4">
                  {category.right.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`border ${section.borderColor} ${section.bgColor} p-4 my-4 rounded-lg`}
          >
            <h2
              className={`${section.textColor} font-semibold text-base text-[#222222]`}
            >
              {section.title}
            </h2>
            <p className="text-[12px]">{section.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ComponentFour;
