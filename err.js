console.log(a,b)

try
{
    console.log(a,b)
    throw new ReferenceError("Define variable a,b");
}

catch(err)
{
    console.log('erroer occured')
    console.log(err)
}
