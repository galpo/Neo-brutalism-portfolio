export default function InfoCards() {
  const cards = [
    {
      title: "About me",
      content: "I'm a computer science student at the University of Bello Terra, where I'm learning all about coding and most importantly, software development.",
      bgColor: "bg-green-200"
    },
    {
      title: "Interest in Technology",
      content: "Technology has fascinated me since I was young, especially the world of coding. Working with tech with hands-on creation has always felt right for me.",
      bgColor: "bg-green-200"
    },
    {
      title: "Software Development",
      content: "I thrive on continuously learning frontend frameworks to backend languages, to share ideas into functional applications.",
      bgColor: "bg-orange-200"
    },
    {
      title: "Other Hobbies",
      content: "Here's are some of my other passions: Bucketlist, Manga, Valorant, Genshin, Honkai: Star Rail, Short Stories Explorer, OPM Giga Supporter",
      bgColor: "bg-purple-200"
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.bgColor} p-4 sm:p-6 border-2 border-black shadow-brutal`}
        >
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">{card.title}</h3>
          <p className="text-sm sm:text-base">{card.content}</p>
        </div>
      ))}
    </div>
  )
}

