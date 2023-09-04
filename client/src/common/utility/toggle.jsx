import { useState } from "react";
import { UndefinedParam } from "./throwError";

// a wrapper component that toggles the visibility of its children and also can add animations and stuff to those children
// explain what each param is and what it is for
function Toggle({ children, toggler, animations, initialState }) {
  console.log(toggler);
  //   UndefinedParam({
  //     children: children,
  //     toggler: toggler,
  //     initialState: initialState,
  //   });

  if (toggler)
    toggler.onClick(() => {
      toggled ? setToggled(false) : setToggled(true);
    });

  // initialState is either true or false
  const [toggled, setToggled] = useState(initialState);
  return <>{toggled && children} </>;
}

export default Toggle;
