import { useId, useState } from "react"
import { motion } from "framer-motion"
import "./SocialFaqSection.css"

const easeOut = [0.22, 1, 0.36, 1] as const

const block = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: easeOut },
  },
}

const FAQS = [
  {
    q: "Do you only work with Texas oil & gas operators?",
    a: "No — but it’s our core lane. If you sell into energy, field services, or logistics around basins and corridors, we’ll tell you straight if we’re the right shop. If not, we’ll point you somewhere honest.",
  },
  {
    q: "When does production start after we move?",
    a: "Kickoff hits the calendar inside two business days of signed scope and deposit. Creative and page work start in parallel so you’re not waiting on a waterfall deck before anything ships.",
  },
  {
    q: "Is this a retainer or a project fee?",
    a: "Most launches start as a scoped project with clear deliverables. If you want us comping campaigns after launch, we’ll map a retainer only if the math makes sense for both sides.",
  },
  {
    q: "Who is this actually for?",
    a: "Independents, growth teams, and leadership in transition — people who need pages and ads that can carry a technical offer without sounding like a template factory coughed it up.",
  },
  {
    q: "What do I get in the first 30 days?",
    a: "Offer language + angles, wireframe-level page structure, starter ad sets, tracking checklist, and a replay-friendly walkthrough so your team isn’t guessing what “done” means.",
  },
  {
    q: "Will the Priority Build number change after this window?",
    a: "When the queue is full, the price steps or the window closes — not because we like games, but because we refuse to sell starts we can’t execute without cutting corners.",
  },
] as const

export function SocialFaqSection() {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="social-faq" aria-labelledby="social-faq-heading">
      <div className="social-faq__inner">
        <motion.div
          className="social-faq__proof"
          variants={block}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          <motion.p className="social-faq__rating" variants={fadeUp}>
            <span className="social-faq__stars" aria-hidden>
              ★★★★★
            </span>{" "}
            Avg. post-launch score <strong>4.9 / 5.0</strong> from operator teams we&apos;ve shipped creative + pages
            for
          </motion.p>

          <motion.h2 id="social-faq-heading" className="social-faq__headline" variants={fadeUp}>
            Taetz rollouts have earned five-star handoffs across{" "}
            <span className="social-faq__headline-accent">Texas energy, field services, and midstream</span> brands
          </motion.h2>

          <motion.div className="social-faq__collage" variants={fadeUp} aria-hidden>
            <div className="td-placeholder td-placeholder--light social-faq__placeholder" />
          </motion.div>
        </motion.div>

        <motion.div
          className="social-faq__faq"
          variants={block}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.h3 className="social-faq__faq-title" variants={fadeUp}>
            Frequently asked questions
          </motion.h3>

          <div className="social-faq__list" role="list">
            {FAQS.map((item, index) => {
              const panelId = `${baseId}-panel-${index}`
              const buttonId = `${baseId}-button-${index}`
              const isOpen = openIndex === index

              return (
                <motion.div key={item.q} className="faq-row" variants={fadeUp} role="listitem">
                  <h4 className="faq-row__heading">
                    <button
                      id={buttonId}
                      type="button"
                      className="faq-row__trigger"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex((v) => (v === index ? null : index))}
                    >
                      <span className="faq-row__q">{item.q}</span>
                      <motion.span
                        className="faq-row__glyph"
                        aria-hidden
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.28, ease: easeOut }}
                      >
                        +
                      </motion.span>
                    </button>
                  </h4>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`faq-row__panel ${isOpen ? "is-open" : ""}`}
                  >
                    <div className="faq-row__body">{item.a}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
