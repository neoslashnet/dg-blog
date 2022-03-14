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
          I live in <b className="font-medium">The SF Bay Area</b>.
        </li>
        <li>
          I was born in beautiful <b className="font-medium">Sonoma</b> County.
        </li>
        <li>
          I fell in love with technology <b className="font-medium">when I was 8 years old</b>.
        </li>
        <li>I love IT.</li>
        <li>I'm currently focused on cloud security.</li>
        <li>I work for a cybersecurity startup.</li>
        <li>I'm dedicated to life-long learning.</li>
        <li>
          I'm a wannabe farmer <Twemoji emoji="rooster" />
        </li>
        <li>
          I'm a sports-guy. I love
          <span className="ml-1">
            <Twemoji emoji="soccer-ball" />
          </span>
        </li>
        <li>I love spending time with my family.</li>
        <li>
          I love music. <Twemoji emoji="guitar" />
        </li>
        <li>I love pizza. </li>
        <li>
          I love playing video games <Twemoji emoji="video-game" />, with my kids.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}

export default TypedBios
