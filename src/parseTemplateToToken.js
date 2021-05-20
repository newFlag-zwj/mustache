// 导入扫描器类
import Scanner from './Scanner.js'
// 导入tokens字符转换函数
import nestTokens from './nestTokens.js'
/* 
将模板字符转为tokens数组 
*/
export default function parseTemplateToToken(templateStr) {
    var tokens = [];
    var words;
    var scanner = new Scanner(templateStr);
    while (!scanner.eos()) {

        words = scanner.scanUnit('{{')
        if (words != '') {
            tokens.push(['text', words])
        }
        scanner.scan('{{')

        words = scanner.scanUnit('}}')
            // 此时words中存放的内容为{{}}中间的值
        if (words != '') {
            //    判断words的第0个元素为什么
            if (words[0] == '#') {
                tokens.push(['#', words.substring(1)])
            } else if (words[0] == '/') {
                tokens.push(['/', words.substring(1)])
            } else {
                tokens.push(['name', words])
            }
        }
        scanner.scan('}}')
    }
    return nestTokens(tokens)
}