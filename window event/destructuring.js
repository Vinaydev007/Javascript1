row=5;
value=0;
for(i=1;i<=row;i++){
    res=" "
    for(j=1;j<=i;j++){
        if(j==1){
       res+=i+" "
       value=i+row-j;
    }

    else{
        res=res+value+" ";
        value=value+row-j;
    }}
    console.log(res);
}