/* 
用于寻找对象层叠属性的值
*/

export default function lookup(dataObj, keyName) {
    // keyName中存在'.'符号时
    if (keyName.indexOf('.') != -1 && keyName != '.') {
        var keys = keyName.split('.')

        // 临时变量用于存储当前所指的对象
        var temp = dataObj;

        for (let i = 0; i < keys.length; i++) {
            temp = temp[keys[i]]
        }
        return temp
    }

    return dataObj[keyName]
}