import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import ViaggioSingoloPage from "./pages/ViaggioSingoloPage"
import Notfound from "./pages/NotFound"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route element={<Home />} path="/" />
            <Route element={<ViaggioSingoloPage />} path="/viaggio/:id" />
            <Route element={<Notfound />} path="*" />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
