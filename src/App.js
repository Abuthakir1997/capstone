import Home from "./routes/home/home.component";
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in";
const Shop = () => {
  return (
    <div>
      <Outlet></Outlet>
      <h1>i am a shop page</h1>

    </div>

  )
}


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop></Shop>}></Route>
        <Route path="signIn" element={<SignIn></SignIn>}></Route>
      </Route>
    </Routes >

  )
}

export default App;