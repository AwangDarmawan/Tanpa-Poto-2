import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import CoverPage from "./Pages/CoverPage"
import HomePage from "./Pages/HomePage";

import AdminPage from "./Pages/AdminPage";
import PesanAdminPage from "./Pages/PesanAdminPage";


function App() {


  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<AdminPage/>} />
               <Route path="/admin/pesan" element={<PesanAdminPage/>} />
             <Route path="/:nama" element={<HomePage />} />
               {/* <Route path="/:nama" element={<CoverPage/>} /> */}
          </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
    </BrowserRouter>
    </>
  )
}

export default App
