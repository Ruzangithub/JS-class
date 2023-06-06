function AddTwoNum (a,b) 
{
 try
 {
    if (typeof(a) != 'number')
    {
        throw ('type argument is not a number');
    }
    else if(typeof(b) !='number') 
    {
        throw('type argument is not a number');
    }
    else 
    {
        console.log(a+b)
    }
}  
 catch(err)
 {
    console.log("error occured",err)

 }
}

AddTwoNum(5,5);