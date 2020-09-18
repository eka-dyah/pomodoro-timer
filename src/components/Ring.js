import React, { forwardRef } from "react";

const Ring = forwardRef((props, ref) => {
    
    return (
        <audio
            src="https://bruitages.free.fr/horloges/sonnette_reveil.wav"
            ref={ref}
        ></audio>
    );
})

export default Ring;
