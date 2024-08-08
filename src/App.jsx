import { useRef, useLayoutEffect } from "react";

function App() {
  const viewer = useRef(null);

  useLayoutEffect(() => {
    viewer.current.features = {
      POSITION: "OPEN",
      UPHOLSTERY: "B-1290-UK AMIGO NAVY",
    };
  }, []);

  return (
    <cylindo-viewer ref={viewer}>
      {" "}
      {/* customer-id="4965" code="ARMCHAIR-DS-DEMO" - You do not need to specify customer-id and code on the viewer when using a placeholder image as the viewer can extrapolate this information from the image url.*/}
      <img
        slot="placeholder"
        src="http://content.cylindo.com/api/v2/4965/products/ARMCHAIR-DS-DEMO/default.web"
      />
      <cylindo-360 frame="5"></cylindo-360>
      <cylindo-custom-content
        slot="Picture(01)"
        thumbnail-src="https://picsum.photos/id/59/128.webp"
      >
        <img src="https://picsum.photos/id/59/1600/1200.webp" />
      </cylindo-custom-content>
      <cylindo-custom-content
        slot="Picture(02)"
        thumbnail-src="https://content.cylindo.com/api/v2/4965/products/ARMCHAIR-DS-DEMO/material/material.jpg?&feature=UPHOLSTERY:B-1290-UK AMIGO NAVY&size=512"
      >
        <img
          src="https://content.cylindo.com/api/v2/4965/products/ARMCHAIR-DS-DEMO/material/material.jpg?&feature=UPHOLSTERY:B-1290-UK AMIGO NAVY&size=400"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></img>
      </cylindo-custom-content>
      <cylindo-thumbnail-bar></cylindo-thumbnail-bar>
    </cylindo-viewer>
  );
}

export default App;
