import '../styles/CVPreview.css';

import { Component } from 'react';

class CVPreview extends Component {

    render() {
        return (
            <div className='cv-preview'>
                <div className='main-page'>
                    <header>
                        <h1 className='name-head'>Name Name</h1>
                        <div className='info-head'>
                            <p>email</p>
                            <p>phone</p>
                            <p>address</p>
                        </div>
                    </header>
                    <section className='summary'>
                        <p>
                            vdskvdksmvdsmvmdslmvmdsvmldsvmdsmvmdsvmdsvmkdsmvklfs vhbwfencmsmcsvdslv svldsvdv slvdk s
                        </p>

                    </section>
                    <section className='education'>
                        <h2>Education</h2>

                    </section>
                    <section className='experience'>
                        <h2>Experience</h2>
                        
                    </section>
                </div>
            </div>
        );
    }
}

export default CVPreview;