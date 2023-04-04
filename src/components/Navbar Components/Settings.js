import DetailsSettings from "./DetailsSettings";
import MainSettings from "./SettingsMainMenu";
import Help from "./Help"
import Display from "./Display"
import { useSelector } from "react-redux";



function Settings() {


    const settingsState = useSelector((state) => state.parent);
    const detailsSettings = useSelector((state) => state.detailsSetting);
    const helpsetting = useSelector((state) => state.help);
    const dipsay = useSelector((state) => state.display)
    return (

        <div className="setting-section">


            {settingsState ? <MainSettings /> : null}
            {detailsSettings ? <DetailsSettings /> : null}
            {helpsetting ? <Help /> : null}
            {dipsay ? <Display /> : null}






        </div>

    )
}
export default Settings