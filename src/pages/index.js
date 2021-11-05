import React, { Fragment } from "react"
import "../all.css"
import Booking from "../components/Booking"
import Desserts from "../components/Desserts"
import Drinks from "../components/Drinks"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import MainCourse from "../components/MainCourses"
import SideNav from "../components/SideNav"

const IndexPage = () => {
  return (
    <Fragment>
      <Hero />
      <SideNav />
      <MainCourse />
      <Desserts />
      <Drinks />
      <Footer />
      <Booking />
    </Fragment>
  )
}

export default IndexPage
