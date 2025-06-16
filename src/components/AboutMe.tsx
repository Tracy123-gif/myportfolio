

const AboutMe = () => {
  return (
   
    <div id="about" className="py-20 relative min-h-screen justify-center h-screen">

              {/* Background elements */}
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl "></div>
      <div className="absolute left-0 bottom-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>


        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-blue-400">&lt;</span> ABOUT ME <span className="text-blue-400">/&gt;</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

      <p className="text-lg m-auto text-gray-300 max-w-2xl text-center">
        I'm a full-stack developer with a focus on the MERN stack. I build fast, responsive web applications with clean code and a strong attention to user experience. My approach is simple—solve real problems, write maintainable code, and keep improving.

        I’ve worked on projects ranging from landing pages to complex dashboards, and I enjoy both frontend design and backend logic. I’m constantly learning new tools and best practices to stay sharp and deliver quality work.

        Outside of code, I’m curious about product design, community building, and the role of tech in everyday life. I’m always open to new challenges, collaborations, and opportunities to grow as a developer.
      </p>


    </div>
  )
}

export default AboutMe