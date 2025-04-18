function reverseStr(str) {

    return [...str].reduce((reversed,char)=> char + reversed  ,'')

}