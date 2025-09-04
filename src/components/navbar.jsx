export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Nitish Kumar</h1>
        <div className="space-x-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
}
