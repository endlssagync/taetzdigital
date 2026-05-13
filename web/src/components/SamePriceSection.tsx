import { motion } from "framer-motion"
import "./SamePriceSection.css"

const easeOut = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.05,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: easeOut },
  },
}

export function SamePriceSection() {
  return (
    <section className="same-price" aria-labelledby="same-price-heading">
      <div className="same-price__inner">
        <motion.div
          className="same-price__stack"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.28 }}
        >
          <motion.div className="same-price__lead" variants={item}>
            <span className="same-price__dot" aria-hidden />
            <p id="same-price-heading" className="same-price__headline">
              <mark className="same-price__mark">
                All of this for roughly the same budget you were already going to spend on the site (or the ads)
                anyway…
              </mark>
            </p>
          </motion.div>

          <motion.p className="same-price__p" variants={item}>
            If you&apos;re on this page, you&apos;re already thinking about fixing the funnel —{" "}
            <strong>creative, landing pages, tracking, or all three</strong> — before another quarter burns on
            traffic that doesn&apos;t convert Texas buyers.
          </motion.p>

          <motion.p className="same-price__p" variants={item}>
            <strong>Saying yes on this call locks your production slot</strong>, gets you{" "}
            <span className="same-price__underline">
              live Q&amp;A with senior media and offer people who actually build the work
            </span>
            , and the <strong>replay + asset pack</strong> we don&apos;t ship as a public download.
          </motion.p>

          <motion.p className="same-price__p same-price__p--emph" variants={item}>
            <strong>At no extra cost beyond the Priority Build number we agree to on the call.</strong>
          </motion.p>

          <motion.p className="same-price__p" variants={item}>
            And if you want a <strong>&quot;feel good&quot; reason</strong>: it lets us pre-assign strategist hours and
            pre-shape your creative shell <strong>so we&apos;re not scrambling the night before your first spend goes
            live.</strong>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
