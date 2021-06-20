import React from "react"
import MainHomeInfo from "../Home/MainHomeInfo"
import ChooseWhatToLearn from "../Home/ChooseWhatToLearn"
import Container from "../layer/Container"
import OnlineEmlation from "../Home/OnlineEmulation"
import WhyThisCourses from "../Home/WhyThisCourses";
import Footer from "../layer/Footer";

const Home = () => {
  return (
    <>
      <div className='home'>
        <Container>
          <MainHomeInfo />
          <ChooseWhatToLearn />
          <OnlineEmlation />
          <WhyThisCourses />
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default Home
