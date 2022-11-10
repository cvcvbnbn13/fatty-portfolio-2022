interface SanityBody {
  _creaedAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

interface Image {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface Social extends SanityBody {
  _type: 'social'
  title: string
  url: string
}

export interface PageInfo extends SanityBody {
  _type: 'pageinfo'
  address: string
  email: string
  backgroundInformation: string
  role: string
  phoneNumber: string
  profilePic: Image
  name: string
  heroImage: Image
}

export interface SkillType extends SanityBody {
  _type: 'skill'
  points: string[]
  title: string
  order: number
}

export interface Project extends SanityBody {
  _type: 'project'
  image: Image
  linkToBuild: string
  linkToGithub: string
  summary: string
  technologies: string[]
  title: string
}

export interface CareerType extends SanityBody {
  _type: 'career'
  company: string
  companyImage: Image
  dateStarted: date
  dateEnded: date
  isCurrnetlyWorkingHere: boolean
  jobTitle: string
  points: string[]
  technologies: Image[]
}
