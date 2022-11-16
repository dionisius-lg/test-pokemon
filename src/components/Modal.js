import classnames from "classnames";

const Modal = ({ show, title, hide, children }) => {

    return (
        <>
            <div className={classnames('modal', {'open': show})} onClick={hide}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <h4 className="modal-title text-uppercase">{title}</h4>
                        <button type="button" className="modal-close" onClick={hide}>&times;</button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer text-right">
                        <button type="button" className="pure-button button-dark" onClick={hide}>Close</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
