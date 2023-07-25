// react utility
import { useRef } from "react";

// data
import { linkData } from "./link-data";

// create a unique key
import { v4 as uuidv4 } from "uuid";

// css
import styles from "../../layout.module.css";

function Link({ svg, png, alt, name, route }) {
  return (
    <a className={`${styles["box"]} ${styles["box--white"]} `} href={route}>
      <img
        onError={({ currentTarget }) => {
          currentTarget.onError = null; // prevents looping
          currentTarget.src = png;
        }}
        src={svg}
        className={styles["box__icon"]}
        alt={alt}
      />
      {name !== undefined ? <h2>{name}</h2> : null}
    </a>
  );
}

function NavLinks({ menuToggled }) {
  const navMenu = useRef(null);

  if (navMenu.current)
    menuToggled
      ? navMenu.current.classList.add(`${styles["display--none"]}`)
      : navMenu.current.classList.remove(`${styles["display--none"]}`);

  return (
    <nav ref={navMenu} className={`${styles["grid"]} ${styles["grid--nav"]} `}>
      {/* Name and icons */}
      {linkData.slice(0, 3).map((data) => {
        return (
          <Link
            key={uuidv4()}
            svg={data.svg}
            png={data.fallBack}
            alt={data.alt}
            name={data.name}
            route={data.route}
          />
        );
      })}

      {/* Just icons group */}
      <div className={`${styles["grid"]} ${styles["grid--iconGroup"]}`}>
        {linkData.slice(3).map((data) => {
          return (
            <Link
              key={uuidv4()}
              svg={data.svg}
              png={data.fallBack}
              alt={data.alt}
              name={data.name}
              route={data.route}
            />
          );
        })}
      </div>
    </nav>
  );
}

export default NavLinks;
