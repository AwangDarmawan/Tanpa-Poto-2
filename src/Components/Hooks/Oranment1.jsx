
import SatuBawah from "../../assets/Img/SatuBawah.png"
import SatuAtas from "../../assets/Img/SatuAtas.png"
function Oranment1() {
  return (
    <>
      {/* Ornament Atas */}
      <img
        src={SatuAtas}
        alt=" Atas"
        className="absolute top-0 left-0 w-full object-cover"
      />

      {/* Ornament Bawah */}
      <img
        src={SatuBawah}
        alt="Bawah"
        className="absolute bottom-0 left-0 w-full object-cover"
      />
    </>
  )
}

export default Oranment1
