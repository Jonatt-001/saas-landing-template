"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO at TechStart",
      avatar: "https://i.pravatar.cc/150?img=1",
      content:
        "Kaali • Space became the backbone of our operations. Automations that once took days now run in minutes. Our team has scaled without adding headcount.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Manager at Scale Co",
      avatar: "https://i.pravatar.cc/150?img=3",
      content:
        "The AI copilots integrated flawlessly with our workflows. Our support response time dropped by 62% in the first week. Absolutely game-changing.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "CTO at DataFlow",
      avatar: "https://i.pravatar.cc/150?img=5",
      content:
        "Data intelligence from Kaali • Space uncovered issues we didn’t even know existed. The platform’s security and compliance features exceed every requirement we had.",
      rating: 5,
    },
    {
      name: "Robert Taylor",
      role: "CTO at FinanceFlow",
      avatar: "https://i.pravatar.cc/150?img=15",
      content:
        "In finance, reliability isn’t optional. The automation pipeline and uptime guarantees from Kaali • Space have made it our most trusted infrastructure layer.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "Director of Operations at StreamlineOps",
      avatar: "https://i.pravatar.cc/150?img=17",
      content:
        "Our operational overhead dropped dramatically. The automated support system resolves tickets before a human even sees them. It feels unfair to our competitors.",
      rating: 5,
    },
    {
      name: "Kevin Lee",
      role: "Founder at NextGen Solutions",
      avatar: "https://i.pravatar.cc/150?img=19",
      content:
        "Eighteen months on Kaali • Space with zero downtime. The reliability is unreal, and the performance improvements are obvious across every part of our product.",
      rating: 5,
    },
    {
      name: "Sophie Anderson",
      role: "Product Lead at InnovateLab",
      avatar: "https://i.pravatar.cc/150?img=21",
      content:
        "The intelligence dashboard helped us shift from reactive to proactive decisions. Our roadmap alignment improved instantly.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Engineering Manager at TechBridge",
      avatar: "https://i.pravatar.cc/150?img=23",
      content:
        "Migration was smoother than we expected. Our engineers were fully productive on day one, thanks to the polished documentation and onboarding tools.",
      rating: 5,
    },
    {
      name: "Elena Petrov",
      role: "CEO at GrowthMetrics",
      avatar: "https://i.pravatar.cc/150?img=25",
      content:
        "Kaali • Space scaled with us from 5 clients to over 2,000. We’ve never had to re-architect anything. The system grows as aggressively as we do.",
      rating: 5,
    },
    {
      name: "Michael Chang",
      role: "Head of Product at DataDriven",
      avatar: "https://i.pravatar.cc/150?img=27",
      content:
        "Remote collaboration improved instantly. Automations handle the grunt work so the team focuses on strategy instead of busywork.",
      rating: 5,
    },
  ];

  const StarIcon = () => (
    <svg
      className="w-4 h-4 text-yellow-500"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20 flex flex-col gap-3"
        >
          <h2 className="text-xl font-semibold sm:text-2xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
            Trusted by Modern Teams Everywhere
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-center">
            The Kaali • Space automation ecosystem powers startups, enterprises,
            and global organizations.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className="break-inside-avoid mb-8"
            >
              <div className="p-6 rounded-xl bg-card border border-border transition-colors duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-linear-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center text-sm font-medium border border-primary/20">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}