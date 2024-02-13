import Details from '@/components/Details'
import ExerciseVideos from '@/components/ExerciseVideos'
import React from 'react'

function ExerciseDetail({cardValue}) {
  return (
    <div>
      <Details cardValue={cardValue} />
    </div>
  )
}

export default ExerciseDetail