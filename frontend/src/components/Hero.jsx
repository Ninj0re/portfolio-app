import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-950 pt-16">
      <div className="section-container text-center">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Hi, I&apos;m <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Çınar Okutan</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
            Eskişehir Teknik Üniversitesi / Bilgisayar Mühendisliği 4. sınıf 
          </h2>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://linkedin.com/in/çınar-okutan-578bb727a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all text-gray-300 hover:text-white"
            >
              <Linkedin size={20} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Ninj0re"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all text-gray-300 hover:text-white"
            >
              <Github size={20} />
              <span className="text-sm font-medium">Github</span>
            </a>
            <a
              href="mailto:cinarokutan35@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all text-gray-300 hover:text-white"
            >
              <Mail size={20} />
              <span className="text-sm font-medium">Mail</span>
            </a>
          </div>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            As a computer engineering student focused on self-development, I am eager to learn and master new technologies. I aim to consistently improve by bridging the gap between theoretical knowledge and practical solutions through hands-on projects.
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"></div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-primary-400" size={32} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
