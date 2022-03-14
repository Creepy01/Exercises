function Del(a,b){
    for(i=0;i<b.length;i++)
    {if (b[i]==a){for (var j=i;j<=b.length-1;j++)
                   {b[j]=b[j+1];
                     }
                b.length--;
                }
    }    
return;}
var arr=[1,2,3,4,5];
Del(2,arr);
console.log(arr);

function DelDup(b){
    for(i=0;i<b.length;i++)
    {if (b[i]==b[i+1])
        {for(j=i;j<=b.length-1;j++)
            {b[j]=b[j+1];}
            b.length--;}
     }
        
return;}
var array=[1,2,2,3,4,5]
DelDup(array);
console.log(array);
