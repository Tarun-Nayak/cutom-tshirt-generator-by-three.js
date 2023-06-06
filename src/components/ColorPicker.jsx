import React from "react";
// this is more important library where we fetch the color box from here it self
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        // presetColors={[
        //     "#ff0000",
        //     "#ff7f00",
        //     "#ffff00",
        //     "#00ff00",
        //     "#00ffff",

        // ]} we can add our own color stuff
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
