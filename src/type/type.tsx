// About page
export interface PersonalInfoType {
  name: string
  from: string
  photo: string
  code: string[]
  technologies: {
    frontEnd: string[]
    backEnd: string[]
  }
  databases: string[]
  other: string[]
}

// Contact page
export interface ContactType {
  firstName?: string
  lastName?: string
  email?: string
  message?: string
}

// Project page
export interface ProjectsType {
  title: string
  technology: string[]
  img: string
  link: string
}