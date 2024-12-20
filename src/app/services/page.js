export default function ServicesPage() {
    return (
      <main className="bg-gray-100 text-gray-800 min-h-screen py-16 px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl flex-grow">
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold mb-4">Design Consultation</h2>
            <p>Expert advice on the best ducting solutions for your projects.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold mb-4">Manufacturing</h2>
            <p>State-of-the-art manufacturing processes for top-quality ducts.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold mb-4">Installation</h2>
            <p>Efficient and reliable installation services for all duct systems.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold mb-4">Repairs & Maintenance</h2>
            <p>Comprehensive support to keep your systems running at peak efficiency.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold mb-4">Project Management</h2>
            <p>End-to-end management for seamless project execution.</p>
          </div>
        </div>
      </main>
    );
  }
  