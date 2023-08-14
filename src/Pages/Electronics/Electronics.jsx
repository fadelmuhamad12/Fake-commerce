import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";
import Navbar from "../../Components/Navbar/Navbar";
import ElectronicSelected from "./ElectronicSelected";

const Electronics = () => {
  const [electronics, setElectronics] = useState([]);
  const [selectedElectronic, setSelectedElectronic] = useState(null);
  const [modal, setModal] = useState(false);

  const fetchElectronics = async () => {
    try {
      const electronics = await axios.get(
        "https://fakestoreapi.com/products/category/electronics"
      );
      console.log(electronics.data);
      setElectronics(electronics.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowModal = (electronic) => {
    setSelectedElectronic(electronic);
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  useEffect(() => {
    fetchElectronics();
  }, []);

  return (
    <>
      <Navbar />
      {electronics.map((electronic) => {
        return (
          <div className="w-3/4">
            <div className="bg-slate-200">
              <Cards>
                <div className="flex flex-row">
                  <img src={electronic.image} alt="Photo" />
                  <p>{electronic.title}</p>
                  <p>{electronic.price}</p>
                  <div>
                    <button
                      className="bg-blue-400 rounded-md  px-4 py-1 ml-2"
                      onClick={handleShowModal}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </Cards>
            </div>
          </div>
        );
      })}

      <ElectronicSelected
        handleCloseModal={handleCloseModal}
        selectedElectronic={selectedElectronic}
        modal={modal}
      />
    </>
  );
};

export default Electronics;
