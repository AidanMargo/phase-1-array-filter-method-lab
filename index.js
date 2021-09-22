// Code your solution here
const findMatching = (names, string) => {

  const driverList = names.filter( (name) => {
    if (name.toLowerCase() == string.toLowerCase()){
      return name
    } else {
      return undefined
    }
  })

  return driverList;
}

const fuzzyMatch = (names, string) => {
  const driverList = names.filter( (name) => {
    if(name[0] === string[0]) {
      return name
    } else {
      return undefined
    }
  })
  return driverList
}

const matchName = (drivers, string) => {
  const driverList = drivers.filter( (driver) => {
    if(driver.name === string) {
      return driver
    } else {
      return undefined
    }
  })
  return driverList
}