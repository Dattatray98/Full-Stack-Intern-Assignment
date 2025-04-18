import { useState } from 'react'
import './App.css'

function App() {
  const [exercise, setExercise] = useState("");
  const [feedback, setFeedback] = useState("Get ready for exercise!");

  const exercises = ["Squats", "Push-ups", "Lunges"];


  return (
    <>
      <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold text-center">Posturify</h1>
      </header>

      {/* Main content */}
      <main className="p-4">
        {/* Exercise Selection */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Choose an Exercise</h2>
          <div className="flex justify-around mt-4">
            {exercises.map((exerciseOption) => (
              <button
                key={exerciseOption}
                onClick={() => setExercise(exerciseOption)}
                className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition"
              >
                {exerciseOption}
              </button>
            ))}
          </div>
        </div>

        {/* Feedback Area */}
        <div className="mt-6 p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold">Exercise: {exercise}</h3>
          <p className="mt-2 text-gray-600">{feedback}</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 Posturify. All Rights Reserved.</p>
      </footer>
    </div>
     
    </>
  )
}

export default App
