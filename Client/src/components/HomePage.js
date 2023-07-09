import InputBox from "./InputBox";
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../app.css'
import DeleteButton from "./DeleteButton";


export default function HomePage() {
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3001/getNotes')
            .then((res) => {
                setData(res.data.data);
            })
            .catch((err) => {
                alert(err.response.data.message + err.response.status + " Error");
            });
    }, [refresh]);

    const handleRefresh = () => {
        setRefresh(!refresh);
    };

    return (
        <div >
            <InputBox onSubmit={handleRefresh} /><br />
            <div className="main">
                {data.map((x) => {
                    return (
                        <div className="container" key={x.id}>
                            <div className="dataContainer">
                                <p><strong>{x.textData}</strong></p>
                                <p style={{ fontSize: 'x-small' }}>{x.createdAt}</p>
                                <DeleteButton itemId={x.id} onDelete={handleRefresh} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
