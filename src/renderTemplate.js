/* 
用数据替换token中特定字符串
 */

// 导入多层对象查找函数
import lookup from './lookup.js'
// 导入renderArray实现递归
import parseArray from './parseArray.js'

export default function renderTemplate(tokens, data) {
    // 定义结果字符串
    var resultStr = '';
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]

        if (token[0] == 'text') {
            resultStr += token[1]
        } else if (token[0] == 'name') {
            // 防止出现对象的层叠寻找lookup
            resultStr += lookup(data, token[1])
        } else if (token[0] == '#') {
            resultStr += parseArray(token, data)
        }
    }
    return resultStr
}