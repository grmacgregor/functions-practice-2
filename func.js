// 1.

function getName(obj) {
	//var name = obj.hasOwnProperty('name') ? obj.name : "";
	var name = obj.name;
	return name;
}

console.log(getName({ name: 'Luisa', age: 25 }));


// 2.

function totalLetters(arr) {
	var wordCount = 0;
	for (var i=0; i < arr.length; i++) {
		wordCount += arr[i].length;
	}
	return wordCount;
}

console.log(totalLetters(['javascript', 'is', 'awesome']));
console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']));

// 3.

function keyValue(a, b) {
	var obj = {};
	obj[a] = b;
	return obj;
}

console.log(keyValue('city', 'Denver'));

// 4.

function negativeIndex(arr, negnum) {
	return arr[arr.length + negnum];
}

console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));

// 5.

function removeM(str) {
	var newStr = "";
	for(var i=0; i<str.length; i++) {
		if(str[i] !== 'm') {
			newStr += str[i];
		}
	}
	return newStr;
}

console.log(removeM('family'));
console.log(removeM('memory'));

// 6.

function printObject(obj) {
	for (key in obj)
	console.log(key + " is " + obj[key]);
}

printObject({ a: 10, b: 20, c: 30 });
printObject({ firstName: 'pork', lastName: 'chops' });

// 7.

function vowels(str) {
	var arr = [];
	for (var i=0; i<str.length; i++) {
		if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
			arr.push(str[i]);
		}
	}
	return arr;
}

console.log(vowels('alabama'));
console.log(vowels('What evil odd ducks!'));

// 8.

function twins(arr) {
	for(var i=0; i<arr.length; i+=2) {
		if (arr[i] !== arr[i+1] || arr[i] === undefined) {
			return false;
		}
	}
	return true;
}

console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']));
console.log(twins(['a', 'a', 'b', 'z']));
console.log(twins(['a', undefined, 'b', 'b']));

// 9.

//DIDNT READ THE QUESTION PROPERLY --- SAME FINAL RESULT BUT KEEPS CHECKING PAST FIRST TRUE.
// function or(arr) {
// 	var test = 0
// 	for( var i=0;i<arr.length;i++) {
// 		if (arr[i] === true) {
// 			test += 1;
// 		}
// 	}
// 	if (test>0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

function or(arr) {
	for(var i=0;i<arr.length;i++) {
		if (arr[i] === true) {
			return true;
		}
	}
	return false;
}

console.log(or([false, false, true, false]));
console.log(or([false, false, false]));
console.log(or([]));

// 10.

var unique = function(arr) {
    var unique = [];
    for (var i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) == -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
};

console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']));
console.log(unique(['todd', 'avery', 'maria', 'avery']));
