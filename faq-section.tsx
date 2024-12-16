import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section className="bg-yellow-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-[rgb(139,92,246)]">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b-2 border-black">
            <AccordionTrigger className="text-lg font-semibold hover:text-[rgb(139,92,246)]">
              What programming languages do you specialize in?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              I specialize in JavaScript, Python, and Java. I'm also proficient in HTML, CSS, and various frameworks like React and Next.js.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b-2 border-black">
            <AccordionTrigger className="text-lg font-semibold hover:text-[rgb(139,92,246)]">
              Do you take on freelance projects?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Yes, I'm open to freelance opportunities. Feel free to reach out through the contact form to discuss your project needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b-2 border-black">
            <AccordionTrigger className="text-lg font-semibold hover:text-[rgb(139,92,246)]">
              How do you approach learning new technologies?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              I'm always eager to learn new technologies. I typically start with official documentation, followed by hands-on projects and online courses to deepen my understanding.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

