import { Icon } from '@iconify/react';
import { StyledLogout } from "./styles/logout.styled";

const Logout = () => {
  const removeCookie = () => {
    localStorage.removeItem("id_token");
    window.location.assign("/login");
  };

  return (
    <StyledLogout>
      <button onClick={removeCookie}>
        <p>
          Logout
        </p>
        <span>
          <Icon icon="ic:twotone-logout"/>
        </span>
      </button>
    </StyledLogout>
  );
};

export default Logout;
