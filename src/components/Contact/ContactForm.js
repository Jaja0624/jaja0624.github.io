import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    
    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        console.log(data)
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                console.log(xhr.status)
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
    render () {
        const { status } = this.state;
        return (
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/mnqoajap"
                method="POST"
            >   
                <div>
                    <div>
                        <input type="email" placeholder="your email" name="email" />
                    </div>
                    <div>
                        <input type="text" placeholder="message" name="message" />
                    </div>
                </div>
                
                {status === "SUCCESS" ? <p>Message Sent</p> : 
                <Button className="link-btn" variant="dark" style={{borderRadius: 0}} onClick={this.submitForm}>
                    <p className="link-text">Submit</p>
                </Button>}
                {status === "ERROR" && <p>There was an error.</p>}
            </form>
        );
    }
}