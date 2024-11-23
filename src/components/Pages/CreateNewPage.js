import React from "react";
import CreateForm from "../Forms/NewItemForm";

const apiEndpoint = 'https://672c4dde1600dda5a9f7e1db.mockapi.io/items';

const CreateNewPage = () => {
    return (
        <section className="create-page-container">
            <header className="page-header">
                <h2>Add a New Item</h2>
            </header>
            <main className="form-container">
                <CreateForm apiUrl={apiEndpoint} />
            </main>
        </section>
    );
};

export default CreateNewPage;
