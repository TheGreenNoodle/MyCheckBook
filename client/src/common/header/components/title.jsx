// common css
// boxStyles
import background from "../../../common/css/color/background-color.module.css";
import borderRadius from "../../../common/css/outer-box/border-radius.module.css";
import padding from "../../../common/css/outer-box/padding.module.css";

// text
import textColor from "../../../common/css/color/text-color.module.css";
import textSize from "../../../common/css/size/text-size.module.css";
import textAlign from "../../../common/css/position/text-align.module.css";

// position
import align from "../../../common/css/position/box-align.module.css";
import margin from "../../../common/css/position/margin.module.css";

function Title() {
  return (
    <h1
      className={`${textColor.white} ${textSize.extraLarge} ${textAlign.middle} ${borderRadius.elevenPx} ${padding.medSpace} ${background.black} ${align.flexMid} ${margin.none}`}>
      My Checkbook
    </h1>
  );
}
export default Title;
