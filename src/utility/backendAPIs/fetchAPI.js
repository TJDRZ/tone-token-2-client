import { getUser } from "./authAPI";

const apiGet = async (type) => {
  try {
    const token = localStorage.getItem("tone-token-user");
    const user = await getUser(token);
    const res = await fetch(`/api/${type}/${user._id}`, {
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

const apiGetChild = async (type, parent) => {
  try {
    const token = localStorage.getItem("tone-token-user");
    const user = await getUser(token);
    const res = await fetch(`/api/${type}/${parent}/${user._id}`, {
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

const apiCreate = async (item, parent) => {
  try {
    const token = localStorage.getItem("tone-token-user");
    const user = await getUser(token);
    await fetch(`/api/${item.type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ item, parent, user }),
    });
  } catch (err) {
    window.alert(err);
    return;
  }
};

const apiNameChange = async (item) => {
  try {
    const token = localStorage.getItem("tone-token-user");
    const user = await getUser(token);
    await fetch(`/api/${item.type}/nameChange`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ item, user }),
    });
  } catch (err) {
    window.alert(err);
    return;
  }
};

const apiUpdateValue = async (item) => {
  try {
    const token = localStorage.getItem("tone-token-user");
    const user = await getUser(token);
    await fetch(`/api/${item.type}/updateValue`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ item, user }),
    });
  } catch (err) {
    window.alert(err);
    return;
  }
};

const apiUpdateIndex = async (item) => {
  try {
    const token = localStorage.getItem("tone-token-user");
    const user = await getUser(token);
    await fetch(`/api/${item.type}/updateIndex`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ item, user }),
    });
  } catch (err) {
    window.alert(err);
    return;
  }
};

const apiDelete = async (item) => {
  try {
    const token = localStorage.getItem("tone-token-user");
    const user = await getUser(token);
    await fetch(`/api/${item.type}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ item, user }),
    });
  } catch (err) {
    window.alert(err);
    return;
  }
};

export {
  apiGet,
  apiGetChild,
  apiCreate,
  apiNameChange,
  apiUpdateValue,
  apiUpdateIndex,
  apiDelete,
};
