
import { Component } from "react";

class EducationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            schoolName: '',
            location: '',
            degree: '',
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
    }

    handleSubmit(e) {
        e.preventDefault();
        // console.log(this.state);

        this.setState({
            schoolName: '',
            location: '',
            degree: '',
            startDate: '',
            endDate: ''
        });

        this.props.addEducation(this.state);
    }

    render() {
        return (
            <form className="edu-sec" onSubmit={this.handleSubmit}>
                <label htmlFor="schoolName" >Name of School
                    <input type='text' name='schoolName' value={this.state.schoolName} onChange={this.handleChange} required />
                </label>
                <label htmlFor="location" >Location
                    <input type='text' name='location' value={this.state.location} onChange={this.handleChange} required />
                </label>
                <label htmlFor="startDate" >Start Date
                    <input type='date' name='startDate' value={this.state.startDate} onChange={this.handleChange} required />
                </label>
                <label htmlFor="endDate" >End Date
                    <input type='date' name='endDate' value={this.state.endDate} onChange={this.handleChange} />
                </label>
                <label htmlFor="degree" >Degree
                    <input type='text' name='degree' value={this.state.degree} onChange={this.handleChange} required />
                </label>
                <button type='submit'>Add</button>
            </form>
        );
    }

}

export default EducationForm;
