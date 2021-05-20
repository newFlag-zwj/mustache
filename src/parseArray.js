/* 
处理数组，结合renderTemplate实现递归
*/
import lookup from './lookup.js'

import renderTemplate from './renderTemplate.js'



export default function parseArray(token, data) {
    // 获取对应的数据
    var v = lookup(data, token[1])
        // 结果字符串
    var resultStr = ''
        // 遍历v数组
    for (let i = 0; i < v.length; i++) {
        // 补充一个"."的识别
        resultStr += renderTemplate(token[2], {
            ...v[i],
            '.': v[i]
        })

    }

    return resultStr
        // console.log(resultStr)

}