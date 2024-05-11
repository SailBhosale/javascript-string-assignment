let name = "sail bhosale";

	function capitalize(){
		let convertStringToArray = name.split(" ");
		 
		for(let i=0; i<convertStringToArray.length; i++){
			convertStringToArray[i] = convertStringToArray[i].charAt(0).toUpperCase()+convertStringToArray[i].slice(1);
		}
		 
		 
		document.write(convertStringToArray.join(" "));
	 }
	 
	 capitalize();
	 
		document.write("<hr>");
		document.write("<br>");

		document.write("<h1>Capitalize All Words</h1>");
		
		function capitalizeAll(){
			let str = "sail bhosale"
 			convertStringToArray = str.split("");
			
			for(let i=0; i<convertStringToArray.length; i++){
				convertStringToArray[i] = String.fromCharCode(convertStringToArray[i].charCodeAt(0)-32);
			}
			
			document.write(convertStringToArray.join(""));
		}
		capitalizeAll();
		
		document.write("<hr>");
		document.write("<br>");
		
		document.write("<h1>Word Existence Check</h1>");
		
		
		function wordExistenceCheck(){
			let str = "jay shree ram"
			let word = "ram"
			
			let iswordincluded = str.includes(word);
			document.write(iswordincluded);
		}
		wordExistenceCheck();	    
		
		document.write("<hr>");
		document.write("<br>");
		
		
	 
		document.write("<h1>Word Occurrence Count</h1>");
		
		function WordOccurrenceCount(){
			let str = "shri swami samrth jay jay swami samarth"
			let word = "swami"
			
			
			document.write((str.match(/swami/g)).length);
		}	 
		WordOccurrenceCount()
		
		document.write("<hr>");
		document.write("<br>");
		
		
		document.write("<h1>Word Density Calculation<h1>");
		
		function WordDensityCalculation(givenString, word){
 			let convertStringToArray = givenString.split(" ");
			console.log(convertStringToArray);
			let count = 0;
 			
			for(let i=0; i<convertStringToArray.length; i++){
				if(convertStringToArray[i]===word){
						count++;
				}
			}
			
				let wordDensity = (count/convertStringToArray.length)*100;
				document.write(wordDensity);
		}
		
		WordDensityCalculation("shri swami samrth jay jay swami samarth", "swami");
		
		document.write("<hr>");
		document.write("<br>");
		
		
		
		document.write("<h1>File Extension Extraction</h1>");
		
		
		function getExt(file){
		
			if (file.includes(".")){
				let fileExt=file.split(".").pop();
				return fileExt;
				
			}
			else{
				return null;
			}
			
		}
		let result = getExt("index.html");
		document.write(result);
		
		document.write("<hr>");
		document.write("<br>");
		
		
		
		document.write("<h1>Removing Whitespace</h1>");
		
		function removeWhitespace(givenString){

		 let noWhiteSpace = givenString.replace(/\s/g, "");
		 return noWhiteSpace;		 
		}
		document.write(removeWhitespace( "sa il bh osa le "));
		
		document.write("<hr>");
		document.write("<br>");
		
		
		document.write("<h1>Reverse Words</h1>");
		
		function reverseWords(givenString){
			let reverse = "";
		
		for(let i=givenString.length-1; i>=0; i--){
			
			reverse = reverse+ givenString[i];
		}
		return reverse;
	}
	
	document.write(reverseWords("sail"));
	
		document.write("<hr>");
		document.write("<br>");
		
		
		document.write("<h1>Counting Vowels</h1>");
		
		function countingVowels(givenString){
			let count =0;
			for(let i=0; i<givenString.length; i++){
				
				if(givenString[i]=="a" || givenString[i]=="e" || givenString[i]=="i" || givenString[i]=="o" ||
				givenString[i]=="u" || givenString[i]=="A" || givenString[i]=="E" || givenString[i]=="I" ||
				givenString[i]=="O" || givenString[i]=="U")
				{
					count++;
				}
			}
			return count;
		}
		
		document.write(countingVowels("sail bhosale"));
		
		document.write("<hr>");
		document.write("<br>");
		
		
		document.write("<h1>String Palindrome Check</h1>");
		
		function isPalindrome(givenString){
			let reverse = "";
		
		for(let i=givenString.length-1; i>=0; i--){
			
			reverse = reverse+ givenString[i];
		}
		
		
		if(givenString===reverse){
			document.write(`'${givenString}' is Palindrome`);
		}
		else{
			document.write(`'${givenString}' is not Palindrome`);
 		}
	}
		
		isPalindrome("madam");
		
		document.write("<hr>");
		document.write("<br>");
		
		
		document.write("<h1>String Truncation</h1>");
		
		function truncateString(givenString){
			let truncateString = givenString + "...";
			
			document.write(truncateString);
	
		}
		   truncateString("sail");
		   
		   
		document.write("<hr>");
		document.write("<br>");
		
		
		document.write("<h1>String Masking</h1>");
		
		function maskString(givenString, stringadd){
			let sliceString = givenString.slice(stringadd);
			
			for( i=0; i<stringadd; i++){
				sliceString="*"+sliceString;
			}
			console.log(sliceString);
			document.write(sliceString);
		}
		maskString("sail",3);
		
		document.write("<hr>");
		document.write("<br>");
		
		
		document.write("<h1>Email Validation:</h1>");
		
		function validateEmail(emailId){
			let mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            let result = mailformat.test(emailId);
			
			if(result)
			{
				console.log("valid email address");
				
				return true;
			}
			else
			{
				console.log("invalid email address");
				
				return false;
				
			}
		}
		 document.write(validateEmail("bhosalesail321@gmail.com"));
		 document.write(validateEmail("Hello123@.com"));