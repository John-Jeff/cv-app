import '../styles/CVForm.css';

import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';

import { Component } from 'react';

class CVForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            experience: {},
            education: {}
        }

        this.getEducation = this.getEducation.bind(this);
        this.getExperience = this.getExperience.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getEducation(stateEdu) {
        this.setState({
            education: stateEdu
        });
    }

    getExperience(stateExp) {
        this.setState({
            experience: stateExp
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.experience);
        console.log(this.education);
        this.props.getFormData(this.experience);
    }

    render() {
        return (
            <form className="cv-form" onSubmit={this.handleSubmit}>
                <EducationForm getEducation={this.getEducation}/>
                <ExperienceForm getExperience={this.getExperience}/>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default CVForm;
