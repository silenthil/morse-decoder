const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    if(expr.length%10!=0) return;
    let decoder= Object.fromEntries(Object.entries(MORSE_TABLE).map(([key,value])=>[key=key.split('').map(item=>(item=='-')? 11:10 ).join(''),value]));
    decoder= Object.fromEntries(Object.entries(decoder).map(([key,value])=>[key=func(key),value]));
    function func(x){
        x=x.split('')
        while (x.length!=10){
            x.unshift('0')
        }
        return x.join('');
    }
    let count=0;
    let result='';
    function d(){
        if(count<expr.length){
            if(expr.slice(count,count+10)=='**********'){
            result+=' ';
            }
            for(let key in decoder){
                if(expr.slice(count,count+10)==key){
                    result+=decoder[key];
                }
            }
        count+=10;
        return d();
        } 
        else return result;  
    }
    return d()
}

module.exports = {
    decode
}
/*  let result="";
    for(let i=0;i<=expr.length;i+=10){
        if(expr.slice(i,i+10)=='**********') result+=' ';
    }*/