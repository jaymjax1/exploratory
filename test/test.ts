const driver = (name) => {
    drive: () => { console.log('vroom vroom' + name) }
}

const person = (name) => {
    this.name = name
    return (<any>Object).assign(
        {},
        driver(name)
    )
}

const justin = person('justin');
console.log(justin)