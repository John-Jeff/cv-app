
import { Component } from 'react';

export default class IdentityForm extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            address: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            name: '',
            email: '',
            phone: '',
            address: ''
        })

    }

    render() {
        return (
            <form className='id-sec' onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange} required />
                </label>
                <label htmlFor='email'>Email
                    <input type='email' name='email' value={this.state.email} onChange={this.handleChange} required />
                </label>
                <label htmlFor='phone'>Phone Number
                    <input type='tel' name='phone' pattern="[0-9]{3} [0-9]{3} [0-9]{4}" value={this.state.phone} onChange={this.handleChange} required />
                </label>
                <label htmlFor='address'>Address
                    <input type='text' name='address' value={this.state.address} onChange={this.handleChange} required />
                </label>
                <button type='submit'>Set</button>
            </form>
        );
    }

}
