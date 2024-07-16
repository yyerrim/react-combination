import './Dialog.css';

function Dialog(props) {
    return (
        <div className="dialog">
            <h1 className="dialog-title">{props.title}</h1>
            <hr />
            <p className="dialog-message">{props.message}</p>
            <hr />
            <div className='dialog-footer'>
                <button className="dialog-close">Close</button>
            </div>
        </div>
    );
}

export default Dialog;