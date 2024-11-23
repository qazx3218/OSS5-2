import React from "react";

function ItemCard({ item, onEdit, onDelete }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text"><strong>Price:</strong> ${item.price}</p>
                <p className="card-text"><strong>Quantity:</strong> {item.quantity}</p>
                <button className="btn btn-primary" onClick={() => onEdit(item.id)}>Edit</button>
                <button className="btn btn-danger" onClick={() => onDelete(item.id)}>Delete</button>
            </div>
        </div>
    );
}

export default ItemCard;
