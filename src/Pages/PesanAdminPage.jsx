// import PesanAdmin from "../Components/Admin/PesanAdmin"
import Footer from "../Components/Footer"
import NavbarAdmin from "../Components/Admin/NavbarAdmin"
import PesanKosong from "../Components/Admin/PesanKosong"



function PesanAdminPage() {
  return (
    <>
   
    <NavbarAdmin />
       <div className="max-w-6xl mx-auto p-4">
        {/* <PesanAdmin /> */}
        <PesanKosong/>
      </div>
      <Footer/>
     
      
    </>
  )
}

export default PesanAdminPage
