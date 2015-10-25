


function processData(strings) { 
		if(!strings) return;
		
		// strip stringified objects and punctuations from the string
		strings = strings.toLowerCase().replace(/object Object/g, '').replace(/[\+\.,\/#!$%\^&\*{}=_`~]/g,'');
		
		// convert the str back in an array 
		strings = strings.split(' '); 

		// Count frequency of word occurance
		var wordCount = {};
		for(var i = 0; i < strings.length; i++) {
		    if(!wordCount[strings[i]])
		        wordCount[strings[i]] = 0;
			
		    wordCount[strings[i]]++; // {'hi': 12, 'foo': 2 ...}
		}
		var wordCountArr = [];
		for(var prop in wordCount) {
			wordCountArr.push({text: prop, size: wordCount[prop]});
		}
		
		return wordCountArr;
	}
	
function quickSort(arr) {
    var pivot = arr[0];
    var i;
    var leftArr= [],rightArr = [];
    if(arr.length == 0) {
        return [];
    }
    if(arr.length == 1) {
        return arr;
    }
    for(i=1; i < arr.length; i++) {
        if(arr[i].size > pivot.size) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }
    return quickSort(leftArr).concat(pivot, quickSort(rightArr));
}