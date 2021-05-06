import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineContent from '@material-ui/lab/TimelineContent';
import { Typography } from '@material-ui/core';
import React from 'react';

const CustomtimelineItem = (title, text, link) => {
    return (

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineContent>
                        {
                            link ? (<Typography><span>(title):</span> <a href={link} target='_blank'>{text}</a></Typography> ) : (<Typography><span>(title):</span>{title}</Typography> )
                        }
                    </TimelineContent>
                </TimelineSeparator>
            </TimelineItem>
        
    );
};

export default CustomtimelineItem;