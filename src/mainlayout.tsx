import Navbar from './layout/navbar'
import Feed from './layout/feed'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto py-8">
        <Feed />
      </main>
    </div>
  )
}