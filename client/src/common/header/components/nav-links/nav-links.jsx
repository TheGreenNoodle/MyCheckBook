// link data
import { named, noName } from "./link-data";

// create a unique key
import { v4 as uuidv4 } from "uuid";

// common css
// box styles
import background from "../../../../common/css/color/background-color.module.css";

// size
import icon from "../../../../common/css/size/icon-size.module.css";

// text
import textSize from "../../../../common/css/size/text-size.module.css";

// nav link css
import navLink from "./nav-links.module.css";

function Link({ svg, png, alt, name, route, nameExist }) {
  return (
    <a
      className={`  ${background.whiteWithOutline} $
      }`}
      href={"/"}>
      <img
        className={`${icon.large}`}
        src={svg}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = png;
        }}
        alt={alt}
      />
      {nameExist ? (
        <p className={`${textSize.small} ${navLink.name}`}>{name}</p>
      ) : null}
    </a>
  );
}

function NavLinks() {
  return (
    <nav className={navLink.grid}>
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
      <div className={navLink.smBtnGroup}>
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
