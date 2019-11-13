"use strict"

function createArray()
{
    let arr = new Array(7);
    for (let i = 0; i < 7; i++) {
		arr[i] = new Array(5);
    }
    return(arr);
}

function createCalendar()
{
    let calendar = createArray();
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let date = new Date(year, month);
    let dayMonth = date.getDate();
    let weekNumber = 0;
    while (weekNumber < 5)
    {
        switch(date.getDay())
        {
            case 0:
                calendar[weekNumber, 6] = date.getDate();
                dayMonth++;
                date = new Date(year, month, dayMonth);
                weekNumber++;
                break;
            case 1:
                calendar[weekNumber, 0] = date.getDate();
                dayMonth++;
                date = new Date(year, month, dayMonth);
                break;
            case 2:
                calendar[weekNumber, 1] = date.getDate();
                dayMonth++;
                date = new Date(year, month, dayMonth);
                break;
            case 3:
                calendar[weekNumber, 2] = date.getDate();
                dayMonth++;
                date = new Date(year, month, dayMonth);
                break; 
            case 4:
                calendar[weekNumber, 3] = date.getDate();
                dayMonth++;
                date = new Date(year, month, dayMonth);
                break;
            case 5:
                calendar[weekNumber, 4] = date.getDate();
                dayMonth++;
                date = new Date(year, month, dayMonth);
                break;
            case 6:
                calendar[weekNumber, 5] = date.getDate();
                dayMonth++;
                date = new Date(year, month, dayMonth);
                break;     
        }
    }
}