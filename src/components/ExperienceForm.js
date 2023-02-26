
import { Component } from "react";

class ExperienceForm extends Component {

    render() {
        return (
            <div className="exp-sec">
                <label for="company-name" >Company Name:
                    <input type='text' name='company-name' />
                </label>
                <label for="location" >Location:
                    <input type='text' name='location' />
                </label>
                <label for="position" >Position:
                    <input type='text' name='position' />
                </label>
                <label for="start-date" >Start Date:
                    <input type='date' name='start-date' />
                </label>
                <label for="end-date" >End Date:
                    <input type='date' name='end-date' />
                </label>
            </div>
        );
    }

}

export default ExperienceForm;
