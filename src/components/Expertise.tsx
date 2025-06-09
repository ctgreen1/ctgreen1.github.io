import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faMicrochip, faTruck }       from '@fortawesome/free-solid-svg-icons';  // <-- here
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Digital Logic",
    "Cadence Virtuoso",
    "Synopsis",
    "Altium Designer",
    "Operational Amplifiers",
    "CPUs",
    "Solder/Rework",
    "Debugging",
    "Testing",
    "PCB design",
    "Analog Integrated Circuits"
];

const labelsSecond = [
    "Controller Area Network (CAN)",
    "Vehicle Cybersecurity",
    "J1939",
    "J14229 (UDS)",
    "Embedded Systems",
    "Python",
    "C/C++",
    "Linux",
    "Software Reverse Engineering",
    "Digital Forensics",
];

const labelsThird = [
    "Python",
    "Bash",
    "TCL",
    "Assembly",
    "Ghidra",
    "VHDL",
    "C/C++",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faMicrochip} size="3x"/>
                    <h3>Electrical Engineering</h3>
                    <p>I have built a diverse array of printed circuit boards, simulators and testbenches, and I am well versed in troubleshooting techniques. A few key projects are the Ultimate Truck Hacking Platform (vehicle cybersecurity), an electrowetting biomedical device, and operational amplifier design and analysis.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faTruck} size="3x"/>
                    <h3>Cyber-Physical Systems</h3>
                <p>
                Current research involves investigating cybersecurity aspects of
                cyber-physical systems such as heavy trucks, boats, passenger cars,
                drones, and tractors. Previous experience includes participation in the&nbsp;
                <a href="https://www.cyberauto-challenge.org/" target="_blank" rel="noreferrer">
                    CyberAuto Challenge
                </a>,&nbsp;
                <a href="https://cyberboatchallenge.net/" target="_blank" rel="noreferrer">
                    CyberBoat Challenge
                </a>,&nbsp;
                <a href="https://www.cybertruckchallenge.org/" target="_blank" rel="noreferrer">
                    CyberTruck Challenge
                </a>,&nbsp;
                <a href="https://www.cyberdrone-challenge.org/" target="_blank" rel="noreferrer">
                    CyberDrone Challenge
                </a>, and&nbsp;
                <a href="https://cybertractorchallenge.org/" target="_blank" rel="noreferrer">
                    CyberTractor Challenge
                </a>
                &nbsp;as a student, mentor, and IT support.
                </p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Programming</h3>
                    <p>I have experience in Python, C/C++, and Linux, with a focus on embedded systems and software reverse engineering. Many of the projects I have worked on range from quick prototyping of software and hardware, using tools such as Arduino and Teensy, to full product developmend using a custom Yocto-based OS for truck hacking and analysis.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;