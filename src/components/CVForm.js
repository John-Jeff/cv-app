import '../styles/CVForm.css';

import IdentityForm from './IdentityForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';

import { Component } from 'react';

class CVForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            identity: {},
            experience: [],
            education: []
        }

        this.addIdentity = this.addIdentity.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addIdentity(stateId) {
        this.setState({
            identity: stateId
        })
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
            <div className='cv-form'>
                <h1>Identity</h1>
                <IdentityForm addIdentity={this.addIdentity}/>
                <h1>Education</h1>
                <EducationForm addEducation={this.addEducation}/>
                <h1>Experience</h1>
                <ExperienceForm addExperience={this.addExperience}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }

}

export default CVForm;
