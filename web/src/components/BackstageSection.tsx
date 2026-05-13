import { motion } from "framer-motion"
import "./BackstageSection.css"

const easeOut = [0.22, 1, 0.36, 1] as const

const sequence = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.56, ease: easeOut },
  },
}

export function BackstageSection() {
  return (
    <section className="backstage" aria-labelledby="backstage-heading">
      <div className="backstage__inner">
        <motion.div
          className="backstage__grid"
          variants={sequence}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.figure className="backstage__visual" variants={fadeUp} aria-label="Visual placeholder">
            <div className="td-placeholder td-placeholder--light backstage__placeholder" aria-hidden />
          </motion.figure>

          <motion.div className="backstage__copy" variants={fadeUp}>
            <h2 id="backstage-heading" className="backstage__headline">
              <span className="backstage__dot" aria-hidden />
              <span>
                <mark className="backstage-hl">
                  A private VIP livestream &quot;Backstage Pass&quot;
                </mark>{" "}
                <span className="backstage__headline-rest">
                  (separate from the open room) — built for operators who want the real talk on{" "}
                  <strong>pages, ads, and pipeline</strong> without the riff raff.
                </span>
              </span>
            </h2>
            <p>
              You get chat open so you can{" "}
              <mark className="backstage-hl">
                submit questions live to Taetz + five mystery operators &amp; GTM leaders
              </mark>
              .
            </p>
            <p>
              Plus, get a <strong>high-resolution recording</strong> of the full session.
            </p>
            <p>You&apos;ll watch how they pressure-test angles, offers, and objections — not theory slides.</p>
            <p>
              <strong>We&apos;ll be there too.</strong>
            </p>
          </motion.div>

          <motion.blockquote className="backstage__quote" variants={fadeUp}>
            Most operators never get invited into the room where campaigns get shredded and rebuilt —{" "}
            <span className="backstage__quote-accent">this is your invite.</span>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  )
}
