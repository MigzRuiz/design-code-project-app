import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Card from '../components/Card';

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to design and code React Apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift</p>
        <Link to="/page-2/">Watch the video</Link>
      </div>
    </div>
    <div className="Cards">
      <h2>11 Courses, more coming</h2>
      <div className="CardGroup">
        <Card 
          title="React for Designers"
          text="12 Sections"
          image={require("../images/wallpaper.jpg")}
        />
        <Card 
          title="Design Systems"
          text="12 Sections"
          image={require("../images/wallpaper2.jpg")}
        />
        <Card 
          title="Sound Design"
          text="12 Sections"
          image={require("../images/wallpaper3.jpg")}
        />
        <Card 
          title="ARKit 2"
          text="12 Sections"
          image={require("../images/wallpaper4.jpg")}
        />  
      </div>
      
    </div>
  </Layout>
)
export default IndexPage
