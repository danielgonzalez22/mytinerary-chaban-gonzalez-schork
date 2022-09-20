import { useState } from "react"
import "../../styles/Itinerary/Comment.css"

export default function Comments(props) {
  let comment = props.comment
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    open ?
      setOpen(false)
      : setOpen(true)
  }
  return (
    <div className="comment-container" key={comment._id}>
      {comment ?
        <button className="comments-button" type="button" onClick={handleOpen}>
          {open ? "Close comments" : "Open comments"} </button>
        : <p className="no-comments">There are not comments here...</p>}
      {open ?
          <div className="comment-item" key={comment.user.name}>
            <div className="comment-item-user">
              <img src={comment.user.photo} alt={"commentUserImg"}className="comments-user-photo" />
              <p>{comment.user.name} {comment.user.lastName}</p>
            </div>
            <div className="comment-message">
              <p>
                {comment.comment}
              </p>
            </div>
          </div>
        : null
      }
    </div>
  )
}