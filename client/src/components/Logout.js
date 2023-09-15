const Logout = () => {
  const removeCookie = () => {
    localStorage.removeItem("id_token");
    window.location.assign("/login");
  };

  return <button onClick={removeCookie}>Log Out</button>;
};

export default Logout;
