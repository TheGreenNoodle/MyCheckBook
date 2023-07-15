// common css
// boxStyles
import background from "../../../common/css/color/background-color.module.css";

// text
import textSize from "../../../common/css/size/text-size.module.css";

function Title() {
  return (
    <h1 className={` ${textSize.extraLarge}    ${background.black} `}>
      My Checkbook
    </h1>
  );
}
export default Title;
