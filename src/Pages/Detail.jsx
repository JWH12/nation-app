import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail({countries}) {

  const params = useParams();

  return (
    <div>
      <h1>상세페이지</h1>
      <p>동물: {params.id}</p>
    </div>
  )
}

