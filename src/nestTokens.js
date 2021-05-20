 /* 
           将一维的tokens数组转换为多维
           */
 export default function nestTokens(tokens) {
     //  最终数组
     var nestedTokens = []

     //  栈结构，存放小tokens
     var sections = []

     //  定义收集器，默认指向nestedTokens，当收集器指向变换时，遇到#收集器会指向这个token的下表为2的新数组
     var collector = nestedTokens

     for (let i = 0; i < tokens.length; i++) {
         let token = tokens[i]
         switch (token[0]) {
             case '#':
                 collector.push(token)
                     //  入栈
                 sections.push(token)
                 collector = token[2] = []
                 break;
             case '/':
                 //  出栈
                 sections.pop()
                 collector = sections.length > 0 ? sections[sections.length - 1][2] : nestedTokens
                 break;
             default:
                 collector.push(token)

         }
     }
     return nestedTokens
 }