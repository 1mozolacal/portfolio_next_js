function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

const convertRGBToHex = ({ r, g, b }) => {
    const fixedR = Math.max(0, Math.min(255, Math.round(r)))
    const fixedG = Math.max(0, Math.min(255, Math.round(g)))
    const fixedB = Math.max(0, Math.min(255, Math.round(b)))
    return "#" + componentToHex(fixedR) + componentToHex(fixedG) + componentToHex(fixedB);
}

export default convertRGBToHex