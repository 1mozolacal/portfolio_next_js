

export const classesUnpacker = (item,classes) => {

    if (item.class === undefined){
        return item
    }
    const clone = JSON.parse(JSON.stringify(item))
    const itemClasses = item.class.split(" ")
    itemClasses.forEach(myClasses => {
        if (classes[myClasses] !== undefined){
            Object.entries(classes[myClasses]).forEach(entries => {
                const [attribute,attrVal] = entries
                clone[attribute] = attrVal
            })
        }
    });
    return clone
}