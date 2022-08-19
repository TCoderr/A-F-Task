function group(oranArr,tutarArr,kodArr){

   //Toplama işleminden sonra arraydeki verileri kopyalamak için yeni arrayler oluşturuyoruz.
   var oranResultArr = [];
   var tutarResultArr = [];
   var kodResultArr = [];


   //Array içerisindeki bütün verileri kontrol ediyoruz.
   for (let i  = 0; i < oranArr.length; i++) {
      
      //Oran ve kod arrayleri içersindeli aynı arrayleri kopyalıyoruz.
      let sameIndexOranArr = oranArr.indexOf(oranArr[i],i+1);
      let sameIndexKodArr = kodArr.indexOf(kodArr[i],i+1);
      
      //Eğer aynı değerler yok ise indexof -1 değeri döndürür.
      //Dönen değere -1 e eşit değil ise aynı değerler var demektir.
      //Sadece oran arrayi ve kod arrayini kontrol ediyoruz. Aynı değerler var ise
      //Sadece tutar arrayi içerisindeki değerler indexlerine göre toplanıyor.
      if(sameIndexOranArr != -1 && sameIndexKodArr != -1) {
         oranResultArr[i] = oranArr[i];
         tutarResultArr[i] = tutarArr[i] + tutarArr[sameIndexOranArr];
         kodResultArr[i] = kodArr[i];
      }
      //Eğer oran ve kod arrayi içerisinde aynı değerler yok ise 
      //Aynı değerler yeni arrrayimize olduğu gibi kopyalanıyor.
      else{
         oranResultArr[i] = oranArr[i];
         tutarResultArr[i] = tutarArr[i];
         kodResultArr[i] = kodArr[i];
      }
   }


   //Aynı değeri taşıyan indexleri silmek için tekrar bir for oluşturuyoruz.
   //İLk for da oluşturur ise for içerisinde işlemler bitmeden silme işlemi gerçekleştirir ve yanlış işlem yapmış oluruz.
   for (let index = 0; index < oranResultArr.length; index++) {

      //Yine yukarıdaki gibi aynı indexleri buluyoruz.
      //Aynı indexler yok ise -1 dönecek var ise index numarası dönecektir.
      let sameIndexOranResultArr = oranResultArr.indexOf(oranResultArr[index], index+1);
      let sameIndexKodResultArr = kodResultArr.indexOf(kodResultArr[index], index+1);

      //-1 e eşit değil ise index numarası var demektir.
      //index numarası var ise bu index numarasına göre array içerisinden verileri splice ile siliyoruz.
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
//Array içerisindeki veriler 00 ile başladığında integer veriler 10 luk sayı sisteminde olmadığını düşünecektir.
//Bu sebeple verileri string olarak tanımladım.
var kod =  ['0071', '0071', '0073', '0073', '0071', '0071'];

group(oran, tutar, kod);
