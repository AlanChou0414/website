import styles from '../styles/Projects.module.css'
import { Link } from 'react-router-dom'

// data
import { projects } from '../data/projectsData'

const Project = () => {
  return (
    <section className={styles.section}>
      {
        projects.map(project => (
          <div className={styles.projectItems} key={project.title}>
            <Link to={project.link} target='_blank'>
              <img src={project.img} alt="project logo" />
            </Link>
            <div className={styles.projectContent}>
              <Link to={project.link} target='_blank'>{project.title}</Link>
              {project.technology.map(technology => (
                <li key={technology}>{technology}</li>
              ))}
            </div>
          </div>
        ))
      }
    </section>
  )
}
export default Project