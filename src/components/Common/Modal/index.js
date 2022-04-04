import "./index.css"

export const Modal = () => {
    return (
        <div className="modal-container font-sm">
            <div className="modal-unit flex align-center">
                <span className="material-icons">save</span>
                <p>Add to Playlist</p>
            </div>
            <div className="modal-unit flex align-center">
                <span className="material-icons">favorite</span>
                <p>Remove from watch later</p>
            </div>
        </div>
    )
}