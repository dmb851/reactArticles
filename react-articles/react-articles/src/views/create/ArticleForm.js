import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const axios = require('axios').default;


class ArticleForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: ''};
      this.state = {summary: ''};
      this.state = {details: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const value = event.target.value;
      this.setState({
        ...this.state,
        [event.target.name]: value
      });
    }

  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.name);

      axios.post('/insert',{
        title: this.state.name,
        summary: this.state.summary,
        details: this.state.details
      })
      .then((response) => {
      console.log(response.data)
      })

      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <Col>
            <Row>
              <label>
                Name:
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
              </label>
            </Row>
            <Row>
              <label>
                Summary:
                <input type="text" name="summary" value={this.state.summary} onChange={this.handleChange} />
              </label>
            </Row>
            <Row>
              <label>
                Details:
                <input type="text" name="details" value={this.state.details} onChange={this.handleChange} />
              </label>
            </Row>
            <Row>
              <input type="submit" value="Submit" />
            </Row>
          </Col>
        
        </form>
      );
    }
  }

  export default ArticleForm;