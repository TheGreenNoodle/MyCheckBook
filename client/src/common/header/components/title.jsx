// common css
// div
import background from "../../../common/css/color/background-color.module.css";
import borderRadius from "../../../common/css/border/border-radius.module.css";

// text
import textColor from "../../../common/css/color/text-color.module.css";
import textSize from "../../../common/css/size/text-size.module.css";

// position
import align from "../../../common/css/position/box-align.module.css";
import margin from "../../../common/css/position/margin.module.css";

function Title() {
  return (
    <h1
      className={`${textColor.white} ${textSize.extraLarge} ${borderRadius.elevenPx} ${background.black} ${align.flexMid} ${margin.none}`}>
      MyCheckBook
    </h1>
  );
}
export default Title;
