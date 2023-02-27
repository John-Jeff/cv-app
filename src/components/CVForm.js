import '../styles/CVForm.css';

import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';

import { Component } from 'react';

class CVForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            experience: [],
            education: []
        }

        this.addEducation = this.addEducation.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addEducation(stateEdu) {
        this.setState({
            education: this.state.education.concat(stateEdu)
        });
    }

    addExperience(stateExp) {
        this.setState({
            experience: this.state.experience.concat(stateExp)
        });
    }

    handleSubmit() {
        console.log(this.state.education);
        console.log(this.state.experience);

    }

    render() {
        return (
            <div className="cv-form">
                <EducationForm addEducation={this.addEducation}/>
                <ExperienceForm addExperience={this.addExperience}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default CVForm;
