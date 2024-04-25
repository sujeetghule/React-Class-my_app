import React, { useState } from 'react';

const UseState5 = () => {
    const [items, setItems] = useState([]);

    const addItems = () => {
        setItems(prevItems => [
            ...prevItems,
            {
                id: prevItems.length,
                value: Math.floor(Math.random() * 100) + 1
            }
        ]);
    };

    return (
        <div>
            <p>UseState5</p>
            <button onClick={addItems}>Get Random No</button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.id}-{item.value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UseState5;
