import React, { useEffect, useState } from 'react'

const LocalStorage = () => {
    const [formdata, setFormdata] = useState({});
    const [record, setRecord] = useState([]);

    const handleChange = ((e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value,
        })
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = { id: Date.now(), ...formdata }
        setRecord([...record, obj])
        localStorage.setItem("Student", JSON.stringify([...record, obj]))

        setFormdata({
            name: "",
            subject: ""
        })
    }

    useEffect(() => {
        let allData = JSON.parse(localStorage.getItem("students")) || []
        setRecord(allData);
    }, [])

    const handleDelete = (id) => {
        console.log(id);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name='name'
                    value={formdata.name}
                    placeholder='Enter your Name'
                    onChange={handleChange} />

                <input type="text"
                    name='subject'
                    value={formdata.subject}
                    placeholder='Enter your Subject'
                    onChange={handleChange} />

                <button type='submit'>Submit</button>
            </form>
              
            {
                record ?
                    record.map((e, i) => {
                        return <ul key={i}>
                            <li>{e.id}</li>
                            <li>{e.name}</li>
                            <li>{e.subject}</li>
                            <button onClick={() => handleDelete(e.id)}>Delete</button>
                            <button>Edit</button>
                        </ul>
                    }) : <p>No Record</p>
            }
        </div>
    )
}

export default LocalStorage;