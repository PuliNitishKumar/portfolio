export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">FlightFinder</h3>
            <p className="text-gray-600">A full-stack flight booking web app using React, Node.js, Express, and MongoDB with admin dashboard and user bookings.</p>
          </div>
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Caption Generator</h3>
            <p className="text-gray-600">Built an image caption generator using BLIP processor and deep learning models for NLP + CV tasks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
