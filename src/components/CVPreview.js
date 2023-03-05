import '../styles/CVPreview.css';

import { Component } from 'react';

class CVPreview extends Component {

    render() {
        return (
            <div className='cv-preview'>
                <div className='main-page'>
                    <header className='preview-head'>
                        <h1 className='name-head'>Steve Wilson</h1>
                        <div className='info-head'>
                            <p>email@gmail.com</p>
                            <p>123-456-7890</p>
                            <p>Greater City Area</p>
                        </div>
                    </header>
                    <section className='summary'>
                        <p>
                            vdskvdksmvdsmvm dslmv mdsvm ldsvmdsmvm dsvmd svmkdsmvklfs vhbw fenc msmcsvdslv svldsvdv slvdk s
                            vslmvdms dmksmvlsmvds dmsvmldsvm slk mvsdvmv mdsmvlmds fe f e fa efafeaf 
                            affesg fesf fe fesfoeksf fd qdefssf sfdff fef effwfw
                        </p>
                    </section>
                    <section className='education'>
                        <h2>Education</h2>
                        <hr/>
                        <div className='edu-block'>

                        </div>

                    </section>
                    <section className='experience'>
                        <h2>Work Experience</h2>
                        <hr/>
                        
                    </section>
                </div>
            </div>
        );
    }
}

export default CVPreview;