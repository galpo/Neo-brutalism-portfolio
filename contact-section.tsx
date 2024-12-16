import Image from 'next/image'

export default function ContactSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-red-500 p-6 sm:p-12 flex items-center justify-center">
        <div className="bg-white rounded-full p-4 sm:p-8 border-2 border-black">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Procrastination illustration"
            width={200}
            height={200}
            className="w-32 h-32 sm:w-48 sm:h-48"
          />
          <p className="text-center mt-2 sm:mt-4 font-bold text-sm sm:text-base">I promise to not procrastinate...</p>
        </div>
      </div>
      <div className="bg-purple-300 p-6 sm:p-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">Let's make something great, together</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-2 text-sm sm:text-base">By email</label>
            <input
              type="email"
              className="w-full p-2 border-2 border-black text-sm sm:text-base"
              placeholder="example@gmail.com"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm sm:text-base">By phone</label>
            <input
              type="tel"
              className="w-full p-2 border-2 border-black text-sm sm:text-base"
              placeholder="+1234567890"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm sm:text-base">Need a refresher?</label>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <button className="px-4 py-2 bg-blue-100 border-2 border-black shadow-brutal hover:translate-y-[-2px] transition-transform text-sm sm:text-base">
                Download my Resume
              </button>
              <button className="px-4 py-2 bg-blue-100 border-2 border-black shadow-brutal hover:translate-y-[-2px] transition-transform text-sm sm:text-base">
                Download my CV
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

