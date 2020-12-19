const ControlTime = ({ nameOfControl, value, upHandler, downHandler }) => (
    <div className="col-12 col-md-4 col-lg-3 text-center my-4">
        <p>{nameOfControl}</p>
        <div className="row d-flex align-items-center justify-content-center">
                <button className="col-auto btn btn-warning" onClick={upHandler}>
                    <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
                </button>
                <p className="col-3 my-0">{value}</p>
                <button className="col-auto btn btn-warning" onClick={downHandler}>
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                </button>
        </div>
    </div>
);

export default ControlTime;