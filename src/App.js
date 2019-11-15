import React from 'react';
import createCalendar from './createCalendar';
import './style.css';

function App() {
    let calendar = createCalendar();
    console.log(calendar);
    return (
        <div id="menu">
            <table cellPadding="0">
                <thead><tr>
                    <th><a href="#">Пн</a></th>
                    <th><a href="#">Вт</a></th>
                    <th><a href="#">Ср</a></th>
                    <th><a href="#">Чт</a></th>
                    <th><a href="#">Пт</a></th>
                    <th><a href="#" className="holiday">Сб</a></th>
                    <th><a href="#" className="holiday">Вс</a></th>
                </tr></thead>
                <tbody>{calendar.map((week, index) =>
                    <tr key={index}>
                        {
                            week.slice(0, 5).map((day, index) => <td key={index}><a href="#">{day}</a></td>)
                        }
                        {
                            week.slice(5, 7).map((day, index) => <td key={index}><a href="#" className="holiday">{day}</a></td>)
                        }
                    </tr>)
                }</tbody>
            </table>
        </div>
    );
}

export default App;