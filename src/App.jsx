import { Box } from "@chakra-ui/react"
import Page3 from "./pages/Page3"
import HomePage from "./pages/HomePage"
import {HashRouter, Routes, Route} from "react-router-dom"
import Footbar from "./component/Footbar"
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"
import Sidebar from "./component/Sidebar"


function App() {
  return (
    <HashRouter>
    <Box minH = {"100vh"}>
      <Sidebar/>
    <Routes>
      <Route path = "/" element={<HomePage/>}/>
      <Route path = "/page3" element={<Page3  />}/>
      <Route path = "/page1" element={<Page1/>}/>
      <Route path = "/page2" element={<Page2  />}/>
    </Routes>
    <Footbar/>
    </Box>
    </HashRouter>
  )
}

export default App
