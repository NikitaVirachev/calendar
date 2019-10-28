import React from 'react';

import './style.css';

function App() {
    return (
      <div id = "menu">
          <table cellPadding = "0">
              <tr>
                  <th><a href = "#">Пн</a></th>
                  <th><a href = "#">Вт</a></th>
                  <th><a href = "#">Ср</a></th>
                  <th><a href = "#">Чт</a></th>
                  <th><a href = "#">Пт</a></th>
                  <th><a href = "#" className = "holiday">Сб</a></th>
                  <th><a href = "#" className = "holiday">Вс</a></th>
              </tr>
              <tr>
                  <td><a href = "#"></a></td>
                  <td><a href = "#"></a></td>
                  <td><a href = "#"></a></td>
                  <td><a href = "#"></a></td>
                  <td><a href = "#">1</a></td>
                  <td><a href = "#" className = "holiday">2</a></td>
                  <td><a href = "#" className = "holiday">3</a></td>
              </tr>
              <tr>
                  <td><a href = "#" className = "holiday">4</a></td>
                  <td><a href = "#">5</a></td>
                  <td><a href = "#">6</a></td>
                  <td><a href = "#">7</a></td>
                  <td><a href = "#">8</a></td>
                  <td><a href = "#" className = "holiday">9</a></td>
                  <td><a href = "#" className = "holiday">10</a></td>
              </tr>
              <tr>
                  <td><a href = "#">11</a></td>
                  <td><a href = "#">12</a></td>
                  <td><a href = "#">13</a></td>
                  <td><a href = "#">14</a></td>
                  <td><a href = "#">15</a></td>
                  <td><a href = "#" className = "holiday">16</a></td>
                  <td><a href = "#" className = "holiday">17</a></td>
              </tr>
              <tr>
                  <td><a href = "#">18</a></td>
                  <td><a href = "#">19</a></td>
                  <td><a href = "#">20</a></td>
                  <td><a href = "#">21</a></td>
                  <td><a href = "#">22</a></td>
                  <td><a href = "#" className = "holiday">23</a></td>
                  <td><a href = "#" className = "holiday">24</a></td>
              </tr>
              <tr>
                  <td><a href = "#">25</a></td>
                  <td><a href = "#">26</a></td>
                  <td><a href = "#">27</a></td>
                  <td><a href = "#">28</a></td>
                  <td><a href = "#">29</a></td>
                  <td><a href = "#" className = "holiday">30</a></td>
                  <td><a href = "#" className = "holiday"></a></td>
              </tr>
          </table>
      </div>
    );
  }

  export default App;