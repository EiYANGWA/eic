import { ProfileData } from "../add/app1/myport";

export default function Feed() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Banner */}
        <div className="h-32 bg-gradient-to-r from-pink-400 to-indigo-500"></div>
        
        {/* Profile Info */}
        <div className="px-6 pb-6">
          <div className="-mt-12 mb-4">
            <div className={`w-24 h-24 rounded-full border-4 border-white ${ProfileData.avatarColor} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
              AL
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900">{ProfileData.name}</h2>
          <p className="text-indigo-600 font-medium mb-2">{ProfileData.title}</p>
          <p className="text-gray-600 leading-relaxed">{ProfileData.bio}</p>
          
          <button className="mt-6 w-full py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition">
            Follow
          </button>
        </div>
      </div>
    </div>
  )
}