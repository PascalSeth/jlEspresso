import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const faqs = [
  {
    question: "HOW DO I CHOOSE A COFFEE MACHINE THAT SUITS MY NEEDS?",
    answer: "Consider factors like your daily coffee consumption, preferred coffee types, available counter space, and budget. For home use, semi-automatic machines are popular, while automatic machines suit busy environments."
  },
  {
    question: "HOW DO I CLEAN AND MAINTAIN A COFFEE MACHINE?",
    answer: "Cleaning and maintenance instructions may vary depending on the coffee grinder model. However, it is essential to regularly clean the brew group, remove coffee residues, and maintain several operations to preserve the quality of coffee grinding."
  },
  {
    question: "WHAT IS THE DIFFERENCE BETWEEN MANUAL AND AUTOMATIC COFFEE MACHINE?",
    answer: "Manual machines require user control over the brewing process, while automatic machines handle most steps for you. Manual offers more customization but needs more skill, automatic provides consistency with less input."
  },
  {
    question: "ARE ALL ESPRESSO MAKER & COFFEE MACHINE SUITABLE FOR ALL TYPES OF COFFEE?",
    answer: "Not all machines are suitable for every coffee type. Different machines are optimized for specific coffee styles - some excel at espresso, others at drip coffee. Check machine specifications for compatibility."
  }
];

export default function CoffeeMachineFAQ() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - FAQ Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                FAQ ABOUT OUR COFFEE MACHINE
              </h2>
              <p className="text-gray-600">
                Discover what our customers are saying about our coffee machine. Get answers straight from those who have experienced the grind.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg bg-white px-4"
                >
                  <AccordionTrigger className="text-left font-semibold py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Button 
              variant="default"
              className="bg-black text-white hover:bg-gray-800 mt-6"
            >
              Contact Us <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src="/jlexpresso/MachineFix.jpg"
                alt="Coffee Machine"
                className="w-full h-96 max-lg:h-72 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}