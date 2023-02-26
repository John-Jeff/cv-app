
import { Component } from "react";

class EducationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            schoolName: '',
            location: '',
            degree: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.props.getEducation(this.state);
    }

    render() {
        return (
            <div className="edu-sec">
                <label htmlFor="schoolName" >Name of School:
                    <input type='text' name='schoolName' value={this.state.schoolName} onChange={this.handleChange}/>
                </label>
                <label htmlFor="location" >Location:
                    <input type='text' name='location' value={this.state.location} onChange={this.handleChange}/>
                </label>
                <label htmlFor="startDate" >Start Date:
                    <input type='date' name='startDate' />
                </label>
                <label htmlFor="endDate" >End Date:
                    <input type='date' name='endDate' />
                </label>
                <label htmlFor="degree" >Degree:
                    <input type='text' name='degree' value={this.state.degree} onChange={this.handleChange}/>
                </label>
            </div>
        );
    }

}

export default EducationForm;
