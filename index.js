function group(oranArr,tutarArr,kodArr){

   var oranResultArr = [];
   var tutarResultArr = [];
   var kodResultArr = [];
   for (let i  = 0; i < oranArr.length; i++) {
      
      let sameIndexOranArr = oranArr.indexOf(oranArr[i],i+1);
      let sameIndexKodArr = kodArr.indexOf(kodArr[i],i+1);
      
      if(sameIndexOranArr != -1 && sameIndexKodArr != -1) {
         oranResultArr[i] = oranArr[i];
         tutarResultArr[i] = tutarArr[i] + tutarArr[sameIndexOranArr];
         kodResultArr[i] = kodArr[i];
      }
      else{
         oranResultArr[i] = oranArr[i];
         tutarResultArr[i] = tutarArr[i];
         kodResultArr[i] = kodArr[i];
      }

      /*oranResultArr[i] = oranArr[i];
      tutarResultArr[i] = tutarArr[i];
      kodResultArr[i] = kodArr[i];*/

      

   }

   for (let index = 0; index < oranResultArr.length; index++) {

      
      let sameIndexOranResultArr = oranResultArr.indexOf(oranResultArr[index], index+1);
      let sameIndexKodResultArr = kodResultArr.indexOf(kodResultArr[index], index+1);

      if(sameIndexOranResultArr != -1 && sameIndexKodResultArr != -1) {
         oranResultArr.splice(sameIndexOranResultArr, 1);
         tutarResultArr.splice(sameIndexOranResultArr, 1);
         kodResultArr.splice(sameIndexOranResultArr, 1);
   }
}

function addLeadingZeros(num, totalLength) {
   return String(num).padStart(totalLength, '0');
 }

   console.log(oranResultArr);
   console.log(tutarResultArr);
   console.log(kodResultArr);


}

var oran = [0, 1, 8, 18, 18, 1];
var tutar =  [10, 15, 12, 23, 30, 43];
var kod =  ['0071', '0071', '0073', '0073', '0071', '0071'];

group(oran, tutar, kod);
