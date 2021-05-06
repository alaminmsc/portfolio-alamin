import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import './Timeline.css';
import { Typography } from '@material-ui/core';


export const CustomTimeLineSeparator = () => {
  <TimelineSeparator className="separator_padding">
  <TimelineDot className="timeline_dot" />
  <TimelineConnector />
</TimelineSeparator>
}

const CustomTimeline = ({title,icon,children}) => {
    return (
        <Timeline className="timeline">
            {/* Timeline items */}
        <TimelineItem className="timeline_firstItem">
          <TimelineSeparator>
            <TimelineDot className="timeline_dot_header">
               {icon}
            </TimelineDot>
            
          </TimelineSeparator>
          <TimelineContent><Typography variant="h6" className="timeline_header"></Typography> </TimelineContent>
        </TimelineItem>

      {/* Remaining content */}
      <TimelineItem className="timeline_secondItem">
          <TimelineSeparator className="separator_padding">
            <TimelineDot className="timeline_dot">
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent><Typography>Name:</Typography> </TimelineContent>
        </TimelineItem>

      <TimelineItem className="timeline_secondItem">
          <TimelineSeparator className="separator_padding">
            <TimelineDot className="timeline_dot">
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent><Typography>Email:</Typography> </TimelineContent>
        </TimelineItem>
        <TimelineItem className="timeline_secondItem">
          <TimelineSeparator className="separator_padding">
            <TimelineDot className="timeline_dot">
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent><Typography>LinkedIn</Typography> </TimelineContent>
        </TimelineItem>
        <TimelineItem className="timeline_secondItem">
          <TimelineSeparator className="separator_padding">
            <TimelineDot className="timeline_dot">
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent><Typography>Github</Typography> </TimelineContent>
        </TimelineItem>
        <TimelineItem className="timeline_secondItem">
          <TimelineSeparator className="separator_padding">
            <TimelineDot className="timeline_dot">
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent><Typography>Twitter</Typography> </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
};



export default CustomTimeline;