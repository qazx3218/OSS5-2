import React, { useState } from "react";

function CreateForm({ apiUrl }) {
    const [item, setItem] = useState({ name: "", description: "", price: "", quantity: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
        })
            .then(() => alert("Item created successfully"))
            .catch(error => console.error("Error creating item:", error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={item.name}
                    onChange={(e) => setItem({ ...item, name: e.target.value })}
                />
            </label>
            <label>
                Description:
                <input
                    type="text"
                    value={item.description}
                    onChange={(e) => setItem({ ...item, description: e.target.value })}
                />
            </label>
            <label>
                Price:
                <input
                    type="number"
                    value={item.price}
                    onChange={(e) => setItem({ ...item, price: e.target.value })}
                />
            </label>
            <label>
                Quantity:
                <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => setItem({ ...item, quantity: e.target.value })}
                />
            </label>
            <button type="submit">Create</button>
        </form>
    );
}

export default CreateForm;
