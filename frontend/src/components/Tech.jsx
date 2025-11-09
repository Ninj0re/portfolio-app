const Tech = () => {
  const technologies = [
    {
      id: 1,
      name: 'Python',
      icon: '/tech-icons/python.png',
    },
    {
      id: 2,
      name: 'Flutter',
      icon: '/tech-icons/flutter.png',
    },
    {
      id: 3,
      name: 'JavaScript',
      icon: '/tech-icons/javascript.png',
    },
    {
      id: 4,
      name: 'React',
      icon: '/tech-icons/react.png',
    },
    {
      id: 5,
      name: 'Flask',
      icon: '/tech-icons/flask.png',
    },
    {
      id: 6,
      name: 'C#',
      icon: '/tech-icons/csharp.png',
    },
    {
      id: 7,
      name: 'Unity',
      icon: '/tech-icons/unity.png',
    },
    {
      id: 8,
      name: 'MongoDB',
      icon: '/tech-icons/mongodb.png',
    },
    {
      id: 9,
      name: 'SQLite',
      icon: '/tech-icons/sqlite.png',
    },
    {
      id: 10,
      name: 'AWS',
      icon: '/tech-icons/aws.png',
    },
    {
      id: 11,
      name: 'Git',
      icon: '/tech-icons/git.png',
    },
    {
      id: 12,
      name: 'Firebase',
      icon: '/tech-icons/firebase.png',
    },
    {
      id: 13,
      name: 'Jupyter',
      icon: '/tech-icons/jupyter.png',
    },
    {
      id: 14,
      name: 'Docker',
      icon: '/tech-icons/docker.png',
    }
  ]

  return (
    <section id="tech" className="section-container bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tech
          </h2>
        </div>

        {/* Tech Grid - Centered with wider width */}
        <div className="flex justify-center">
          <div className="w-full md:w-10/12 lg:w-8/12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech.id}
                  className="bg-gray-800 rounded-xl p-8 flex flex-col items-center justify-center hover:bg-gray-700 transition-all duration-300 aspect-square"
                >
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="w-12 h-12 mb-4 object-contain"
                  />
                  <h3 className="text-sm font-medium text-gray-300 text-center">
                    {tech.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tech
