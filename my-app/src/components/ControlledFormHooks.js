import React, {useState} from 'react'
//rfce

function ControlledFormHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments)
    }


    return (
        <div>
          <h2>fill out the form yo</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="id-name">Your Name:</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="id-name"
                name="name"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="id-category">Query category:</label>
              <select
                id="id-category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="website">website issue</option>
                <option value="order">order issue</option>
                <option value="general">general issue</option>
              </select>
            </div>
            <div>
              <label htmlFor="id-comments">Comments:</label>
              <textarea
               id="id-comments"
               name="comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
               
              />
            </div>
            <input  type="submit" value="Submit" />
          </form>
        </div>
      );
}

export default ControlledFormHooks