export default function SkillsSection() {
  const skills = {
    programming: [
      "HTML", "TypeScript", "Java",
      "CSS", "PHP", "Kotlin",
      "JavaScript", "JavaScript", "Python"
    ],
    frameworks: [
      "Laravel", "Jetpack Compose", "SCSS",
      "React", "Bootstrap", "PHPUnit",
      "Next.js", "Tailwind", "TensorFlow"
    ]
  }

  return (
    <section className="bg-blue-50 p-4 sm:p-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-4 sm:gap-8 justify-center">
        <SkillWindow title="Programming Languages" skills={skills.programming} />
        <SkillWindow title="Development Frameworks" skills={skills.frameworks} />
      </div>
    </section>
  )
}

function SkillWindow({ title, skills }) {
  return (
    <div className="skill-window w-full lg:w-1/2">
      <div className="window-header">
        <div className="window-buttons">
          <span className="bg-red-500" />
          <span className="bg-yellow-500" />
          <span className="bg-green-500" />
        </div>
        <h3 className="text-sm sm:text-base">{title}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 p-2 sm:p-4">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag text-xs sm:text-sm">{skill}</span>
        ))}
      </div>
    </div>
  )
}

