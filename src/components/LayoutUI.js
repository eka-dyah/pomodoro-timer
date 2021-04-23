import Switch from "./Additional/Switch";

const LayoutUI = ({ title, children, innerRef, checked, onClickTheme }) => {
    return (
        <div className={`container-fluid p-0 ${checked ? 'Night' : 'Day'}`} style={{ minHeight: "97vh" }}>
                <Switch innerRef={innerRef} onChange={onClickTheme} checked={checked} />
                <h1 className="p-5 text-center">{title}</h1>
                <div className="row mx-0">{children}</div>
        </div>
    );
}

export default LayoutUI;
