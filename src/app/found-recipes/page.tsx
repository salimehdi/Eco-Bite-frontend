import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import GreenScore from "@/components/GreenScore"

const recipes = [
  { id: 1, name: "Green Salad", score: 95 },
  { id: 2, name: "Vegetable Stir Fry", score: 88 },
  { id: 3, name: "Lentil Soup", score: 92 },
  { id: 4, name: "Quinoa Bowl", score: 90 },
  { id: 5, name: "Roasted Vegetables", score: 85 },
]

export default function FoundRecipes() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">Found Recipes</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Link key={recipe.id} href={`/recipe/${recipe.id}`}>
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle>{recipe.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <GreenScore score={recipe.score} />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

