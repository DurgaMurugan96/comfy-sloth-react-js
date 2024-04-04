import { HistoryIcons, MissionIcons, VisionIcons } from "../../assets/icons/homeIcons";
import './Furniture.scss';
export default function Furniture() {
    return (
        <div className="custom_furniture">
            <div className="content">
                <div className="header">
                    <h2 className="heading">Custom Furniture <br />
                        Built Only For You</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
                </div>
                <div className="row   custom_card_container">
                    <div className="col-lg-3  col-md-4 col-12 card">
                        <span className="icons">
                            <MissionIcons />
                        </span>
                        <h4>Mission</h4>
                        <p className="custom_p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 card">
                        <span className="icons">
                            <VisionIcons />
                        </span>
                        <h4>Vision</h4>
                        <p className="custom_p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                    </div>
                    <div className="col-lg-3  col-md-4 col-12 card">
                        <span className="icons">
                            <HistoryIcons />
                        </span>
                        <h4>History</h4>
                        <p className="custom_p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                    </div>
                </div>
            </div>

        </div>

    )
}
