export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold text-indigo-600">MyPort.io</h1>
      <div className="flex gap-4">
        <button className="text-gray-600 hover:text-indigo-600 transition">Home</button>
        <div className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-200"></div>
      </div>
    </nav>
  )
}