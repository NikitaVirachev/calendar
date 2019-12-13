"use strict"

function createArray()
{
    let arr = [];
    for (let i = 0; i < 6; i++) {
		arr[i] = Array(7).fill(null);
    }
    return(arr);
}

module.exports = (date, year, month) => {
    let calendar = createArray();
    //let calendar = [7][5];
    
    let dayMonth = date.getDate();
    let weekNumber = 0;
    if ((year >= 1970) && (month < 12) && (month >= 0))
    {
        while ((weekNumber < 6) && (month === date.getMonth()))
        {
        switch(date.getDay())
        {
            case 0:
                calendar[weekNumber][6] = date.getDate();
                dayMonth++;
                date = new Date(year, month, dayMonth);
                weekNumber++;
                break;
            case 1:
                calendar[weekNumber][0] = date.getDate();
                dayMonth++;
                date = new Date(year, month, dayMonth);
                break;
            case 2:
                calendar[weekNumber][1] = date.getDate();
                dayMonth++;
                date = new Date(year, month, dayMonth);
                break;
            case 3:
                calendar[weekNumber][2] = date.getDate();
                dayMonth++;
                date = new Date(year, month, dayMonth);
                break; 
            case 4:
                calendar[weekNumber][3] = date.getDate();
                dayMonth++;
                date = new Date(year, month, dayMonth);
                break;
            case 5:
                calendar[weekNumber][4] = date.getDate();
                dayMonth++;
                date = new Date(year, month, dayMonth);
                break;
            case 6:
                calendar[weekNumber][5] = date.getDate();
                dayMonth++;
                date = new Date(year, month, dayMonth);
                break;     
        }
        }
    }
    
    return (calendar);
};