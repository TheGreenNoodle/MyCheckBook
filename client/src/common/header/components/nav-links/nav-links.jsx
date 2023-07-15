// link data
import { named, noName } from "./link-data";

// create a unique key
import { v4 as uuidv4 } from "uuid";

// css
import styles from "../../layout.module.css";

function Link({ svg, png, alt, name, route, nameExist }) {
  return (
    <a className={`${styles["box"]} ${styles["box--white"]}`} href={route}>
      <img
        className={styles[("box__icon", "box__icon--large")]}
        src={svg}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = png;
        }}
        alt={alt}
      />
      {nameExist ? <h2>{name}</h2> : null}
    </a>
  );
}

function NavLinks() {
  return (
    <nav>
      {/* Name and icons */}
      {named.map((data) => {
        return (
          <Link
            key={uuidv4()}
            nameExist={true}
            svg={data.svg}
            png={data.fallBack}
            alt={data.alt}
            name={data.name}
            route={data.route}
          />
        );
      })}

      {/* Just icons group */}
      <div>
        {noName.map((data) => {
          return (
            <Link
              key={uuidv4()}
              nameExist={false}
              svg={data.svg}
              png={data.fallBack}
              alt={data.alt}
              route={data.route}
            />
          );
        })}
      </div>
    </nav>
  );
}

export default NavLinks;
