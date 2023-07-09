import { useState } from 'react';
import axios from 'axios';

export default function InputBox(props) {
  const [data, setData] = useState('');

  function handleKeyDown(e){
    if (e.key === 'Enter') {
      if (data.trim() !== '') {
        axios.post('http://localhost:3001/createNotes', { textData: data })
          .then((res) => {
            alert('Note added successfully');
            setData("")
            props.onSubmit();
          })
          .catch((err) => {
            alert(err.response.data.message + err.response.status + " Error");
          });
      }
    }
  };

  return (
    <div className='containerInput'>
      <input className='inputBox'
        value={data}
        onChange={(e) => setData(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Take a note"
      />
    </div>
  );
}
