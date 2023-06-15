// link data
import { named, noName } from "./link-data";

// common css
// box styles
import background from "../../../../common/css/color/background-color.module.css";
import borderRadius from "../../../../common/css/border/border-radius.module.css";

// size
import icon from "../../../../common/css/size/icon-size.module.css";

// text
import textColor from "../../../../common/css/color/text-color.module.css";
import textSize from "../../../../common/css/size/text-size.module.css";

// position
import align from "../../../../common/css/position/box-align.module.css";

// nav link css
import navLink from "./nav-links.module.css";

function Link({ svg, fallBack, alt, name, route }) {
  return (
    <a
      className={`${borderRadius.elevenPx} ${textColor.black} ${textSize.small} ${background.whiteWithOutline} ${align.flexMid}`}
      href={route}>
      <img className={`${icon.large}`} src={svg} onerror={fallBack} alt={alt} />
      {name !== undefined ? <p className={navLink.name}>{name}</p> : null}
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
            svg={data.svg}
            fallBack={data.fallBack}
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
              svg={data.svg}
              fallBack={data.fallBack}
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
