import {NavLink} from "./NavLink";

export const NavLarge = () => {
  return (
    <nav>
      <NavLink text=' Home' path="/" iconClass="fa-sharp fa-solid fa-house" />
      <NavLink text=' Dager' path="/dager" iconClass="fa-sharp fa-solid fa-person" />
  </nav>
  );
};
