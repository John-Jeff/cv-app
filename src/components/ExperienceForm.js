
import { Component } from "react";

class ExperienceForm extends Component {
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

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.props.getExperience(this.state);
    }

    handleSubmit() {
        console.log(this.state);

        this.setState({
            companyName: '',
            location: '',
            position: '',
            startDate: '',
            endDate: ''
        })
    }

    render() {
        return (
            <form className="exp-sec" onSubmit={this.handleChange}>
                <label htmlFor="companyName" >Company Name
                    <input type='text' name='companyName' value={this.state.companyName} onChange={this.handleChange} required />
                </label>
                <label htmlFor="location" >Location
                    <input type='text' name='location' value={this.state.location} onChange={this.handleChange} required />
                </label>
                <label htmlFor="position" >Position
                    <input type='text' name='position' value={this.state.position} onChange={this.handleChange} required />
                </label>
                <label htmlFor="startDate" >Start Date
                    <input type='date' name='startDate' value={this.state.startDate} onChange={this.handleChange} required />
                </label>
                <label htmlFor="endDate" >End Date
                    <input type='date' name='endDate' value={this.state.endDate} onChange={this.handleChange} required />
                </label>
                <button type='submit'>Add</button>
            </form>
        );
    }

}

export default ExperienceForm;
