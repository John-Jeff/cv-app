
import { Component } from "react";

class EducationForm extends Component {

    render() {
        return (
            <div className="edu-sec">
                <label for="school-name" >Name of School:
                    <input type='text' name='company-name' />
                </label>
                <label for="location" >Location:
                    <input type='text' name='location' />
                </label>
                <label for="start-date" >Start Date:
                    <input type='date' name='start-date' />
                </label>
                <label for="end-date" >End Date:
                    <input type='date' name='end-date' />
                </label>
                <label for="degree" >Degree:
                    <input type='text' name='degree' />
                </label>
            </div>
        );
    }

}

export default EducationForm;
