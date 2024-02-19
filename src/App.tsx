import { Route, Routes } from "react-router-dom";

import TestPage from "./views/TestPage";

function App() {

  return (
    <>
        <Routes>
            <Route path="*" element={<TestPage />} />
        </Routes>  
    </>
  )
}

export default App
