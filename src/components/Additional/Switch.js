import './Switch.css';

const Switch = ({ innerRef, onChange, checked = false }) => (
    <>
        <label>
            <input ref={innerRef} type="checkbox" checked={checked} onChange={onChange} />
            <span className="slider-toggle" />
        </label>
    </>
);

export default Switch;