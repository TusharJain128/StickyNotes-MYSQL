import axios from "axios";
import '../app.css'

export default function DeleteButton(props) {
  function handleClick() {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) {
      axios.delete(`http://localhost:3001/deleteNotes/${props.itemId}`)
        .then((res) => {
          props.onDelete();
        })
        .catch((err) => {
          alert(err.response.data.message + err.response.status + " Error");
        });
    }
  }

  return (
    <div>
      <button className="deleteButton" onClick={handleClick}>Delete</button>
    </div>
  );
}
