import './Skills.css'

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#', 'PHP', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React/Redux/Next.js', 'Vue.js/Nuxt.js', 'Angular', 'HTML5/CSS3/SASS', 'Material-UI', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js/Nest.js', 'Java Spring', 'ASP.NET Core', 'GraphQL', 'REST APIs'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Redis', 'Oracle'],
  },
  {
    title: 'AWS Services',
    skills: ['EC2/ECS/EKS', 'Lambda', 'RDS/Aurora', 'CloudFormation', 'CodePipeline', 'Cognito', 'CloudWatch', 'S3'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Terraform', 'Docker', 'Kubernetes', 'Git', 'CI/CD', 'Datadog', 'GitHub Actions'],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="certifications">
          <h3 className="cert-title">Certifications</h3>
          <div className="cert-list">
            <span className="cert-badge">AWS Solutions Architect – Professional</span>
            <span className="cert-badge">AWS Solutions Architect – Associate</span>
            <span className="cert-badge">AWS Cloud Practitioner</span>
          </div>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
