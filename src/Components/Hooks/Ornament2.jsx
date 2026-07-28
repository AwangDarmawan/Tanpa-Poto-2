
import DuaBawah from "../../assets/Img/DuaBawah.png"
import DuaAtas from "../../assets/Img/DuaAtas.png"
function Oranment2() {
  return (
    <>
      {/* Ornament Atas */}
      <img
        src={DuaAtas}
        alt=" Atas"
        className="absolute top-0 left-0 w-full object-cover"
      />

      {/* Ornament Bawah */}
      <img
        src={DuaBawah}
        alt="Bawah"
        className="absolute bottom-0 left-0 w-full object-cover"
      />
    </>
  )
}

export default Oranment2
