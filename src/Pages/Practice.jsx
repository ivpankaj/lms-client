import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Layout from '../Components/Layout'

const api = process.env.REACT_APP_API_URL

const Practice = () => {
  const [testData, setTestData] = useState([])
  const [selected, setSelected] = useState(null)
  const navigate = useNavigate()

  const courseId = Cookies.get("courseId")
  const token = Cookies.get("token")
  console.log("Course ID:", courseId)
  console.log("rtfjghbjn:", testData);


  const getTests = async () => {
    try {
      const response = await fetch(`${api}mcq/getAll`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'authorization': token
        }
      })
      console.log("Response from practice page:", response)
      const data = await response.json()
      setTestData(data)
    } catch (error) {
      console.error('Error fetching tests data', error)
    }
  }

  useEffect(() => {
    getTests()
  }, [api])

  const handleButtonClick = (id) => {
    setSelected(id)
    navigate(`/dashboard/practices/${id}`)
  }

  return (
    <Layout>
      <div className="w-full h-full overflow-y-auto">
        <h1 className="text-2xl font-extrabold text-gray-900 sm:mt-8 mb-8 lg:mt-2">Choose Your Exam</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl">
          {testData.map((test, index) => {
            const colors = ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-purple-500"]
            return (
              <div
                key={test.id}
                className={`p-6 border border-gray-300 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 ${colors[index]}`}
              >
                <h2 className="text-lg font-semibold text-white">{test.title}</h2>
                <button
                  className="mt-4 px-6 py-3 text-white font-semibold rounded-lg transition-colors hover:bg-opacity-90"
                  onClick={() => handleButtonClick(test.id)}
                >
                  Take Exam
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Practice