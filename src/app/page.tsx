import './globals.css'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Utensils, Users, Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-green-600 md:text-5xl lg:text-6xl">Welcome to EcoBite</h1>
        <p className="text-xl text-gray-600 md:text-2xl">"Cook green, live clean."</p>
        <div className="flex justify-center space-x-4">
          <Link href="/get-recipe">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white transition-colors duration-200">
              Get Started
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Leaf className="mr-2 h-5 w-5 text-green-600" />
              Eco-Friendly Recipes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Discover recipes that are good for you and the planet.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Utensils className="mr-2 h-5 w-5 text-green-600" />
              Easy to Cook
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Simple, delicious recipes for cooks of all skill levels.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-green-600" />
              Community Driven
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Share and discover recipes from our eco-conscious community.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="mr-2 h-5 w-5 text-green-600" />
              Global Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Make a positive impact on the environment with every meal.</p>
          </CardContent>
        </Card>
      </section>

      <section className="bg-green-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">How It Works</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-center">
            <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">1</div>
            <h3 className="font-semibold mb-2">Choose Your Ingredients</h3>
            <p className="text-gray-600">Select from a wide range of eco-friendly ingredients.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">2</div>
            <h3 className="font-semibold mb-2">Get Personalized Recipes</h3>
            <p className="text-gray-600">Receive custom recipes based on your selections.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">3</div>
            <h3 className="font-semibold mb-2">Cook and Enjoy</h3>
            <p className="text-gray-600">Follow easy instructions to create delicious, sustainable meals.</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to start your eco-friendly cooking journey?</h2>
        <Link href="/signup">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white transition-colors duration-200">
            Sign Up Now
          </Button>
        </Link>
      </section>
    </div>
  )
}

