import React from "react"
import MainHomeInfo from "../Home/MainHomeInfo"
import ChooseWhatToLearn from "../Home/ChooseWhatToLearn"
import Container from "../layer/Container"
import OnlineEmlation from "../Home/OnlineEmulation"

const Home = () => {
  return (
    <div className='home'>
      <Container>
        <MainHomeInfo />
        <ChooseWhatToLearn />
        <OnlineEmlation />
      </Container>
    </div>
  )
}

export default Home
