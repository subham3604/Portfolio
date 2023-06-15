import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Loader } from 'react-loaders'
// import {faAngular} from '@fortawesome/free-solid-svg-icons'
import {
  faNode,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
      return () => {}
    }, 4000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div class="face1">
              <FontAwesomeIcon icon={faNode} color="#215732" />
            </div>
            <div class="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div class="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div class="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div class="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div class="face6">
              <FontAwesomeIcon icon={faBootstrap} color="#0D6EFD" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default About
