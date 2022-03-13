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
        <li>
          I'm aliased as <b className="font-medium">Leo</b> at work.
        </li>
        <li>I'm a builder, learner and freedom seeker.</li>
        <li>
          I live in <b className="font-medium">The SF Bay Area</b>.
        </li>
        <li>
          I was born in the beautiful <b className="font-medium">Sonoma</b> County.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">Pascal</b>.
        </li>
        <li>I love web development.</li>
        <li>I'm focusing on building eCommerce softwares.</li>
        <li>I work mostly with React/Node and pure JS.</li>
        <li>I'm Tu Le's husband.</li>
        <li>
          I'm a dog person <Twemoji emoji="dog" />
        </li>
        <li>
          I'm a sports-guy. I love
          <span className="ml-1">
            <Twemoji emoji="soccer-ball" />,
            <Twemoji emoji="football" />,
            <Twemoji emoji="baseball" />,
            <Twemoji emoji="basketball" />
          </span>
        </li>
        <li>I love watching football.</li>
        <li>
          I love reading <Twemoji emoji="book" />
        </li>
        <li>I love music.</li>
        <li>
          I love playing video games <Twemoji emoji="video-game" />, with my kids.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}

export default TypedBios
