import React, { Suspense } from "react";

const loadModule = async ({ scope, moduleName }) => {
  // Initializes the shared scope. Fills it with known provided modules from this build and all remotes
  await __webpack_init_sharing__("default");
  const container = window[scope]; // or get the container somewhere else
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default);
  const module = await container.get(moduleName);
  console.log({ module: module() });
  return module();
};

const GreenButton = () => {
  const [clicked, setClicked] = React.useState(false);
  const RedButton = React.lazy(() =>
    loadModule({ scope: "app1", moduleName: "./RedButton" })
  );

  return (
    <>
      <button
        className="btn btn-success"
        onClick={() => {
          const script = document.createElement("script");
          script.src = "http://localhost:3001/remoteEntry.js";
          // script.async = true; //it's not suffient to make it async
          script.onload = () => {
            setClicked(true);
          };
          document.body.appendChild(script);
        }}
      >
        {clicked && (
          <Suspense
            fallback={() => {
              console.log("");
            }}
          >
            <RedButton />
          </Suspense>
        )}
        Green button
      </button>
      <button onClick={() => {}}>new button</button>
    </>
  );
};
export default GreenButton;
