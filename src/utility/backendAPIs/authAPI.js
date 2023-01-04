import url from "./APIURL";

const registerUser = async (email, password) => {
  try {
    const res = await fetch(`${url}/api/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("tone-token-user", data.token);
    }
    return data;
  } catch (err) {
    window.alert(err);
    return;
  }
};

const loginUser = async (email, password) => {
  try {
    const res = await fetch(`${url}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("tone-token-user", data.token);
    }
    return data;
  } catch (err) {
    window.alert(err);
    return;
  }
};

const getUser = async (token) => {
  try {
    const res = await fetch(`${url}/api/user/current`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    window.alert(err);
    return;
  }
};

export { registerUser, loginUser, getUser };
