

import PropTypes from "prop-types";
import DuaAtas from "../../assets/Img/DuaAtas.png"
// import gunungan from "../../assets/Img/pertahanan.png";

const Form = ({ name, setName, handleSubmit }) => (
  <section
    className="
      w-full
      pb-10
      px-4
      sm:px-6
      lg:px-8
     
      
    "
  >
    <div className="max-w-6xl mx-auto lg:px-[330px] ">
      {/* ornament */}
     <img
             src={DuaAtas}
             alt=" Atas"
             className="absolute top-0 left-0 w-full object-cover"
           />
      {/* Heading */}
      <div className="text-center mb-10 ">
        <p
         data-aos="fade-up"
          className="
           font-serif text-[11px] uppercase tracking-[0.35em] 
          
          text-yellow-200
          "
          
        >
          Your Response
        </p>

        <h2
          data-aos="zoom-in"
          className="
             font-playfair text-xl text-yellow-200 sm:text-5xl md:text-5xl lg:text-3xl xl:text-4xl
          "
        >
          Tambahkan Tamu
        </h2>

        <div className="w-20 sm:w-24 h-1  bg-white/10 mx-auto mt-4 rounded-full" />
      </div>

      {/* Form Card */}
      <div
        className="
            relative
      z-20
      w-full
      max-w-xl
      mx-auto
      rounded-2xl
      bg-white
      p-5
      shadow-xl
      sm:p-6
      md:p-8
          
        "
      >
        <form
          className="space-y-5 "
          onSubmit={handleSubmit} 
        >
          <div>
            <label
              htmlFor="name"
              className="
                block
                text-sm
                font-semibold
                text-[#D4A017]
                font-serif
                mb-2
              "
            >
              * Name
            </label>

            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Undangan"
              required
              className="
                w-full
                px-4
                py-3
                border
                border-gray-300
                rounded-lg
                outline-none
                focus:ring-2
                font-semibold
                font-playfair
                text-black
               
              "
            />
          </div>

          <button
            type="submit"
            className="
              w-full
            font-serif
              bg-gradient-to-b
          from-[#D4A017]
            via-[#e7aa10]
            to-[#b89233]
              text-white
              py-3
              rounded-lg
              transition-all
              duration-300
              font-semibold
              hover:scale-105
                font-space
            "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
);

Form.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;