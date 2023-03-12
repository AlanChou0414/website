import styles from '../styles/About.module.css'
import { Link } from 'react-router-dom'

// icon
import { BsGithub } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'
import { FaAddressCard } from 'react-icons/fa'

// type
type Props = {}

interface PersonalInfoType {
  name: string
  from: string
  code: string[]
  technologies: {
    frontEnd: string[]
    backEnd: string[]
  }
  databases: string[]
  other: string[]
}

const AlanChou: PersonalInfoType = {
  name: 'AlanChou',
  from: 'Taichung Taiwan',
  code: ['JavaScript', 'TypeScript'],
  technologies: {
    frontEnd: [
      'React', 'CSS3', 'HTML5',
      'SASS', 'styles-components',
      'CSS-module', 'bootstrap', 'TailwindCSS',
      'jQuery', 'AJAX'
    ],
    backEnd: [
      'Express', 'Node.js'
    ]
  },
  databases: ['MySQL'],
  other: ['Git', 'GitHub']
}

const photo = 'https://avatars.githubusercontent.com/u/99056343?v=4'

const About = (props: Props) => {
  return (
    <section className={styles.section}>
      <img className={styles.photo} src={photo} alt="Alan's Photo" />
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, Nice to see you.</h1>
        <p>{`I'm ${AlanChou.name}.`}</p>
        <p>{`I'm from ${AlanChou.from}.`}</p>
        <p>{`I'm currently learning web development.`}</p>
        <p>{`Now I'm code with ${AlanChou.code}.`}</p>
        <p>{`This is my personal website.`}</p>
        <p>{`Hope you like it.`}</p>
        <div className={styles.linkIcon}>
          <Link to='mailto:choushenglun0414@gmail.com'>
            <TfiEmail size={30} />
          </Link>
          <Link to='https://github.com/AlanChou0414' target='_blank'>
            <BsGithub size={30} />
          </Link>
          <Link to='https://www.cakeresume.com/alanchou1995' target='_blank'>
            <FaAddressCard size={30} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About