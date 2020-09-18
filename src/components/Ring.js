import React, { forwardRef } from "react";

const Ring = forwardRef((props, ref) => {
    
    return (
        <audio
            src="https://onj3.andrelouis.com/phonetones/unzipped/Palm-Treo800W/Alarm5.wav"
            ref={ref}
        ></audio>
    );
})

export default Ring;
