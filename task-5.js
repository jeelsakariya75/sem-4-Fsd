var array=[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

function fun(array)
{
    obj={}
    for(i=0;i<array.length;i++)
    {
        var newarray=array[i]
        obj[newarray[0]]=newarray[1]
    }
    return obj
}
console.log(fun(array))