import React, { useState, useEffect } from 'react';
import { openDB } from 'idb';

const Formsubmit = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [mail, setMail] = useState('');

    useEffect(() => {
        const initDB = async () => {
            const db = await openDB('FormDB', 1, {
                upgrade(db) {
                    db.createObjectStore('formData', { keyPath: 'id', autoIncrement: true });
                },
            });
        };
        initDB();
    }, []);

    const getName = (n) => {
        setName(n.target.value);
    };

    const getNumber = (p) => {
        setNumber(p.target.value);
    };

    const getMail = (m) => {
        setMail(m.target.value);
    };

    const submitHandler = async () => {
        if (!name) {
            alert('Please enter Name');
        } else if (!number) {
            alert('Please enter Phone Number');
        } else if (!mail) {
            alert('Please enter email-id');
        } else {
            const message = `Name: ${name}\nPhone: ${number}\nEmail-id: ${mail}`;
            alert(`${message}\nData has been updated`);


            // Save data to IndexedDB
            const db = await openDB('FormDB', 1);
            await db.add('formData', { name, number, mail });

            // Reset fields
            setName('');
            setNumber('');
            setMail('');
        }
    };

    const reset = () => {
        setName('');
        setNumber('');
        setMail('');
        alert('All fields are cleared...');
    };

    return (
        <div className="form-container">
            <div className="form-fields">
                <label>
                    Name: <input type='text' placeholder='Enter Your Name...' value={name} onChange={getName}></input>
                </label>
                <label>
                    Phone: <input type='text' placeholder='Enter Your Number...' value={number} onChange={getNumber}></input>
                </label>
                <label>
                    Email-id: <input type='text' placeholder='Enter Your Email-id...' value={mail} onChange={getMail}></input>
                </label>
                <div className="buttonSpace">
                    <button type="button" className="btn btn-primary" onClick={submitHandler}>SUBMIT</button>
                    <button type="button" className="btn btn-primary" onClick={reset}>RESET</button>
                </div>
            </div>
        </div>
    );
};

export default Formsubmit;
