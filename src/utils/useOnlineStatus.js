//Custom hook creation and internet connect check.
import { useState, useEffect } from "react";
const useOnlineStatus = () => {
  const [onleStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", (event) => {
      setOnlineStatus(false);
    });
  }, []);

  return onleStatus;
};

export default useOnlineStatus;
