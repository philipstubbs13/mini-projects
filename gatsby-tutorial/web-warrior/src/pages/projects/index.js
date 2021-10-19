import React from "react"
import Layout from "../../components/Layout"
import { portfolio } from "../../styles/projects.module.css"

export default function Project() {
  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
      </div>
    </Layout>
  )
}
