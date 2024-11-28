'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, X } from 'lucide-react'

export default function GetRecipe() {
  const [ingredients, setIngredients] = useState([''])
  const [isScanning, setIsScanning] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [stream, setStream] = useState<MediaStream | null>(null)

  useEffect(() => {
    // Cleanup stream when the component unmounts
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
        console.log("Camera stopped and resources released.")
      }
    }
  }, [stream])

  const addIngredient = () => {
    setIngredients([...ingredients, ''])
  }

  const removeIngredient = (index: number) => {
    const newIngredients = ingredients.filter((_, i) => i !== index)
    setIngredients(newIngredients)
  }

  const updateIngredient = (index: number, value: string) => {
    const newIngredients = [...ingredients]
    newIngredients[index] = value
    setIngredients(newIngredients)
  }

  const startScanning = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const videoStream = await navigator.mediaDevices.getUserMedia({ video: true })
        setStream(videoStream)
        if (videoRef.current) {
          console.log("Video stream set successfully", videoRef.current)
          videoRef.current.srcObject = videoStream
        }
        setIsScanning(true)
      } catch (error) {
        console.error("Error starting camera:", error)
        alert("Unable to access the camera. Please check your permissions and try again.")
      }
    } else {
      alert("Camera is not supported on this device.")
    }
  }

  const stopScanning = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop())
      console.log("Camera stopped")
    }
    setStream(null)
    setIsScanning(false)
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Get Recipe</h1>

      {/* Scan Recipe Card */}
      <Card>
        <CardHeader>
          <CardTitle>Scan Recipe</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          {!isScanning ? (
            <div className="flex flex-col items-center justify-center space-y-4">
              <Button className="w-full" onClick={()=>{
                setIsScanning(true)
                setTimeout(() => {
                  startScanning();
                }, 0)
              }}>
                <Camera className="mr-2 h-4 w-4" /> Scan Recipe
              </Button>
              <p className="text-lg text-gray-500">Click to scan your recipe</p>
            </div>
          ) : (
            <div className="relative w-full">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-auto rounded-lg border border-gray-200"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4"
                onClick={stopScanning}
              >
                <X className="h-4 w-4" />
              </Button>
              <p className="text-center text-lg mt-4">Scanning in progress...</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Ingredients Section */}
      <Card>
        <CardHeader>
          <CardTitle>Ingredients</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Input
                value={ingredient}
                onChange={(e) => updateIngredient(index, e.target.value)}
                placeholder={`Ingredient ${index + 1}`}
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => removeIngredient(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button onClick={addIngredient} className="w-full">
            Add Ingredient
          </Button>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4">
        <Button variant="outline" className="w-full md:w-auto">
          Cancel
        </Button>
        <Button className="bg-green-600 hover:bg-green-700 text-white w-full md:w-auto">
          Find Recipes
        </Button>
      </div>
    </div>
  )
}
