import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="w-full flex justify-between items-center px-4 py-2">
          <h1 className="text-xl font-bold text-gray-800">Nitish Kumar</h1>

          <div className="hidden md:flex space-x-10">
            <a href="#about" className="text-gray-700 font-medium hover:text-purple-600 transition relative group">
              About
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-purple-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#experience" className="text-gray-700 font-medium hover:text-purple-600 transition relative group">
              Experience
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-purple-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#projects" className="text-gray-700 font-medium hover:text-purple-600 transition relative group">
              Projects
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-purple-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 font-medium hover:text-purple-600 transition relative group">
              Contact
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-purple-600 transition-all group-hover:w-full"></span>
            </a>
          </div>

          <a
            href="https://drive.google.com/file/d/1xVDNB-8OXvFbKdtvYBnYyPAqaSAmu98o/view?usp=sharing"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-purple-100 text-center">
        <div className="flex items-center text-gray-600 mb-2">
          <FaMapMarkerAlt className="text-black-500 mr-2" />
          <span className="text-lg font-medium">India</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I'm Nitish Kumar
        </motion.h2>

        <p className="text-xl text-gray-600 mb-6">
          CSE (Data Science) | Aspiring Software & Data Engineer
        </p>

        <div className="flex space-x-6">
          <a href="mailto:nitishkumar000369@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-500 transition text-2xl">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/nitish-kumar-54a88431b/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://github.com/PuliNitishKumar" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition text-2xl">
            <FaGithub />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-r from-blue-100 to-purple-100 text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="max-w-3xl text-lg text-gray-700 leading-relaxed mb-8">
          I’m <span className="font-semibold text-purple-700">Nitish Kumar</span>, a passionate Computer Science and Engineering student specializing in{" "}
          <span className="font-semibold">Data Science</span>. I enjoy solving real-world problems using{" "}
          <span className="font-semibold">software development</span> and{" "}
          <span className="font-semibold">machine learning</span> approaches. My interests lie in building scalable web applications, working with data-driven
          solutions, and exploring AI-powered innovations.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Interests</h3>
            <p className="text-gray-600">Software Development, Data Science, AI/ML</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Strengths</h3>
            <p className="text-gray-600">Problem-Solving, Collaboration, Adaptability</p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
     {/* Work Experience */}
<section
  id="experience"
  className="min-h-screen flex flex-col justify-center items-center px-10 bg-gradient-to-r from-blue-100 to-purple-100">

  <h2 className="text-4xl font-bold mb-12">Work Experience</h2>

  <div className="relative max-w-5xl w-full">
    {/* Timeline line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

    {/* Experience Item 1 */}
    <div className="mb-12 flex justify-between items-center w-full group">
      {/* Content Left */}
      <div className="w-5/12 text-right pr-8 transition duration-300 group-hover:bg-blue-50 group-hover:rounded-lg group-hover:shadow-md p-4">
        <h3 className="text-2xl font-semibold text-blue-600">
          Full Stack Intern
        </h3>
        <p className="text-gray-600"><b>SmartInternz | May 2025 - Jul 2025</b></p>
        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
          <li>Collaborated in a team environment to design and develop a Flight Ticket Booking application using the 
MERN stack (MongoDB, Express.js, React.js, Node.js), focusing on implementing core booking features</li>
          <li>Contributed to building RESTful APIs, integrating authentication mechanisms, and creating responsive UI 
components to improve functionality and user experience. </li>
        </ul>
      </div>

      {/* Circle */}
      <div className="relative z-10">
        <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow"></div>
      </div>

      {/* Empty Right */}
      <div className="w-5/12"></div>
    </div>

    {/* Experience Item 2 */}
    <div className="mb-12 flex justify-between items-center w-full group">
      {/* Empty Left */}
      <div className="w-5/12"></div>

      {/* Circle */}
      <div className="relative z-10">
        <div className="w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow"></div>
      </div>

      {/* Content Right */}
      <div className="w-5/12 text-left pl-8 transition duration-300 group-hover:bg-purple-50 group-hover:rounded-lg group-hover:shadow-md p-4">
        <h3 className="text-2xl font-semibold text-purple-600">
          AI & Data Science Intern
        </h3>
        <p className="text-gray-600"><b>AIMERS | May 2024 - Jul 2024</b></p>
        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
          <li>Designed and implemented interactive dashboards using Lok Sabha data in Power BI, generating actionable 
insights for data-driven decision-making, analytics, and support business strategies.</li>
          <li>Developed AI-driven solutions with Google AI Studio and Telegram API to enhance user engagement, created 
