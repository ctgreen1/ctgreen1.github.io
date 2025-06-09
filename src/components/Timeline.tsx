import React from 'react';
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

const commonStyle = {
  background: 'white',
  color: 'rgb(39, 40, 34)',
};
const arrowStyle = { borderRight: '7px solid  white' };
const iconStyle = { background: '#5000ca', color: 'rgb(39, 40, 34)' };

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>

        <VerticalTimeline lineColor="#5000ca">
          {/* ────────── Graduate Research Assistant ────────── */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={commonStyle}
            contentArrowStyle={arrowStyle}
            date="Aug 2024 – Present"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Graduate Research Assistant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Colorado State University Powerhouse Energy Institute — Fort Collins, CO
            </h4>
            <ul>
              <li>
                Designed forensic test-benches and an embedded vehicle-security
                analysis tool following a full systems-lifecycle process
              </li>
              <li>
                Co-organised CyberDrone and CyberBoat challenges with industry &
                academic partners; volunteered at BlackHat MEA Car-Hacking
                Village; IT staff and support at the CyberTruck challenge
              </li>
              <li>
                Competed in CyberSeed and MITRE embedded CTF vehicle-security
                competitions
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* ────────── Physical Design Intern ────────── */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={commonStyle}
            contentArrowStyle={arrowStyle}
            date="May 2024 – Aug 2024"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Physical Design Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Advanced Micro Devices — Fort Collins, CO
            </h4>
            <ul>
              <li>
                Optimised PPA through placement / routing and automated flows
                with custom scripts
              </li>
              <li>
                Partnered with verification teams for timing closure on critical
                CPU paths (next-gen L3 cache)
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* ────────── Undergraduate Research Assistant ────────── */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={commonStyle}
            contentArrowStyle={arrowStyle}
            date="Jan 2022 – May 2024"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Undergraduate Research Assistant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Colorado State University Powerhouse Energy Institute — Fort Collins, CO
            </h4>
            <ul>
              <li>
                Engineered man-in-the-middle CAN devices and heavy-truck
                test-beds for security research
              </li>
              <li>
                Developed PCB diagnostic tools for automotive-network
                stakeholders
              </li>
              <li>
                Mentored & competed in 6 + national vehicle-security events
                (CyberTruck, CyberAuto etc.)
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* ────────── Intern Assembler ────────── */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={commonStyle}
            contentArrowStyle={arrowStyle}
            date="May 2021 – Aug 2021"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Intern Assembler
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Advanced Energy — Fort Collins, CO
            </h4>
            <ul>
              <li>
                Performed IPC-compliant soldering/rework, calibration, and
                component-level repairs of plasma power systems
              </li>
              <li>Authored QA protocols and trained incoming interns</li>
            </ul>
          </VerticalTimelineElement>

          {/* ────────── Research Assistant ────────── */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={commonStyle}
            contentArrowStyle={arrowStyle}
            date="Jan 2020 – May 2021"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Research Assistant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              CSU Dept. of Mechanical Engineering — Fort Collins, CO
            </h4>
            <ul>
              <li>
                Analysed thermophysical properties of lubricants for natural-gas
                compression
              </li>
              <li>
                Investigated oil / gas behaviour in high-pressure dilution
                environments
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
