import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import "./Hero.css"

const easeOut = [0.22, 1, 0.36, 1] as const

const staggerParent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.52, ease: easeOut },
  },
}

function pad2(n: number) {
  return String(Math.max(0, n)).padStart(2, "0")
}

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  return useMemo(() => {
    const diff = target.getTime() - now
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
    }
    const seconds = Math.floor(diff / 1000) % 60
    const minutes = Math.floor(diff / (1000 * 60)) % 60
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    return { days, hours, minutes, seconds, expired: false }
  }, [now, target])
}

export function Hero() {
  const eventTarget = useMemo(() => {
    const d = new Date()
    d.setDate(d.getDate() + 5)
    d.setHours(12, 0, 0, 0)
    return d
  }, [])

  const { days, hours, minutes, seconds, expired } = useCountdown(eventTarget)

  const dateLabel = useMemo(() => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(eventTarget)
  }, [eventTarget])

  return (
    <div className="hero-root">
      <motion.div
        className="top-bar"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: easeOut }}
      >
        <span className="top-bar__icon" aria-hidden>
          ✓
        </span>
        <span>Registered: one more step — do not exit this page</span>
      </motion.div>

      <div className="hero-main">
        <motion.div
          className="hero-col--left"
          variants={staggerParent}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp} className="event-badge">
            <span className="event-badge__dot" aria-hidden />
            <span>Live strategy room · {dateLabel.toUpperCase()}</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="hero-headline">
            Watch this <em>quick breakdown</em> before you spend another dollar on ads (or a website) that
            can&apos;t convert Texas oil &amp; gas buyers.
          </motion.h1>

          <motion.div variants={fadeUp} className="hero-datetime">
            <span className="hero-datetime__cal" aria-hidden>
              📅
            </span>
            <span>
              Same-day window — <strong style={{ color: "var(--td-text)" }}>9AM PT / 12PM ET</strong> (we cap
              calls so replies stay fast)
            </span>
          </motion.div>

          <motion.div variants={scaleIn} className="cta-wrap">
            <button type="button" className="cta-primary">
              Click here to book a free strategy call — $0 if we can&apos;t help
            </button>
            <button type="button" className="cta-decline">
              No thanks — I&apos;ll keep my funnel a mystery
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-col--right"
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: easeOut, delay: 0.15 }}
        >
          <motion.div
            className="video-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOut, delay: 0.28 }}
            whileHover={{ y: -3 }}
          >
            <div className="video-card__play" aria-hidden>
              ▶
            </div>
            <p className="video-card__label">
              Your walkthrough plays here on the call. If this were the live page, we&apos;d embed the hosted
              video.
            </p>
          </motion.div>

          <motion.div
            className="countdown"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOut, delay: 0.4 }}
          >
            <div className="countdown__header">
              <span className="countdown__warn" aria-hidden>
                ⚠️
              </span>
              <p className="countdown__title">
                There&apos;s still time — strategy room opens in:
              </p>
            </div>
            <div className="countdown__grid" aria-live="polite">
              {[
                { v: expired ? 0 : days, l: "Day(s)" },
                { v: expired ? 0 : hours, l: "Hour(s)" },
                { v: expired ? 0 : minutes, l: "Minutes" },
                { v: expired ? 0 : seconds, l: "Seconds" },
              ].map((cell) => (
                <div key={cell.l}>
                  <motion.div
                    key={cell.v}
                    className="countdown__num"
                    initial={{ opacity: 0.35, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {cell.l === "Day(s)" ? String(cell.v) : pad2(cell.v)}
                  </motion.div>
                  <div className="countdown__label">{cell.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
