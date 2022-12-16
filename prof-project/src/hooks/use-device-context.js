import { useContext } from "react";
import DevicesContext from "../context/devices.js";

function useDevicesContext() {
  return useContext(DevicesContext);
}

export default useDevicesContext;
