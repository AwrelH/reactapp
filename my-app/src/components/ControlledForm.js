import React, { Component } from "react";
// rce

export class ControlledForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      category: "website",
      comments: ''
    }
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleCategoryChange = (event) => {
    this.setState({
      category: event.target.value,
    });
  };
  handleCommentChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h2>fill out the form yo</h2>
        <form>
          <div>
            <label htmlFor="id-name">Your Name:</label>
            <input
              value={this.state.name}
              onChange={this.handleNameChange}
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
              value={this.state.category}
              onChange={this.handleCategoryChange}
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
              value={this.state.comments}
              onChange={this.handleCommentChange}
             
            />
          </div>
          <input  type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ControlledForm;
