import Logo from "../Logo";
import styles from "./Header.module.css";
import { ReactComponent as SearchIcon } from "./search-interface-symbol.svg";
import cn from "classnames";

const Header = () => {
  return (
    <header className={styles.Wrapper}>
      <div className={cn([styles.IconWrapper, styles.HamburgerWrapper])}>
        <div className={styles.Hamburger}>
          <div className={styles.HamburgerLine}></div>
          <div className={styles.HamburgerLine}></div>
          <div className={styles.HamburgerLine}></div>
        </div>
      </div>
      <nav className={styles.NavLeft}>
        <div className={cn([styles.NavItem, styles.activeNavItem])}>Homes</div>
        <div className={styles.NavItem}>Hosts</div>
      </nav>
      <div className={styles.LogoWrapper}>
        <Logo />
      </div>
      <nav className={styles.NavRight}>
        <div className={styles.NavItem}>Need help?</div>
        <div className={styles.NavItem}>Login</div>
      </nav>
      <div className={cn([styles.IconWrapper, styles.searchIconWrapper])}>
        <SearchIcon className={styles.SearchIcon} />
      </div>
    </header>
  );
};

export default Header;
