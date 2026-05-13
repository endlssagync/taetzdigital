import { motion } from "framer-motion"
import "./WorkshopFeaturesPair.css"

const easeOut = [0.22, 1, 0.36, 1] as const

const sequence = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.05,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.54, ease: easeOut },
  },
}

export function WorkshopFeaturesPair() {
  return (
    <>
      <section className="wk wk--5" aria-labelledby="wk-5-heading">
        <div className="wk__inner">
          <motion.div
            className="wk__grid"
            variants={sequence}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
          >
            <motion.div className="wk__copy" variants={fadeUp}>
              <h2 id="wk-5-heading" className="wk__title wk__title--sans">
                <span className="wk__dot" aria-hidden />
                <span className="wk__title-wrap">
                  <span className="wk__title-accent">Taetz™ Permian launch</span> live virtual workshop:
                </span>
              </h2>
              <div className="wk__body">
                <p>
                  You walk out with the <strong>exact ad angles, landing wireframe, and follow-up sequence</strong>{" "}
                  we use when we can&apos;t afford to be cute — tuned for Texas energy buyers, not generic B2B
                  templates.
                </p>
                <p>
                  That means <strong>headline banks, objection killers, and proof blocks</strong> you can hand to
                  your team or vendors — so the work keeps moving even when you&apos;re on location or in the field.
                </p>
                <p>
                  If you&apos;re scaling leases, crews, or markets, this is the fast lane to keep your message
                  aligned with what&apos;s actually happening on the ground — <strong>before</strong> you scale spend
                  on the wrong story.
                </p>
              </div>
            </motion.div>

            <motion.figure className="wk__figure" variants={fadeUp} aria-label="Visual placeholder">
              <div className="td-placeholder td-placeholder--light wk__placeholder wk__placeholder--stage" aria-hidden />
            </motion.figure>
          </motion.div>
        </div>
      </section>

      <section className="wk wk--6" aria-labelledby="wk-6-heading">
        <div className="wk__inner">
          <motion.div
            className="wk__grid"
            variants={sequence}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
          >
            <motion.figure className="wk__figure" variants={fadeUp} aria-label="Visual placeholder">
              <div className="td-placeholder td-placeholder--light wk__placeholder wk__placeholder--video" aria-hidden />
            </motion.figure>

            <motion.div className="wk__copy" variants={fadeUp}>
              <h2 id="wk-6-heading" className="wk__title wk__title--sans">
                <span className="wk__dot" aria-hidden />
                <span className="wk__title-wrap">High-resolution recordings of the entire event…</span>
              </h2>
              <div className="wk__body">
                <p>
                  You get the sessions in <strong>broadcast-quality replay</strong> — so you can rewatch what
                  mattered, clip the best moments for internal training, and onboard hires without another flight.
                </p>
                <p>
                  These replays <mark className="wk-mark">never appear</mark> as a public feed for competitors to
                  rip line-for-line.
                </p>
                <p>
                  After the access window closes, we{" "}
                  <mark className="wk-mark">pull links and archive access</mark> —{" "}
                  <mark className="wk-mark">you&apos;re not funding our edge into someone else&apos;s swipe file.</mark>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
