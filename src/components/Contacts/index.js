import './index.scss'
import '../Layout/index.scss'
import { Loader } from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const button = document.getElementById('send-button')
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
      return () => {}
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_y9xtgqc',
        'template_0cur5kg',
        refForm.current,
        process.env.REACT_APP_PUBLIC_API_KEY
      )
      .then(
        () => {
          alert('Message successfully sent')
          window.location.reload(false)
        },
        (err) => {
          alert('Failed to send the message')
          console.log(err)
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hello, let's get in touch and have some great time ahead.I can be
            very useful to in many ways like I am good at work that's no doubt
            but I also can make poeple laugh, no wonder I am called by the name
            party clown.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message"></textarea>
                </li>
                <li>
                  <input
                    id="send-button"
                    type="submit"
                    className="flat-button"
                    value="SEND"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
