import '../styles/CVForm.css';

import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';

import { Component } from 'react';

class CVForm extends Component {

    render() {
        return (
            <form className="cv-form">
                <EducationForm />
                <ExperienceForm />
            </form>
        );
    }
}

export default CVForm;