human-like chatbot </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Projects Section */}
{/* Projects */}
<section id="projects" className="py-20 px-6 md:px-12 bg-gradient-to-r from-blue-100 to-purple-100">
  <h2 className="text-4xl font-bold mb-14 text-center">Projects</h2>

  <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    {/* Project 1 */}
    <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-indigo-50 to-white hover:from-indigo-100 hover:to-white transition transform hover:-translate-y-2">
      <h3 className="text-2xl font-semibold mb-2">FlightFinder — Navigating Your Air Travel Options</h3>
      <p className="text-sm text-gray-500 mb-3">Full-Stack • MERN</p>
      <p className="text-gray-700 mb-4">
        A modern flight booking web app with role-based auth (User, Airline Owner, Admin).
        Users can search and book flights; owners add flights; admins approve listings.
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <button className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium">
        Code
      </button>
    </div>

    {/* Project 2 */}
    <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-pink-50 to-white hover:from-pink-100 hover:to-white transition transform hover:-translate-y-2">
      <h3 className="text-2xl font-semibold mb-2">Caption Generator — BLIP Image Captioning</h3>
      <p className="text-sm text-gray-500 mb-3">ML • Vision/NLP</p>
      <p className="text-gray-700 mb-4">
        Implemented image caption generation using the BLIP processor to produce
        human-like captions, with a clean inference pipeline for uploads.
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {["Python", "PyTorch", "Hugging Face", "BLIP"].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-pink-100 text-pink-800 text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <button className="px-4 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium">
        Code
      </button>
    </div>

    {/* Project 3 */}
    <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-green-50 to-white hover:from-green-100 hover:to-white transition transform hover:-translate-y-2">
      <h3 className="text-2xl font-semibold mb-2">Spotify Music Recommendation</h3>
      <p className="text-sm text-gray-500 mb-3">ML • KNN</p>
      <p className="text-gray-700 mb-4">
        Developed a personalized music recommendation system using K-Nearest Neighbors (KNN) algorithm, 
leveraging user listening history and song attributes to predict and suggest songs based on user 
preferences and behaviour patterns.
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {["Python", "Scikit-learn"].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <button className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-medium">
        Code
      </button>
    </div>

    {/* Project 4 */}
    <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-yellow-50 to-white hover:from-yellow-100 hover:to-white transition transform hover:-translate-y-2">
      <h3 className="text-2xl font-semibold mb-2">Credit Card Fraud Detection</h3>
      <p className="text-sm text-gray-500 mb-3">Data Science • Visualization</p>
      <p className="text-gray-700 mb-4">
        Developed a ML model using Python and scikit-learn, achieving 98% accuracy, performed feature engineering 
and pre-processed datasets to address class imbalance and improve performance
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {["Python", "Logistic Regression"].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <button className="px-4 py-2 rounded-lg bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium">
        Code
      </button>
    </div>
  </div>
</section>

 {/* Skills */}
<section id="skills" className="py-20 px-6 md:px-12 bg-gradient-to-r from-blue-100 to-purple-100">
  <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
    {[
      "Java",
      "Python",
      "SQL",
      "Git",
      "Statistics & Probability",
      "Data cleaning",
      "Data Preprocessing",
      "Team Collaboration",
      "Communication",
      "Problem-Solving",
    ].map((skill, index) => (
      <span
        key={index}
        className="px-6 py-3 text-center rounded-full text-sm font-medium 
                   bg-gradient-to-r from-blue-50 to-indigo-50 
                   text-gray-700 shadow-sm border border-gray-200
                   hover:from-indigo-100 hover:to-blue-100 hover:text-indigo-600 
                   hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        {skill}
      </span>
    ))}
  </div>
</section>


{/* Education */}
<section id="education" className="py-20 px-6 md:px-12 bg-gradient-to-r from-blue-100 to-purple-100">
  <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

  <div className="max-w-6xl mx-auto space-y-8">
    {/* B.Tech */}
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold">B.Tech in Computer Science & Engineering (Data Science)</h3>
          <p className="text-gray-600">St. Ann's College of Engineering & Technology</p>
          <p className="text-gray-500 mt-2">
            Specialized in <span className="font-medium text-gray-700">Data Science, Artificial Intelligence, and Software Development</span>.
          </p>
        </div>
        <span className="text-indigo-600 font-medium mt-4 md:mt-0">
          2022 – 2026
        </span>
      </div>
    </div>
   </div>
  </section>


      {/* Contact */}
      <section id="contact" className="py-20 px-6 md:px-12 bg-gradient-to-r from-blue-100 to-purple-100">
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
        <Contact />
      </section>
    </div>
  );
}
