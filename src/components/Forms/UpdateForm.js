import React, { useState } from "react";

function UpdateForm({ item, apiUrl }) {
    const [updatedItem, setUpdatedItem] = useState(item);
    const [updateCount, setUpdateCount] = useState(0);

    const handleChange = (key, value) => {
        const newItem = { ...updatedItem, [key]: value };
        setUpdatedItem(newItem);
        setUpdateCount(updateCount + 1);

        fetch(`${apiUrl}/${item.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newItem),
        }).catch(error => console.error("Error updating item:", error));
    };

    return (
        <form>
            <label>
                Name:
                <input
                    type="text"
                    value={updatedItem.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                />
            </label>
            <label>
                Description:
                <input
                    type="text"
                    value={updatedItem.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                />
            </label>
            <label>
                Price:
                <input
                    type="number"
                    value={updatedItem.price}
                    onChange={(e) => handleChange("price", e.target.value)}
                />
            </label>
            <label>
                Quantity:
                <input
                    type="number"
                    value={updatedItem.quantity}
                    onChange={(e) => handleChange("quantity", e.target.value)}
                />
            </label>
            <p>Total Updates: {updateCount}</p>
        </form>
    );
}

export default UpdateForm;
