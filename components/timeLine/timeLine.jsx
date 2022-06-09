//NOTE: you require to add the css import into the page that you want to use this in
//import 'react-vertical-timeline-component/style.min.css';//vertical timeline

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Image from 'next/image';

const TimeLineElement = ({background, colour, date, title, subtitle, description,icon}) => {

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: background, color: colour }}
            contentArrowStyle={{ borderRight: `12px solid  ${background}` }}
            date={date}
            iconStyle={{ background: background, color: colour }}
            icon={(icon!== undefined) ? <Image src={icon} layout='fill'/> : undefined }
        >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
            <p>
                {description}
            </p>
        </VerticalTimelineElement>
    )
}

export default TimeLineElement