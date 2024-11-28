'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import GreenScore from "@/components/GreenScore"

const suggestedRecipes = [
  { id: 1, name: "Vegan Lentil Curry", score: 98 },
  { id: 2, name: "Zucchini Noodles with Pesto", score: 95 },
  { id: 3, name: "Quinoa Stuffed Bell Peppers", score: 92 },
  { id: 4, name: "Chickpea and Spinach Stew", score: 90 },
]

export default function GreenScorePage() {
  const [recipeName, setRecipeName] = useState('')
  const [score, setScore] = useState<number | null>(null)

  const calculateScore = () => {
    // This is a placeholder function. In a real app, you'd calculate the score based on ingredients, cooking method, etc.
    setScore(Math.floor(Math.random() * 30) + 70)
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">Recipe Green Score</h1>

      <Card>
        <CardHeader>
          <CardTitle>Calculate Green Score</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Enter recipe name"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
          />
          <Button onClick={calculateScore} className="w-full">Calculate Score</Button>
        </CardContent>
      </Card>

      {score !== null && (
        <Card>
          <CardHeader>
            <CardTitle>{recipeName}</CardTitle>
          </CardHeader>
          <CardContent>
            <GreenScore score={score} />
          </CardContent>
        </Card>
      )}

      <h2 className="text-2xl font-bold mt-12 mb-4">Suggested Green Recipes</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {suggestedRecipes.map((recipe) => (
          <Card key={recipe.id}>
            <CardHeader>
              <CardTitle>{recipe.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <GreenScore score={recipe.score} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

