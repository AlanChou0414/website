import styles from '../styles/About.module.css'
import { Link } from 'react-router-dom'

// icon
import { BsGithub } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'
import { FaAddressCard } from 'react-icons/fa'

// type
import { PersonalInfoType } from '../type/type'
type Props = {}

const AlanChou: PersonalInfoType = {
  name: 'Alan Chou',
  from: 'Taichung Taiwan',
  photo: 'https://avatars.githubusercontent.com/u/99056343?v=4',
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

const About = (props: Props) => {
  return (
    <section className={styles.section}>
      <img className={styles.photo} src={AlanChou.photo} alt="Alan's Photo" title='Alan photo' />
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, Nice to see you.</h1>
        <p>{`My name is ${AlanChou.name}.`}</p>
        <p>{`I'm from ${AlanChou.from}.`}</p>
        <p>{`I'm a frontend developer.`}</p>
        <p>{`Now I'm coding with ${AlanChou.code[0]} and ${AlanChou.code[1]}.`}</p>
        <p>{`This is my personal website.`}</p>
        <p>{`Hope you like it.`}</p>
        <div className={styles.linkIcon}>
          <Link to='mailto:choushenglun0414@gmail.com' title='Email link'>
            <TfiEmail size={30} />
          </Link>
          <Link to='https://github.com/AlanChou0414' target='_blank' title='GitHub link'>
            <BsGithub size={30} />
          </Link>
          <Link to='https://www.cakeresume.com/alanchou1995' target='_blank' title='Resume link'>
            <FaAddressCard size={30} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About