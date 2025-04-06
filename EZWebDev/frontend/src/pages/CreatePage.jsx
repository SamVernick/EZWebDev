import '../App.css'
import { useState } from 'react'

function CreatePage(){
    const [size, setSize] = useState(0);
    const [margin, setMargin] = useState(0);
    const [border, setBorder] = useState(0);
    const [padding, setPadding] = useState(0);
    const [text, setText] = useState('');
    const [createdElementID, setCreatedElementID] = useState(null);

    const createNew = async (e) => {
        e.preventDefault();
        const newElement = { size, margin, border, padding };

        try {
            const response = await fetch('http://localhost:3000/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newElement),
            });
            if (response.ok) {
                const element = await response.json();
                console.log('Element created:', element);
                setCreatedElementID(element.id);
            } else {
                console.error('Error creating element');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const updateElementText = async (e) => {
        e.preventDefault();
        if(!createdElementID) {
            console.error('No element to update');
            return;
        }

        try {
            const response = await fetch(`https://localhost:3000/create/${createdElementID}`, {
               method: 'PUT',
               headers: {
                   'Content-Type': 'application/json'
               },
                body: JSON.stringify({ text }), 
            });
            if(response.ok) {
                const updatedElement = await response.json();
                console.log('Element updated:', updatedElement);
            } else {
                console.error('Error updating element');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return(
        <div className="create-page">
            <h2>Create Page</h2>
            <p>Let's first try to create a new text element! Below me are some input fields for you to define!</p>
            <form onSubmit={createNew} className="create-text">
                <label className="create-label">
                    Text Size: This determines the size, in pixels (px) of the text.
                    <input
                        type="number"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                    />
                </label>
                <br></br>
                <label className="create-label">
                    Margin: This determines the space outside the element, in pixels (px).
                    <input
                        type="number"
                        value={margin}
                        onChange={(e) => setMargin(e.target.value)}
                    />
                </label>
                <br></br>
                <label className="create-label">
                    Border: This determines the thickness of the border, in pixels (px).
                    <input
                        type="number"
                        value={border}
                        onChange={(e) => setBorder(e.target.value)}
                    />
                </label>
                <br></br>
                <label className="create-label">
                    Padding: This determines the space inside the element, in pixels (px).
                    <input
                        type="number"
                        value={padding}
                        onChange={(e) => setPadding(e.target.value)}
                    />
                </label>
                <br></br>
                <button type="submit" className="create-button">Create Element</button>
            </form>
            

            {createdElementID && (
                <form onSubmit={updateElementText} className="update-text">
                    <h3>Update Element Text</h3>
                    <label>
                        Enter Text:
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </label>
                    <button type="submit">Update Text</button>
                </form>
            )}
        </div>
    )
}




export default CreatePage