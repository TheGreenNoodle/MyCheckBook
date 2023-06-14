// link data
import { named, noName } from "./link-data";

// common css
// div
import background from "../../../../common/css/background-color.module.css";
import borderRadius from "../../../../common/css/border-radius.module.css";

// size
import icon from "../../../../common/css/icon.module.css";

// text
import fontColor from "../../../../common/css/text/color.module.css";
import fontSize from "../../../../common/css/text/size.module.css";

// position
import align from "../../../../common/css/align.module.css";

// nav link css
import navLink from "./nav-links.module.css";

function Link({ svg, fallBack, alt, name, route }) {
  return (
    <a
      className={`${borderRadius.elevenPx} ${fontColor.black} ${fontSize.small} ${background.whiteWithOutline} ${align.flexMid}`}
      href={route}>
      <img className={icon.large} src={svg} onerror={fallBack} alt={alt} />
      {name}
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
