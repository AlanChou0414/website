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
            <img src={project.img} alt="project logo" />
            <div className={styles.projectContent}>
              <Link to={project.link}>{project.title}</Link>
              {project.technology.map(technology => (
                <li>{technology}</li>
              ))}
            </div>
          </div>
        ))
      }
    </section>
  )
}
export default Project