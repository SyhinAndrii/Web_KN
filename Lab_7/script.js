console.log("Функція 'triangle' приймає значення аргументів у такому порядку: \n(значення аргумента 1, «тип» аргумента 1 , значення аргумента 2, «тип» аргумента 2 )");
console.log("Перелік всіх типів аргументів: \n'leg' - катет, \n'hypotenuse' - гіпотенуза, \n'adjacent angle' - прилеглий до катета кут, \n'opposite angle' - протилежний до катета кут,\n'angle' - один з двох гострих кутів(другим параметром повинна бути задана гіпотенуза)");

var a,b,c,alpha,beta;
var argument_types=["leg","hypotenuse","adjacent angle","opposite angle","angle"];

function radToDeg (rad ){
		return (rad * 180) / Math.PI;
	}
function degToRad (deg ){
    return (Math.PI * deg) / 180;
}
function triangle(value1, type1, value2, type2){
    if(!argument_types.includes(type1) || !argument_types.includes(type2) || (type1 === "angle" && type2!="hypotenuse") || (type2 === "angle" && type1!="hypotenuse") ){
        console.log("Некоректний ввід: прочитайте інструкцію вище")
        return "failed";
    }
    
    if(value1<=0 || value2 <=0 ){
        return "Значення не можуть бути менше нуля або дорівнювати нулю";
    }


    //два катета
    if(type1 =="leg" && type2 == "leg"){
        a=value1;
        b=value2;
        c=Math.sqrt(a*a+b*b);
        alpha=radToDeg(Math.asin(a/c));
        beta=radToDeg(Math.asin(b/c));
    }

    //катет і гіпотенуза
    else if(type1 =="leg" && type2 == "hypotenuse" ){
        if(value2<=value1){
            return "Гіпотенуза не може бути меншою за катет";
        }
        a=value1;
        c=value2;
        b=Math.sqrt(c*c-a*a);
        alpha=radToDeg(Math.asin(a/c));
        beta=radToDeg(Math.asin(b/c));
    }
    else if(type2 =="leg" && type1 == "hypotenuse" ){
        if(value2>=value1){
            return "Гіпотенуза не може бути меншою за катет";
        }
        a=value2;
        c=value1;
        b=Math.sqrt(c*c-a*a);
        alpha=radToDeg(Math.asin(a/c));
        beta=radToDeg(Math.asin(b/c));
    }

    //катет і прилеглий кут
    else if(type1 =="leg" && type2 == "adjacent angle" ){
        if(value2>=90){
            return "Невірно введений кут: кут повинен бути гострим";
        }
        a=value1;
        beta=value2;
        alpha=90-beta;
        c=a/Math.cos(degToRad(beta));
        b=Math.sqrt(c*c-a*a);
    }
    else if(type1 =="adjacent angle" && type2 == "leg" ){
        if(value1>=90){
            return "Невірно введений кут: кут повинен бути гострим";
        }
        beta=value1;
        a=value2;
        alpha=90-beta;
        c=a/Math.cos(degToRad(beta));
        b=Math.sqrt(c*c-a*a);
    }

    //катет і протилежний гострий кут
    else if(type1 =="leg" && type2 == "opposite angle" ){
        if(value2>=90){
            return "Невірно введений кут: кут повинен бути гострим";
        }
        a=value1;
        alpha=value2;
        beta=90-alpha;
        c=a/Math.sin(degToRad(alpa));
        b=Math.sqrt(c*c-a*a);
    }
    else if(type1 =="opposite angle" && type2 == "leg" ){
        if(value1>=90){
            return "Невірно введений кут: кут повинен бути гострим";
        }
        a=value2;
        alpha=value1;
        beta=90-alpha;
        c = a/Math.sin(degToRad(alpa));
        
        b=Math.sqrt(c*c-a*a);
    }

    //гіпотенуза і гострий кут
    else if(type1 =="hypotenuse" && type2 == "angle" ){
        if(value2>=90){
            return "Невірно введений кут: кут повинен бути гострим";
        }

        с=value1;
        alpha=value2;
        beta=90-alpha;
        a=c*Math.cos(degToRad(beta));
        b=c*Math.cos(degToRad(alpha));
    }
    else if(type1 =="angle" && type2 == "hypotenuse" ){
        if(value1>=90){
            return "Невірно введений кут: кут повинен бути гострим";
        }
        c=value2;
        alpha=value1;
        beta=90-alpha;
        a=c*Math.cos(degToRad(beta));
        b=c*Math.cos(degToRad(alpha));
    }
    else{
        return "Невірний ввід";
    }

    console.log("a = "+ a);
    console.log("b = "+ b);
    console.log("c = "+ c);
    console.log("alpha = "+ alpha);
    console.log("beta = "+ beta);
    return "succes";
}