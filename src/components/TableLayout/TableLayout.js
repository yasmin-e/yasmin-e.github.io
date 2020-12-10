import React from 'react';
import './TableLayout.css';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import MainContent from '../MainContent/MainContent';
import RightSidebar from '../RightSidebar/RightSidebar';

function TableLayout() {
 return (
  <table>
    <tbody className="wrapper">
      <tr>
        <td className="ls"><LeftSidebar /></td>
        <td className="mc"><MainContent /></td>
        <td className="rs"><RightSidebar /></td>
      </tr>
    </tbody>
  </table>
 )
}

export default TableLayout;