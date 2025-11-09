import { Linkedin, Mail} from 'lucide-react'

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-950 text-white border-t border-gray-800">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex justify-center">
            {/* Contact Section */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-primary-400">Get In Touch</h3>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://linkedin.com/in/çınar-okutan-578bb727a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:cinarokutan35@gmail.com"
                  className="p-2 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
