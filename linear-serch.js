const linearSearch = (arr, length, key) => {
    for(let index=0; index<length; index++){
        if(arr[index] === key) {
            return index
        }
    }
    return -1;
}

const inputArray = [1,2,55,21,68,10,35,76,123,54,36,51]
const key = 123

const res = linearSearch(inputArray, inputArray.length, key)

const message = res === -1 ? 'Key not found' : `${key} found at index ${res}`
console.log(message)
