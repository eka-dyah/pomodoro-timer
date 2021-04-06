import './Switch.css';

const Switch = ({ innerRef, onClick }) => (
    <>
        <label onClick={onClick}>
            <input ref={innerRef} type="checkbox" />
            <span className="slider-toggle" />
        </label>
    </>
);

export default Switch;