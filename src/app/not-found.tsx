import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link href="/">
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          Go back home
        </Button>
      </Link>
    </div>
  )
}

