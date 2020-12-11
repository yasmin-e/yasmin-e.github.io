import React from 'react';
import './TableLayout.css';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import RightSidebar from '../RightSidebar/RightSidebar';
import Footer from '../Footer/Footer';

function TableLayout({ Component }) {
 return (
   <div>
     <table className="table">
      <tbody className="tbody">
        <tr className="tr">
          <td className="ls"><LeftSidebar /></td>
          <td className="mc"><Component /></td>
          <td className="rs"><RightSidebar /></td>
        </tr>
      </tbody>
    </table>
    <Footer></Footer>
  </div>
 )
}

export default TableLayout;