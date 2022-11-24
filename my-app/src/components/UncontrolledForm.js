import React, { Component } from "react";
// rce

export class UncontrolledForm extends Component {
  constructor(props) {
    super(props);
    this.inputName = React.createRef();
    this.inputCategory = React.createRef();
    this.inputComment = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h2>fill out the form yo</h2>
        <form>
          <div>
            <label htmlFor="id-name">Your Name:</label>
            <input id="id-name" name="name" type="text" ref={this.inputName} />

          </div>
          <div>
            <label htmlFor="id-category">Query category:</label>
            <select id="id-category" name="category" ref={this.inputCategory} >
              <option value="website">website issue</option>
              <option value="order">order issue</option>
              <option value="general">general issue</option>
            </select>
          </div>
          <div>
            <label htmlFor="id-comments">Comments:</label>
            <textarea id="id-comments" name="comments" ref={this.inputComment}  />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UncontrolledForm;
