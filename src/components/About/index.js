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
            Junior at IIT Ropar pursuing B.Tech in Mathematics and Computing. I am an aspiring software developer, interested in backend development. I am a keen learner and eager to contribute to some good projects where I can solve some real life problems.
          </p>
          <p>
            I am a passionate programmer and I have learned C++, C, HTML, CSS, JavaScript, Bootstrap, Node, React, Git, Github and Matlab. I am curretly refining my these skills and learning about blockchain and WEB-3.
          </p>
          <p>
            Apart from programming, I have great interest in Cricket and Table Tennis. I enjoy both the slow paced nature of test cricket and the truly opposite fast pacing of table tennis.
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
