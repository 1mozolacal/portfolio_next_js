import { useState, useEffect } from 'react'
import style from './style.module.scss'



const TypeWriter = () => {
    const startChar = '> '
    const typeChar = '_'
    const flashDelay = 500
    const flashAmount = 4
    const typeDelay = 50
    const carriageReturnDelay = 1000

    const lines = ['Hello, and welcome to my site!','As you can see my name is Calvin,','and I am a Computer Science Student at Ryerson.','Feel free to have a look around.']

    const [firstLine, setFirstLine] = useState('⠀')//Unicode Character “⠀” (U+2800)
    const [secondLine, setSecondLine] = useState(startChar + typeChar)
    const [currentPointer, setCurrentPointer] = useState({ sentence: 0, char: 0, flash: 0 })
    useEffect(() => {
        const {sentence,char,flash} = currentPointer
        const currentSentence = lines[sentence]
        var newSen = sentence
        var newChar = char
        var newFlash = flash
        var timer = 0
        if (flash == flashAmount && (sentence != lines.length-1) ){
            //new line
            timer=carriageReturnDelay
            newFlash++
            if(!sentence<lines.length-1){
                newSen++
                newFlash=0
                newChar=0
                setFirstLine(secondLine.substring(0,secondLine.length-1))
            }
        } else if (currentSentence.length == char) {
            //blink char
            newFlash++
            timer=flashDelay
        } else {
            //add char
            newChar++
            timer=typeDelay
        }
        setSecondLine(startChar + currentSentence.substring(0,newChar)  + (newFlash%2==0 ? typeChar: '⠀') )
        const timerCleanUp = setTimeout(() => {
            setCurrentPointer({
                sentence:newSen,
                char:newChar,
                flash:newFlash
            })
        }, timer);
        return () => clearTimeout(timerCleanUp);
    }, [currentPointer]);

    return (
        <div className={style.wrapper}>
            <h1 className={style['first-line']}>{firstLine}</h1>
            <h1 className={style['second-line']}>{secondLine}</h1>
        </div>
    )
}

export default TypeWriter