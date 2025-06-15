import Login from "./login/login"
import Register from "./login/register"
import Site from "./web/website";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dash from "./pages/dashboard";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Site />} />
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
          <Route path="dashboard" element={<Dash />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
