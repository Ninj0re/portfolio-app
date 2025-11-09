import { Github, Image } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Fittly',
      description: 'A mobile app for virtual try-ons. The AI for this app is fal-ai/image-apps-v2/virtual-try-on. Developed with Flutter and Firebase. Also has Adapty plugin for in-app purchases.',
      mainImage: '/projects/fittly.png',
      technologies: ['Flutter', 'Firebase', 'Fal.ai', 'Adapty'],
      imagesUrl: 'https://drive.google.com/drive/folders/1nq2RJOT2TtsRiI6SLA4N0gaLAMxIG31D?usp=sharing'
    },
    {
      id: 2,
      title: 'Bamboo Bounce',
      description: 'Unity 2D template pixel art mobile game.',
      mainImage: '/projects/bamboo-bounce.png',
      technologies: ['Unity', 'C#'],
      githubUrl: 'https://github.com/Ninj0re/Panda-Jump',
      imagesUrl: 'https://drive.google.com/drive/folders/1nq2RJOT2TtsRiI6SLA4N0gaLAMxIG31D?usp=sharing'
    },
  ]

  return (
    <section id="projects" className="section-container bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 border border-gray-800 hover:border-primary-500/50"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex items-center justify-center">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-medium rounded-full border border-primary-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      <Github size={18} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.imagesUrl && (
                    <a
                      href={project.imagesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      <Image size={18} />
                      <span className="text-sm font-medium">Gallery</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
