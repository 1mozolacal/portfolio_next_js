import Display from "../components/skillDisplay/skillDisplay"
import skillData from '../content/skills.json'


export default function Home() {
    let skillLinedata = {}
    let skillWheelData = {}
    Object.keys(skillData).forEach(key => {
        skillLinedata[key] = skillData[key]['skills']
        skillWheelData[key] = skillData[key]['wheel']
    })
    return (
        <Display
            lineData={skillLinedata}
            wheelData={skillWheelData} />
    )
}
