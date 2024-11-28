import { Progress } from "@/components/ui/progress"

interface GreenScoreProps {
  score: number
}

export default function GreenScore({ score }: GreenScoreProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Green Score</h2>
      <div className="flex items-center space-x-4">
        <Progress value={score} className="w-full" />
        <span className="text-2xl font-bold text-green-600">{score}</span>
      </div>
    </div>
  )
}

