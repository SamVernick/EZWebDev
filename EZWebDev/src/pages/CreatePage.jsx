import '../App.css'




function CreatePage(){
    return(
        <div className='Create-page'>
            <h2>Create Page</h2>
            <div>Click the button below to add an element</div>
            <button className='btn btn-primary'>Create Textbox</button>
            <label for="cbox">Input Text</label>
            <input type="text" id="cbox" name="cbox"><br><br>
        </div>
    )
}






export default CreatePage