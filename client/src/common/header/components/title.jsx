// common css
// div
import background from "../../../common/css/background-color.module.css";
import borderRadius from "../../../common/css/border-radius.module.css";
// text
import fontColor from "../../../common/css/text/color.module.css";
import fontSize from "../../../common/css/text/size.module.css";
import align from "../../../common/css/text/align.module.css";

function Title() {
  return (
    <h1
      className={`${fontColor.white} ${fontSize.extraLarge} ${borderRadius.elevenPx} ${background.black} ${align.center}`}>
      MyCheckBook
    </h1>
  );
}
export default Title;
