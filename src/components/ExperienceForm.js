
import { Component } from 'react';

export default class ExperienceForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            companyName: '',
            location: '',
            position: '',
            startDate: '',
            endDate: ''
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
        // console.log(this.state);

        this.setState({
            companyName: '',
            location: '',
            position: '',
            startDate: '',
            endDate: ''
        })

        this.props.addExperience(this.state);
    }

    render() {
        return (
            <form className='exp-sec' onSubmit={this.handleSubmit}>
                <label htmlFor='companyName' >Company Name
                    <input type='text' name='companyName' value={this.state.companyName} onChange={this.handleChange} required />
                </label>
                <label htmlFor='location' >Location
                    <input type='text' name='location' value={this.state.location} onChange={this.handleChange} required />
                </label>
                <label htmlFor='position' >Position
                    <input type='text' name='position' value={this.state.position} onChange={this.handleChange} required />
                </label>
                <label htmlFor='startDate' >Start Date
                    <input type='date' name='startDate' value={this.state.startDate} onChange={this.handleChange} required />
                </label>
                <label htmlFor='endDate' >End Date
                    <input type='date' name='endDate' value={this.state.endDate} onChange={this.handleChange} required />
                </label>
                <button type='submit'>Add</button>
            </form>
        );
    }

}
