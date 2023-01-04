import { apiUpdateValue } from "../backendAPIs/fetchAPI";

const updateValueAPI = (value, self, openPedal, setOpenPedal) => {
    const tempPedal = openPedal;
        tempPedal.controls.forEach((control) => {
          if (control._id === self._id) {
            control.value = value;
            apiUpdateValue(control);
          }
        });
        setOpenPedal(tempPedal);
};

export { updateValueAPI };
