import React, { forwardRef } from "react";

const Ring = forwardRef((props, ref) => {
    
    return (
        <audio
            src="https://sfxcontent.s3.amazonaws.com/soundfx/CooCooClock.mp3"
            ref={ref}
        ></audio>
    );
})

export default Ring;
