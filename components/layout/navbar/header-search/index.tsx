import HeaderLogin from "./login";
import SearchInput from "./inputsearch";
import Logo from "./logo";
import ButtonMenuBar from "./menu-bar/button";

const HeaderSearch = () => {
  return (
    <div className="header__search">
      <div className="container">
        <div className="header__search__data">
          <ButtonMenuBar />
          <HeaderLogin />
          <SearchInput />
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
