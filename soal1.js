function result()
{
    var input = [5,-6,-8,4,-3,6];
    var arrayp = [];
    var arrayn = [];
    var totalp = 0;
    var totaln = 0;
    var p = 0;
    var n = 0;
    var hasil;
    let z = ''

    for (var i=0; i<input.length; i++)
    {
        if (input[i] >= 0)
        {
            arrayp[p] = input[i];
            p++;
        }
        
        if (input[i] < 0)
        {
            arrayn[n] = input[i];
            n++
        }
    }

    for (var i=0; i<arrayp.length; i++)
    {
        totalp = totalp + arrayp[i];
    }
    for (var i=0; i<arrayn.length; i++)
    {
        totaln = totaln + arrayn[i];
    }
    var abss = Math.abs(totaln);
    if ( totalp > abss)
    {
        z = z + 'Positive Wins'
    }
    else if (totalp <abss)
    {
        z = z + 'Negative Wins'
    }
    else if (totalp == abss)
    {
        z = z + 'DRAW'
    }
    console.log(z);
}
result()