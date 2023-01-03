import { createContext, useState, useCallback } from "react";
import axios from "axios";

const DevicesContext = createContext();

function DevicesProvider({ children }) {
  const [devices, setDevices] = useState([]);

  const fetchDevices = useCallback(async () => {
    const response = await axios.get("http://localhost:3005/devices");
    setDevices(response.data);
  }, []);

  const editDevicesById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3005/devices/${id}`, {
      title: newTitle,
    });
    const updatedDevices = devices.map((device) => {
      if (device.id === id) {
        return { ...device, ...response.data };
      }
      return device;
    });
    setDevices(updatedDevices);
  };

  const deleteDeviceById = async (id) => {
    await axios.delete(`http://localhost:3005/devices/${id}`);
    const updatedDevices = devices.filter((device) => {
      return device.id !== id;
    });
    setDevices(updatedDevices);
  };

  const createDevice = async (device) => {
    const response = await axios.post("http://localhost:3005/devices", {
      device,
    });
    const updatedDevices = [...devices, response.data];
    setDevices(updatedDevices);
  };

  const valueToShare = {
    devices,
    deleteDeviceById,
    editDevicesById,
    createDevice,
    fetchDevices,
  };

  return (
    <DevicesContext.Provider value={valueToShare}>
      {children}
    </DevicesContext.Provider>
  );
}

export { DevicesProvider };
export default DevicesContext;
