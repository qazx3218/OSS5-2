import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UpdateForm from "../Forms/UpdateForm";

const apiEndpoint = 'https://672c4dde1600dda5a9f7e1db.mockapi.io/items';

const UpdatePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [itemDetails, setItemDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchItemDetails = async () => {
            try {
                const response = await fetch(`${apiEndpoint}/${id}`);
                if (!response.ok) throw new Error("Failed to fetch item");
                const data = await response.json();
                setItemDetails(data);
            } catch (err) {
                console.error("Error fetching item:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchItemDetails();
    }, [id]);

    if (loading) {
        return <p>Loading item data...</p>;
    }

    if (error) {
        return (
            <div>
                <p>Failed to load item. Please try again later.</p>
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <section className="update-page-container">
            <header className="page-header">
                <h2>Edit Item Details</h2>
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                    Back to Item List
                </button>
            </header>
            <main>
                {itemDetails ? (
                    <UpdateForm item={itemDetails} apiUrl={apiEndpoint} />
                ) : (
                    <p>No item data available.</p>
                )}
            </main>
        </section>
    );
};

export default UpdatePage;
