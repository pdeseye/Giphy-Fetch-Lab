import React, {useState} from 'react';

function Form(props) {
  const [giphyTitle, setGiphyTitle] = useState('')

  const handleSubmit = e => {
    console.log('handleSubmit clicked');
    e.preventDefault();
    props.handleSubmit(giphyTitle)
    setGiphyTitle('')
  };
  const reloadPage = ()=>{
    window.location.reload();

  }

  const handleChange = e => {
    console.log('handleChange clicked');
    const title =  e.target.value
    setGiphyTitle(title)
  };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="GiphyTitle">Title:</label>
          <input
            id="GiphyTitle"
            type="text"
            value={giphyTitle}
            onChange={handleChange}
          />
          <input type="submit" value="Find Giphy Info" />
          <button onClick={reloadPage}> Make Api Call Again </button>
          <h1>Pull random gifs from Giphy</h1>
        </form>
      </>
    );
}

export default Form;