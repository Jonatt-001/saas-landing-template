"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function Faq() {
  const accordionItems = [
    {
      title: "What is Kaali • Space?",
      content: (
        <div className="text-muted-foreground">
          Kaali • Space is an intelligent automation platform delivering AI
          copilots, workflow orchestration, real-time data intelligence, and
          enterprise-class tools designed to help teams operate faster and more
          efficiently.
        </div>
      ),
    },
    {
      title: "Is Kaali • Space suitable for my business size?",
      content: (
        <div className="text-muted-foreground">
          Yes. Whether you’re a startup automating your first process or an
          enterprise orchestrating thousands of tasks per minute, Kaali • Space
          scales seamlessly with your operational needs.
        </div>
      ),
    },
    {
      title: "Do I need technical experience to use Kaali • Space?",
      content: (
        <div className="text-muted-foreground">
          No. Our AI copilots and guided workflows handle the heavy lifting.
          Developers can integrate deeply using APIs, while non-technical teams
          benefit from intuitive dashboards and automation modules.
        </div>
      ),
    },
    {
      title: "Is my data secure?",
      content: (
        <div className="text-muted-foreground">
          Yes. Kaali • Space uses enterprise-grade encryption, secure isolated
          environments, and continuous compliance standards to ensure full data
          protection across all workflows.
        </div>
      ),
    },
    {
      title: "Can Kaali • Space integrate with our existing tools?",
      content: (
        <div className="text-muted-foreground">
          Absolutely. We support API-first integrations, webhooks, and modular AI
          pipelines that connect seamlessly with your current infrastructure.
        </div>
      ),
    },
  ];

  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring", bounce: 0 }}
      className="relative w-full max-w-(--breakpoint-xl) mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-3 justify-center items-center">
        <h4 className="text-2xl font-bold sm:text-3xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          FAQ
        </h4>
        <p className="max-w-xl text-muted-foreground text-center">
          Here are some of our frequently asked questions.
        </p>
      </div>
      <div className="flex w-full max-w-lg">
        <Accordion type="multiple" className="w-full">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="text-muted-foreground"
            >
              <AccordionTrigger className="text-left">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}