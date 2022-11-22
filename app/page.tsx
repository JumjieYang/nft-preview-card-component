import React from 'react';
import { Card } from "../components/Card"

const HomePage= () => {
  return (
    <main className="card-container">
      <Card 
        cardID="001" 
        user={{avatarID: '001'}} 
        image={{imageURL: '/image-equilibrium.jpg'}} />
    </main>
  )
}

export default HomePage;