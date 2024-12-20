export default function ProjectsPage() {
    return (
      <main className="bg-gray-100 text-gray-800 min-h-screen py-16 px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Projects</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl flex-grow">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <img src="/images/project1.jpg" alt="Project 1" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Industrial Ventilation</h2>
              <p>High-performance ventilation systems for industrial applications.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <img src="/images/project2.jpg" alt="Project 2" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Commercial HVAC</h2>
              <p>Energy-efficient HVAC solutions for commercial buildings.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <img src="/images/project3.jpg" alt="Project 3" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Residential Ducting</h2>
              <p>Custom ducting solutions for homes of all sizes.</p>
            </div>
          </div>
        </div>
      </main>
    );
  }
  