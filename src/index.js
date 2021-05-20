import parseTemplateToToken from './parseTemplateToToken.js'
import renderTemplate from './renderTemplate.js'

// 全局提供FC_templateEngine对象
window.FC_templateEngine = {
    // 渲染方法
    render(templateStr, data) {
        // 调用parseTemplateToToken模板字符串变为tokens数组
        var tokens = parseTemplateToToken(templateStr);

        var res = renderTemplate(tokens, data)

        return res
    }
}