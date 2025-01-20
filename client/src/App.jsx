import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"

function App() {


  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/*  common cmomponents */}
      <h1>header component</h1>

      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="/login" element={<AuthLogin/>} />
          <Route path="/register" element={<AuthRegister/>} />
        
        </Route>
        
      </Routes>
    </div>  
  )
}

export default App
