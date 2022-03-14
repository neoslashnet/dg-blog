import React from 'react'
import Typed from 'typed.js'
import Twemoji from './Twemoji'

const TypedBios = () => {
  const el = React.useRef(null)
  const typed = React.useRef(null)

  React.useEffect(() => {
    const options = {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
      // shuffle: true,
    }
    typed.current = new Typed(el.current, options)
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>I'm a father, engineer, and learner.</li>
        <li>
          I live in <b className="font-medium">the SF Bay Area</b>.
        </li>
        <li>
          I was born in beautiful <b className="font-medium">Sonoma</b> County.
        </li>
        <li>
          I fell in love with technology <b className="font-medium">when I was 8 years old</b>.
        </li>
        <li>I love the information technology field.</li>
        <li>I'm currently focused on cloud security.</li>
        <li>I work for a cybersecurity startup.</li>
        <li>I'm dedicated to lifelong learning.</li>
        <li>
          I'm a wannabe farmer <Twemoji emoji="goat" />
        </li>
        <li>
          I'm a sport-guy. I love
          <span className="ml-1">
            <Twemoji emoji="soccer-ball" />,
            <Twemoji emoji="football" />,
            <Twemoji emoji="ping-pong" />,
            <Twemoji emoji="volleyball" />
          </span>
        </li>
        <li>I love watching football.</li>
        <li>
          I love playing guitar <Twemoji emoji="guitar" />
        </li>
        <li>I love rock music.</li>
        <li>
          I love playing video game <Twemoji emoji="video-game" />, PES is my favorite one.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}

export default TypedBios