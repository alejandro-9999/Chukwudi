import HomePage from '../components/pages/home/home'
import type { NextPage } from 'next'
import {Provider} from "react-redux";
import store from '../store/store';



const Home: NextPage = () => {
  return (
    <>
    <Provider  store={store}>
      <HomePage/>
      </Provider>
    </>
  )
}

export default Home
