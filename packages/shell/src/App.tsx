import React, { Suspense } from "react";
import { RedButton } from "app1/RedButton";
// const aa = import("./GreenButton");

const App = () => {
  // const [Greenbutton, setButton] = React.useState(null);
  // console.log({ Greenbutton });
  // React.useMemo(() => {
  //   aa.then((button) => {
  //     setButton(button.GreenButton);
  //   });
  // }, []);
  const GreenButton = React.lazy(() => import("./GreenButton"));
  return (
    <div>
      shell-ui
      <RedButton />
      <Suspense fallback={<div>loading</div>}>
        <GreenButton />
      </Suspense>
    </div>
  );
};
export default App;
