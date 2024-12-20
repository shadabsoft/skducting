import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="bg-gray-50 text-gray-500 min-h-screen flex flex-col">
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="absolute inset-0 bg-white bg-opacity-100 flex justify-center items-center">
          <h1 className="text-black text-4xl md:text-6xl font-bold text-center px-4">Welcome to SK Air Ducting Systems</h1>
        </div>
      </section>

      <section className="py-16 px-4 text-center flex-grow">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Expertise</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition">
            <h3 className="text-2xl font-semibold mb-4">Custom Duct Design</h3>
            <p>We provide precision-engineered custom duct designs tailored to your needs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition">
            <h3 className="text-2xl font-semibold mb-4">Efficient Installation</h3>
            <p>Our team ensures seamless installation for all ducting systems.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition">
            <h3 className="text-2xl font-semibold mb-4">Maintenance & Support</h3>
            <p>Comprehensive support and maintenance to keep your systems running smoothly.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-grey-500  bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg text-center flex-grow">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Why Choose Us?</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className=" bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">Quality Assurance</h3>
            <p>Top-notch quality in every project we undertake.</p>
          </div>
          <div className="  bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">Expert Team</h3>
            <p>Highly skilled professionals with years of experience.</p>
          </div>
          <div className="  bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">Timely Delivery</h3>
            <p>We value your time and ensure prompt project completion.</p>
          </div>
          <div className=" bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">Customer Satisfaction</h3>
            <p>Your satisfaction is our priority.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
