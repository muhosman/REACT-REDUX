import { GiConfirmed, GiCancel } from "react-icons/gi";
import useDevicesContext from "../hooks/use-device-context";

function DeleteDeviceModal({ deleted, onClick, setDeleted }) {
  const { deleteDeviceById } = useDevicesContext();
  const handleCloseModel = (bool) => {
    if (bool) {
      deleted.map((el) => {
        deleteDeviceById(el);
      });
      setDeleted(null);
    }
    onClick();
    window.location.reload(true);
  };

  return (
    <div>
      <div className=" flex flex-col gap-3 bg-yellow-800  mx-auto w-fit p-1 rounded-xl ">
        <div className="bg-white rounded-xl p-4 flex flex-col items-center">
          <p className="mb-4">tipindeki cihazı yüklemek istiyor musunuz?</p>
          <div className="flex gap-2">
            <button
              onClick={() => handleCloseModel(true)}
              className="flex items-center bg-yellow-800 text-white p-2 rounded-xl
            hover:bg-yellow-600"
            >
              <GiConfirmed />
              Onay
            </button>
            <button
              onClick={() => handleCloseModel(false)}
              className="flex items-center bg-white text-yellow-800 border-4 rounded-xl p-2 hover:bg-yellow-600 hover:text-white"
            >
              <GiCancel />
              İptal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteDeviceModal;
