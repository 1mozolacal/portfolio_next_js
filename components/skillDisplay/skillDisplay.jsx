import moduleStyling from './style.module.scss'
import { useState, useEffect } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import { Line, Circle } from 'rc-progress';
import { rgbToHex } from '../helperComponents/helperFunctions'
import { Col, Container, Row } from 'react-bootstrap';



const Wheel = ({ data, callbackSelected, angle = 180, lineWidth = 10, paddingAngle = 8, labelPosition = 60 }) => {
    const [selected, setSelected] = useState(0);
    const [hovered, setHovered] = useState(undefined);

    if (data === undefined) {
        console.error("Data not provided to the wheel")
        return (<div>Data not provided</div>)
    }

    const displayData = Object.keys(data).map((key, i) => {
        const entry = data[key]
        console.log(entry)
        if (hovered === i) {
            return {
                title: entry.title,
                value: entry.value,
                color: rgbToHex({
                    r: entry.colour.r + 50,
                    g: entry.colour.g + 50,
                    b: entry.colour.b + 50,
                }),
            };
        }
        return {
            title: entry.title,
            value: entry.value,
            color: rgbToHex(entry.colour)
        }
    });

    return (
        <PieChart
            data={displayData}
            lineWidth={lineWidth}
            paddingAngle={paddingAngle}
            startAngle={angle}
            rounded
            animate
            animationDuration={1500}
            label={({ dataEntry }) => dataEntry.title}
            labelStyle={(index) => ({
                fill: displayData[index].color,
                fontSize: '5px',
                fontFamily: 'sans-serif',
            })}
            labelPosition={labelPosition}
            segmentsShift={(index) => (index === selected ? 4 : 0)}
            // segmentsStyle={(index) => ({
            //     overflow: 'visible'
            // })}
            style={{
                overflow: 'visible'
            }}
            onClick={(event, index) => {
                console.log('CLICK', Object.keys(data)[index]);
                console.log(index)
                callbackSelected(Object.keys(data)[index]);
                setSelected(index);
            }}
            onMouseOver={(_, index) => {
                setHovered(index);
            }}
            onMouseOut={() => {
                setHovered(undefined);
            }}
        />

    )
}

//Colours are a dictionary with keys of 'r','g','b' with values 0 to 255
const AnimatedSkillBarGroup = ({ data, loadedFactor }) => {
    if (data == undefined) {
        return (<div>Data not provided</div>)
    }

    function colourCalc(start, end, factor) {
        const calc = (s, e, f) => {
            const delta = e - s
            return s + (delta * f)
        }
        const colourBound = (value) => {
            return Math.max(Math.min(Math.round(value), 255), 0)
        }
        const r = colourBound(calc(start.r, end.r, factor))
        const b = colourBound(calc(start.b, end.b, factor))
        const g = colourBound(calc(start.g, end.g, factor))
        return {
            r: r,
            b: b,
            g: g,
        }
    }

    return (
        <div className={moduleStyling['skill-bar-holder']}>
            {Object.keys(data).map((item, index) => {
                const { skillLevel, start, end } = data[item]
                const newColour = colourCalc(start, end, loadedFactor)
                return (
                    <div key={index} className={moduleStyling['skill-bar-item']}>
                        <h3 className={moduleStyling['skill-title']}>{item}</h3>
                        <Line
                            percent={Math.max(Math.min(10, skillLevel), Math.round(skillLevel * loadedFactor))}
                            strokeWidth={1}
                            strokeColor={rgbToHex(newColour)}
                        />
                    </div>
                )
            })}

        </div>
    )
}

//example data
const testLine = {
    'web dev': {
        'css': { skillLevel: 90, start: { r: 100, g: 20, b: 100 }, end: { r: 100, g: 200, b: 100 } },
        'html': { skillLevel: 50, start: { r: 10, g: 20, b: 10 }, end: { r: 100, g: 200, b: 100 } },
        'cssa': { skillLevel: 90, start: { r: 100, g: 20, b: 100 }, end: { r: 100, g: 200, b: 100 } },
        'htmla': { skillLevel: 50, start: { r: 10, g: 20, b: 10 }, end: { r: 100, g: 200, b: 100 } },
        'cssb': { skillLevel: 90, start: { r: 100, g: 20, b: 100 }, end: { r: 100, g: 200, b: 100 } },
        'htmlb': { skillLevel: 50, start: { r: 10, g: 20, b: 10 }, end: { r: 100, g: 200, b: 100 } },
        'acss': { skillLevel: 90, start: { r: 100, g: 20, b: 100 }, end: { r: 100, g: 200, b: 100 } },
        'ahtml': { skillLevel: 50, start: { r: 10, g: 20, b: 10 }, end: { r: 100, g: 200, b: 100 } },
        'acssa': { skillLevel: 90, start: { r: 100, g: 20, b: 100 }, end: { r: 100, g: 200, b: 100 } },
        'ahtmla': { skillLevel: 50, start: { r: 10, g: 20, b: 10 }, end: { r: 100, g: 200, b: 100 } },
        'acssb': { skillLevel: 90, start: { r: 100, g: 20, b: 100 }, end: { r: 100, g: 200, b: 100 } },
        'ahtmlb': { skillLevel: 50, start: { r: 10, g: 20, b: 10 }, end: { r: 100, g: 200, b: 100 } },
    },
    'data science': {
        'python': { skillLevel: 50, start: { r: 10, g: 20, b: 10 }, end: { r: 100, g: 200, b: 100 } },
        'python': { skillLevel: 50, start: { r: 10, g: 20, b: 10 }, end: { r: 100, g: 200, b: 100 } }
    }
}
const testWheel = {
    'web dev': { title: 'Web Dev', value: 80, colour: { r: 66, g: 78, b: 245 } },
    'data science': { title: 'Data science', value: 80, colour: { r: 99, g: 22, b: 76 } },
    'other': { title: 'Three', value: 80, colour: { r: 105, g: 184, b: 40 } },
}

const Display = ({ lineData, wheelData, delay = 400, duration = 1000, timerInterval = 10 }) => {
    console.log('linedata', lineData)
    const [currentSelector, setCurrentSelector] = useState(Object.keys(lineData)[0])
    const [loadedAt, setLoadedAt] = useState(Date.now())
    const [factor, setFactor] = useState(0)

    const wheelCallback = (key) => {
        if (currentSelector == key) {
            return;
        }
        setCurrentSelector(key)
        setLoadedAt(Date.now())
        setFactor(0)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setFactor(Math.min(Math.max((Date.now() - loadedAt - delay) / duration, 0), 1))
            // console.log('time', Math.min(Math.max((Date.now() - loadedAt - delay) / duration, 0), 1))
            // console.log('loaded at', loadedAt)
        }, timerInterval);
        return () => clearInterval(interval);

    }, [loadedAt]);


    return (
        <Container>
            <Row>
                <Col sm={12} lg={6}>
                    <div className={moduleStyling['wheel-holder']}>
                        <Wheel data={wheelData} callbackSelected={wheelCallback} />
                    </div>
                </Col>
                <Col sm={12} lg={6}>
                    <AnimatedSkillBarGroup data={lineData[currentSelector]} loadedFactor={factor}></AnimatedSkillBarGroup>
                </Col>

            </Row>
        </Container>)

}

export default Display


