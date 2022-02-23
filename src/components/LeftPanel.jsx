import React from 'react';
import Button from './Button';
import Image from "../components/Image";
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import Share from '@mui/icons-material/Share';
import ArticleIcon from '@mui/icons-material/Article';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StorageIcon from '@mui/icons-material/Storage';
import PieChartIcon from '@mui/icons-material/PieChart';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LanguageIcon from '@mui/icons-material/Language';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import moon from "../images/moon.png";

function LeftPanel() {

  return (
    <div className='leftPanel'>
      <div className='name'><h5>N</h5> Name <span><MenuOpenIcon /></span></div>
      <div className='d-grid gap-2 col-8'> 
        <Button className='btn btn-sm button' name="Home" icon={<WidgetsOutlinedIcon style={{ fontSize: 15 }} />} />
        <Button className='btn btn-sm button' name="Section 1" icon={<InsertChartIcon style={{ fontSize: 15 }} />} />
        <Button className='btn btn-sm button' name="Section 2" icon={<CandlestickChartIcon style={{ fontSize: 15 }} />} />
        <Button className='btn btn-sm button' name="Section 3" icon={<ShowChartIcon style={{ fontSize: 15 }} />} />
        <Button className='btn btn-sm button' name="Section 4" icon={<AttachMoneyIcon style={{ fontSize: 15 }} />} />
        <Button className='btn btn-sm button' name="Section 5" icon={<StorageIcon style={{ fontSize: 15 }} />} />
        <Button className='btn btn-sm button' name="Section 6" icon={<PieChartIcon style={{ fontSize: 15 }} />} />
        <Button className='btn btn-sm button' name="Section 7" icon={<SignalCellularAltIcon style={{ fontSize: 15 }} />} />
        <Button className='btn btn-sm button' name="Section 8" icon={<Share style={{ fontSize: 15 }} />} />
        <Button className='btn btn-sm button' name="Documentation" icon={<ArticleIcon style={{ fontSize: 15 }} />} />

      </div>

      <div className="button-flex flexed">
        <Button className="btn dolButton " name={ <div className='name nameBottom'><h5>N</h5> $0.90</div>} />
        <Button className="btn buyButton " name="BUY $XYZ" />
      </div>

      <div className="button-flex flexed-1">
      <LanguageIcon style={{color:'808191'}} />
      <div className="star"><Image class="moon" src={moon} /><span id="blue-circle"></span></div>
      </div>

    </div>
  )
}

export default LeftPanel;