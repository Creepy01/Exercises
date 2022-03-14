function sort(a){
 for(i=0;i<a.length;i++){
     for(j=i+1;j<=a.length;j++){
         if(a[j]<a[i]){
             b=a[i];
             a[i]=a[j];
             a[j]=b;
         }
     }
 }
     
return;}
var array=[-4,-8,8,1,0,9,7];
sort(array);
console.log(array);
