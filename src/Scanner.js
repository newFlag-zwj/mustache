/* 
扫描器类
*/

export default class Scanner {
    constructor(templateStr) {
        this.templateStr = templateStr;
        // 扫描指针
        this.pos = 0;
        // 尾巴默认为全部模板字符串
        this.tail = templateStr
    }

    // 扫描指定的内容，没有返回值
    scan(tag) {
        if (this.tail.indexOf(tag) == 0) {
            // 改变指针
            this.pos += tag.length;
            // 改变尾部
            this.tail = this.templateStr.substring(this.pos)
        }
    }

    // 让指针进行扫描，知道遇到指定内容'{{'停止，并返回结束之前路过的文字
    scanUnit(stopTag) {
        // 记录执行本方法时的pos值进行备份
        const pos_backup = this.pos;
        while (!this.eos() && this.tail.indexOf(stopTag) != 0) {
            this.pos++;
            // 改变尾巴为当前指针开始到最后
            this.tail = this.templateStr.substring(this.pos)
        }

        return this.templateStr.substring(pos_backup, this.pos)
    }

    // 判断指针是否到头
    eos() {
        return this.pos >= this.templateStr.length
    }
}