let getscore = function(studentScore, totalPosibleScore)
{
    let percent =  (studentScore / totalPosibleScore) * 100
    let letterGrade = ''

    if (percent >= 90)
    {
        letterGrade = 'A'
    }

    else if (percent >= 80)
    {
        letterGrade = 'B'
    }

    else if (percent >= 70)
    {
        letterGrade = 'C' 
    }

    else if (percent >= 60)
    {
        letterGrade = 'D'
    }

    else
    {
        letterGrade ='F'
    }

    return `you got a ${letterGrade} with (${percent}%)`
}

let result = getscore (5,20)
 
 console.log(result)
