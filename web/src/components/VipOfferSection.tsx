import { motion } from "framer-motion"
import "./VipOfferSection.css"

const easeOut = [0.22, 1, 0.36, 1] as const

const headerReveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: easeOut },
  },
}

const colStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

const itemUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: easeOut },
  },
}

export function VipOfferSection() {
  return (
    <section className="vip-offer" aria-labelledby="vip-offer-heading">
      <div className="vip-offer__inner">
        <motion.h2
          id="vip-offer-heading"
          className="vip-offer__title"
          variants={headerReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.45 }}
        >
          Why you should add the <span className="vip-offer__title-accent">Priority Build</span> (yes…
          it&apos;s just <span className="vip-offer__price">+$497</span> when you lock it on this page)
        </motion.h2>

        <div className="vip-offer__grid">
          <motion.div
            className="vip-offer__visual"
            variants={colStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div className="vip-offer__media" variants={itemUp}>
              <div className="td-placeholder vip-offer__placeholder" aria-hidden />
              <p className="vip-offer__caption">
                Get automatic entry to win a half-day in Midland with Taetz (you &amp; four other operators).{" "}
                <strong>Limit one entry per company.</strong>
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="vip-offer__copy"
            variants={colStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p className="vip-offer__lead" variants={itemUp}>
              <span className="vip-offer__dot" aria-hidden />
              Instantly get entered into a giveaway to{" "}
              <strong>sit with four other Priority operators for a live funnel teardown in Midland</strong>{" "}
              — ads, landing page, and what actually moves leases and vendor decisions.
            </motion.p>

            <motion.p className="vip-offer__body" variants={itemUp}>
              <mark className="vip-hl">
                You show up (in person or locked-in Zoom). We burn down the guesswork in one sitting.
              </mark>
            </motion.p>

            <motion.p className="vip-offer__body" variants={itemUp}>
              Taetz will be there to answer questions on{" "}
              <strong>creative, pages, tracking, and what to say to cold traffic</strong> — tuned for oil
              &amp; gas buyers, not generic B2B templates.
            </motion.p>

            <motion.p className="vip-offer__body" variants={itemUp}>
              After that, we buy dinner in Midland{" "}
              <span className="vip-offer__muted">(or ship a proper steak kit if you&apos;re remote)</span> — because
              deals get done when people stop pretending a PDF is a strategy.
            </motion.p>

            <motion.p className="vip-offer__body" variants={itemUp}>
              We&apos;ll select winners live on the launch call{" "}
              <strong>from the operators who add Priority Build during this window.</strong>
            </motion.p>

            <motion.p className="vip-offer__body" variants={itemUp}>
              And besides — even if you don&apos;t win, it makes the whole event better because{" "}
              <mark className="vip-hl">we&apos;ll run drawings throughout the day.</mark>
            </motion.p>

            <motion.p className="vip-offer__fine" variants={itemUp}>
              (Terms &amp; conditions apply.)
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
