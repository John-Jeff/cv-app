
import { Component } from "react";

class ExperienceForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companyName: '',
            location: '',
            position: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.props.getExperience(this.state);
    }

    render() {
        return (
            <div className="exp-sec">
                <label htmlFor="companyName" >Company Name:
                    <input type='text' name='companyName' value={this.state.companyName} onChange={this.handleChange}/>
                </label>
                <label htmlFor="location" >Location:
                    <input type='text' name='location' value={this.state.location} onChange={this.handleChange}/>
                </label>
                <label htmlFor="position" >Position:
                    <input type='text' name='position' value={this.state.position} onChange={this.handleChange}/>
                </label>
                <label htmlFor="startDate" >Start Date:
                    <input type='date' name='startDate' />
                </label>
                <label htmlFor="endDate" >End Date:
                    <input type='date' name='endDate' />
                </label>
            </div>
        );
    }

}

export default ExperienceForm;
