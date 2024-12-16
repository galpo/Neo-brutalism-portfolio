import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-yellow-200 p-12 flex flex-col justify-center gap-6">
        <p className="text-xl">Hello there! You can call me <span className="text-blue-600 font-bold">Ritee</span></p>
        <h1 className="text-4xl font-bold leading-tight text-[rgb(139,92,246)]">
          Creating another project using AI Coding and Caffeine
        </h1>
        <p className="text-gray-700">
          On a journey to become an AI Native Developer fueled by a passion for innovation.
        </p>
        <button className="w-fit px-4 py-2 bg-green-400 border-2 border-black shadow-brutal hover:translate-y-[-2px] transition-transform rounded-lg">
          Let's Work Together!
        </button>
      </div>
      <div className="bg-orange-500 p-12 flex items-center justify-center relative overflow-hidden">
        <div className="relative w-full h-[500px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/female-portrait-J1y29G9ytE8qzNM9JDpIPlHW52A7bG.png"
            alt="Stylized portrait of a woman in neon colors"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-transparent to-transparent mix-blend-multiply"></div>
      </div>
    </section>
  )
}

