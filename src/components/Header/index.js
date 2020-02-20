import React, { useState } from "react";
import { HeaderWrapper } from "./styles/styles";
import { useHistory, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "..";

Header.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  isLightThemeAvailable: PropTypes.bool.isRequired
};

function Header(props) {
  const [searchKeyword, setSearchKeyword] = useState("");
  let history = useHistory();

  const _handleKeyDown = event => {
    if (event.key === "Enter") {
      history.push(`/search/${searchKeyword}`);
    }
  };

  return (
    <HeaderWrapper>
      <div>
        <NavLink to="/" exact>
          <p>HOME</p>
        </NavLink>
      </div>
      <div>
        <input
          type="text"
          onChange={event => setSearchKeyword(event.target.value)}
          onKeyDown={_handleKeyDown}
          placeholder="Search some GIFs"
        />
      <Button onClick={_handleKeyDown} text="SEARCH" />
      </div>
      <div>
        <p onClick={() => props.changeTheme()}>
          {props.isLightThemeAvailable ? "DARK?" : "LIGHT?"}
        </p>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
