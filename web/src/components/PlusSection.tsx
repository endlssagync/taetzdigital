import { motion } from "framer-motion"
import "./PlusSection.css"

const easeOut = [0.22, 1, 0.36, 1] as const

const sequence = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.06,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: easeOut },
  },
}

export function PlusSection() {
  return (
    <section className="plus-section" aria-labelledby="plus-section-heading">
      <div className="plus-section__inner">
        <motion.div
          className="plus-section__sequence"
          variants={sequence}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
        >
          <motion.h2 id="plus-section-heading" className="plus-section__title" variants={fadeUp}>
            Plus, you&apos;ll also get…
          </motion.h2>

          <div className="plus-section__row">
            <motion.div className="plus-section__copy" variants={fadeUp}>
              <p className="plus-section__lead">
                <span className="plus-section__dot" aria-hidden />
                <span>
                  <strong>
                    Your oil &amp; gas funnel package jumps the line—guaranteed in the first production sprint
                  </strong>{" "}
                  (delivered before teams who wait until we&apos;re &quot;less slammed&quot; after quarter-end).
                </span>
              </p>
              <p>
                We&apos;re actively onboarding operators across{" "}
                <strong>Texas and the Permian</strong> who need ads and a site that read like someone who knows
                what a lease line actually is.
              </p>
              <p>
                Unlike a template download you can resell forever,{" "}
                <strong>Taetz work is executed by humans on a fixed weekly capacity.</strong>
              </p>
              <p>
                <strong>Which means deliverables are limited.</strong> When the calendar is full, we stop
                selling new starts—not quality. Late movers wait.
              </p>
            </motion.div>

            <motion.figure className="plus-section__visual" variants={fadeUp} aria-label="Visual placeholder">
              <div className="td-placeholder plus-section__placeholder" aria-hidden />
            </motion.figure>
          </div>

          <motion.p className="plus-section__footer" variants={fadeUp}>
            If you want to skip the second-wave backlog, add Priority on this call to{" "}
            <strong>guarantee your strategist hours and ship dates.</strong>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
