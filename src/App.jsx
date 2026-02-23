export default function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">

      {/* Hero */}
      <section className="text-center py-20 bg-gray-900">
        <h1 className="text-5xl font-bold text-blue-500">
          Prajwal Kukade
        </h1>

        <p className="mt-4 text-xl text-gray-300">
          Software Tester | Python Developer | QA Engineer
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="bg-green-600 px-6 py-2 rounded-lg hover:bg-green-700" >
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/prajwal-kukade-4b4253350/"
            target="_blank"
            className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/prajwalkukade01"
            target="_blank"
            className="bg-gray-700 px-6 py-2 rounded-lg hover:bg-gray-800"
          >
            GitHub
          </a>

        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-blue-400 mb-4">
          About Me
        </h2>

        <p className="text-gray-300 leading-relaxed">
          I am an IT graduate with strong experience in Software Testing,
          Automation, and Full Stack Development. Passionate about building
          reliable and scalable applications.
        </p>

      </section>

      {/* Skills */}
      <section className="bg-gray-900 py-16">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {[
              "Python",
              "Selenium",
              "React",
              "SQL",
              "Flask",
              "Postman",
              "AWS",
              "Git",
              "Manual Testing",
              "Automation",
              "Docker",
              "JIRA",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-800 py-2 rounded text-center"
              >
                {skill}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-blue-400 mb-6">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">
              AI Chatbot Assistant
            </h3>

            <p className="mt-2 text-gray-400">
              Voice-based assistant using Python and APIs.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">
              Hospital Management System
            </h3>

            <p className="mt-2 text-gray-400">
              PHP & MySQL based automation system.
            </p>
          </div>

        </div>

      </section>

      {/* Contact */}
      <section className="bg-gray-900 text-center py-16">

        <h2 className="text-3xl font-bold text-blue-400 mb-4">
          Contact
        </h2>

        <p>Email: prajwal.kukade01@gmail.com</p>
        <p>Phone: +91-9763756534</p>

        <p className="mt-4 text-gray-500">
          © 2026 Prajwal Kukade
        </p>

      </section>

    </div>
  );
}
