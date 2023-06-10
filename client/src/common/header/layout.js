// components
import Title from "./title";

// common css
// div
import background from "../../common/css/background-color.module.css";
import borderRadius from "../../common/css/border-radius.module.css";
// text
import fontColor from "../../common/css/text/color.module.css";
import fontSize from "../../common/css/text/size.module.css";
import align from "../../common/css/text/align.module.css";

function Header() {
  return (
    <header>
      <Title />
    </header>
  );
}

export default Header;
