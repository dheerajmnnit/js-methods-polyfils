let obj1 = {
  "pKey": {
    "childKey": {
      "nestedKey": "value"
    },
    "childKey2": "value2"
  }
}

let obj2 = {
  "parentKey": {
    "childKey": {
      "nestedKey": "value2",
      "nestedKey2": "value3"
    },
    "childKey2": "value2"
  }
}

let keysInObj1 = []
let keysInObj2 = []

function compare(object, arr) {
  for (const obj in object) {
    arr.push(obj)
    if (typeof (object[obj]) == 'object') {
      compare(object[obj], arr)
    }
  }
}

compare(obj1, keysInObj1)
compare(obj2, keysInObj2)


keysInObj1.forEach((val, index) => {
  if (keysInObj2[index] != val) {
    console.log('Objects are not the same')
  }
})