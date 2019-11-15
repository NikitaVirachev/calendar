"use strict"

function createArray()
{
    let arr = [];
    for (let i = 0; i < 5; i++) {
		arr[i] = Array(7).fill(null);
    }
    return(arr);
}

export default function createCalendar()
{
    let calendar = createArray();
    //let calendar = [7][5];
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let date = new Date(year, month);
    let dayMonth = date.getDate();
    let weekNumber = 0;
    while ((weekNumber < 5) && (month === date.getMonth()))
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
    return (calendar);
}