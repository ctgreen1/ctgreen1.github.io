import React from "react";
import UTHP from '../assets/images/UTHP.png';
import '../assets/styles/Project.scss';
import SeniorDesign from '../assets/images/SeniorDesign.png';
import Protocol from '../assets/images/Protocol.png';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/SystemsCyber/UTHP" target="_blank" rel="noreferrer"><img src={UTHP} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/SystemsCyber/UTHP" target="_blank" rel="noreferrer"><h2>The UTHP</h2></a>
                <p>The Ultimate Truck Hacking Platform is a costum Yocto-based embedded system with custom designed software and hardware for vulnerability assessment and testing of medium and heavy-duty trucks.</p>
            </div>
            <div className="project">
                <a href="hhttps://projects-web.engr.colostate.edu/ece-sr-design/AY23/biosensor/" target="_blank" rel="noreferrer"><img src={SeniorDesign} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://projects-web.engr.colostate.edu/ece-sr-design/AY23/biosensor/" target="_blank" rel="noreferrer"><h2>Integration of Biosensors and Digital Microfluidic Technology for Biomedical Diagnostic Applications</h2></a>
                <p>As the need for biomedical devices increases, the desire for the devices to be smaller and more functional also grows. Processes once done in entire laboratories can now be miniaturized to a hand-held device for biomedical applications, which can be seen in products such as glucose meters. However, many of these devices are not practical for use due to circumstances such as ease of use, cost, weight, or other unwanted characteristics.</p>
            </div>
            <div className="project">
                <a href="https://www.ndss-symposium.org/wp-content/uploads/vehiclesec2024-46-paper.pdf" target="_blank" rel="noreferrer"><img src={Protocol} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.ndss-symposium.org/wp-content/uploads/vehiclesec2024-46-paper.pdf" target="_blank" rel="noreferrer"><h2>Diagnostic Protocol Vulnerabilities</h2></a>
                <p>Modern automotive operations are governed by embedded computers that communicate over standardized protocols, forming the backbone of vehicular networking. In the domain of commercial vehicles, these systems predominantly rely on the high-level protocols running on top of the Controller Area Network (CAN) protocol for internal communication in medium and heavy-duty applications. Critical to this ecosystem is the Unified Diagnostics Services (UDS) protocol, outlined in ISO 14229 (Unified Diagnostic Services - UDS) and ISO 15765 (Diagnostic Communication over CAN), which provides essential diagnostic functionalities. This paper presents three distinct scenarios, demonstrating potential shortcomings of the UDS protocol standards and how they can be exploited to launch attacks on in-vehicle computers in commercial vehicles while bypassing security mechanisms.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;