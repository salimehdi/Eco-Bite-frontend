import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import GreenScore from "@/components/GreenScore"

const recipes = [
  {
    id: 1,
    name: "Green Salad",
    score: 95,
    ingredients: [
      "2 cups mixed greens",
      "1/4 cup cherry tomatoes",
      "1/4 cup cucumber, sliced",
      "2 tbsp olive oil",
      "1 tbsp balsamic vinegar",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Wash and dry the mixed greens.",
      "Cut the cherry tomatoes in half and slice the cucumber.",
      "In a large bowl, combine the greens, tomatoes, and cucumber.",
      "In a small bowl, whisk together olive oil, balsamic vinegar, salt, and pepper.",
      "Drizzle the dressing over the salad and toss gently to combine.",
      "Serve immediately and enjoy your fresh, green salad!"
    ]
  },
  // Add more recipes here...
]

export default function Recipe({ params }: { params: { id: string } }) {
  const recipe = recipes.find(r => r.id === parseInt(params.id))

  if (!recipe) {
    return <div>Recipe not found</div>
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">{recipe.name}</h1>

      <GreenScore score={recipe.score} />

      <Card>
        <CardHeader>
          <CardTitle>Ingredients</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Instructions</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal pl-5">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="mb-2">{instruction}</li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}

