import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const apiEndpoint = 'https://672c4dde1600dda5a9f7e1db.mockapi.io/items';

const DetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [itemDetails, setItemDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItemDetails = async () => {
            try {
                const response = await fetch(`${apiEndpoint}/${id}`);
                if (!response.ok) throw new Error("Failed to fetch item details");
                const data = await response.json();
                setItemDetails(data);
            } catch (err) {
                console.error("Error fetching item details:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchItemDetails();
    }, [id]);

    if (loading) {
        return <p>Loading item details...</p>;
    }

    if (!itemDetails) {
        return (
            <div>
                <p>Item not found or an error occurred.</p>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
        );
    }

    return (
        <section className="detail-page-container">
            <header>
                <h2>Item Details</h2>
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                    Back to List
                </button>
            </header>
            <article className="item-details">
                <h3>{itemDetails.name}</h3>
                <p><strong>Description:</strong> {itemDetails.description || "No description available"}</p>
                <p><strong>Price:</strong> ${itemDetails.price || "N/A"}</p>
                <p><strong>Quantity:</strong> {itemDetails.quantity || "Not specified"}</p>
                <p><strong>Category:</strong> {itemDetails.category || "Uncategorized"}</p>
            </article>
        </section>
    );
};

export default DetailPage;
