import {createI18n} from 'vue-i18n'
// 语言包
//  
import en from './locals/en'
import zh from './locals/zh'
import jp from './locals/jp'

const i18n = createI18n({
    legacy:localStorage.getItem('lang')??'zh', // 组合式api  必须设置为false
    locale:'zh', // 默认语言
    messages:{
        en,zh,jp
    }
})

export default i18n