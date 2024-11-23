import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../Common/ItemCardComponent";

const apiEndpoint = 'https://672c4dde1600dda5a9f7e1db.mockapi.io/items';

const CrudPage = () => {
    const [dataList, setDataList] = useState([]);
    const navigateTo = useNavigate();

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await fetch(apiEndpoint);
                const jsonData = await result.json();
                setDataList(jsonData.sort((a, b) => b.id - a.id)); 
            } catch (err) {
                console.error("Error loading data:", err);
            }
        };
        loadData();
    }, []);

    const removeItem = async (id) => {
        try {
            const confirmation = window.confirm("Are you sure you want to delete this item?");
            if (!confirmation) return;

            await fetch(`${apiEndpoint}/${id}`, { method: "DELETE" });
            setDataList(prevData => prevData.filter(data => data.id !== id));
        } catch (err) {
            console.error("Failed to delete item:", err);
        }
    };

    return (
        <div className="crud-page-container">
            <header className="page-header">
                <h2>Manage Your Items</h2>
                <button 
                    className="btn btn-success" 
                    onClick={() => navigateTo("/create")}
                >
                    Add Item
                </button>
            </header>
            <div className="item-grid">
                {dataList.length > 0 ? (
                    dataList.map(data => (
                        <ItemCard
                            key={data.id}
                            item={data}
                            onEdit={() => navigateTo(`/edit/${data.id}`)} 
                            onDelete={() => removeItem(data.id)}
                        />
                    ))
                ) : (
                    <p className="no-items">No items available. Start by adding a new one!</p>
                )}
            </div>
        </div>
    );
};

export default CrudPage;
