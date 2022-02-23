import React from 'react';
import Button from './Button';
import Text from './Text';
import Input from './Input';
import Image from './Image';
import Oval from "../images/Oval.png";
import cut from "../images/cut.png";
import database from "../images/database-coin.png";
import Table from './Table';
import linkIcon from "../images/custom-link.png";

function MiddlePanel() {
    return (
        <div className='container-fluid middlePanel'>
            <div className='middle-panel-wrapper'>
                <div class="topColumn">
                    <Image class="cut" src={cut} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className='btn btn-light tutorial-btn'>Tutorial</div>
                    <Image class="data-coin-img" src={database} />
                </div>

                <div class="midColumn">
                    <Text class="heading" text="Your rewards" />
                    <Text class="reward" text="$ 0.26231428" />
                    {/* <Image class="linkIcon" src={linkIcon} /> */}
                    <Button className="btn btn-primary linkButton" name="Custom Link" />

                    <div className="button-flex flexed-2">
                        <Button className="btn star" name="$40 AVAX" />
                        <Button className="btn star" name="$10 BNB" />
                        <Button className="btn star" name="$210 BTC" />
                    </div>
                </div>

                <div className="side-by-side-column-wrapper">
                    <div class="side-by-side-column">
                        <Image class="bag-img" src={Oval} />
                        <Text class="heading" text="12.5% of fee" />
                        <Text class="input-text" text="Your Referral Link for XYZ" />
                        <Input class="input" type="text" value="https://unityexchange.design" />
                    </div>
                    <div class="side-by-side-column">
                        <Image class="bag-img" src={Oval} />
                        <Text class="heading" text="12.5% of fee" />
                        <Text class="input-text" text="Your Referral Link for XYZ" />
                        <Input class="input" type="text" value="https://unityexchange.design" />
                    </div>
                </div>

            </div>
            <Table />
        </div>
    )
}

export default MiddlePanel;