import moduleStyling from './style.module.scss'
import { useState, useEffect } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import { Line, Circle } from 'rc-progress';
import { rgbToHex } from '../helperComponents/helperFunctions'



const Wheel = () => {

    const dataMock = [
        { title: 'One', value: 10, color: '#E38627' },
        { title: 'Two', value: 15, color: '#C13C37' },
        { title: 'Three', value: 20, color: '#6A2135' },
    ];

    return (
        <PieChart
            data={dataMock}
            lineWidth={20}
            paddingAngle={14}
            rounded
            label={({ dataEntry }) => dataEntry.value}
            labelStyle={(index) => ({
                fill: dataMock[index].color,
                fontSize: '5px',
                fontFamily: 'sans-serif',
            })}
            labelPosition={60}
        />

    )
}

const Lines = () => {
    return (<div>
        <Line percent={10} strokeWidth={1} strokeColor="#29edff" />
        <Line percent={50} strokeWidth={1} strokeColor="#29edff" />
        <Line percent={90} strokeWidth={1} strokeColor="#29edff" />
        <Circle percent={10} strokeWidth={4} strokeColor="#29edff" />
    </div>
    )
}

//Colours are a dictionary with keys of 'r','g','b' with values 0 to 255
const AnimatedSkillBarGroup = ({ data, loadedFactor }) => {

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
        <div>
            <div>{Date.now()}</div>
            {Object.keys(data).map((item, index) => {
                const { skillLevel, start, end } = data[item]
                const newColour = colourCalc(start, end, loadedFactor)
                return (
                    <div>
                        <h3 className={moduleStyling['skill-title']}>{item}</h3>
                        <Line
                            key={index}
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
const lineData = {
    'web dev': { 'css': { skillLevel: 90, start: { r: 100, g: 20, b: 100 }, end: { r: 100, g: 200, b: 100 } }, 'html': { skillLevel: 50, start: { r: 10, g: 20, b: 10 }, end: { r: 100, g: 200, b: 100 } } },
    'data science': { 'python': 100, 'pandas': 50 }
}
const wheelData = {
    'web dev': { title: 'web development', value: 80, start: { r: 100, g: 20, b: 100 }, target: { r: 100, g: 200, b: 100 } },
    'data science': { title: 'Data science', value: 80, start: { r: 100, g: 20, b: 100 }, target: { r: 100, g: 200, b: 100 } },
}

const Display = (testLine, testWheel, delay = 800, duration = 1000, timerInterval = 10) => {

    const [currentSelector, setCurrentSelector] = useState(Object.keys(lineData)[0])
    const [loadedAt, setLoadedAt] = useState(Date.now() + 1)
    const [factor, setFactor] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setFactor(Math.min(Math.max((Date.now() - loadedAt - delay) / duration, 0), 1))
        }, timerInterval);
        return () => clearInterval(interval);

    }, []);


    return (<div>
        <AnimatedSkillBarGroup data={lineData[currentSelector]} loadedFactor={factor}></AnimatedSkillBarGroup>
        <Wheel></Wheel>
        <Lines></Lines>
    </div >)

}

export default Display


