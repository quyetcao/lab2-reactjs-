
import Avatar from '@mui/material/Avatar';

import { deepOrange} from '@mui/material/colors';


export default  function Cmt() {
    let style = {
        width:'80px',
        height:'80px'
    }
    return (
        <>
        <div className="div-cmt">
      <Avatar style={style} sx={{ bgcolor: deepOrange[500] }} variant="square">
        ALL
      </Avatar>
      <div className="in-fo">
            <div className="top">
                <p><strong>Sam</strong></p>
                <p>Today at 6:00PM</p>
            </div>
        <div className="bottom">
            <h5>Nice blog Post!</h5>
        </div>
        </div>
        </div>
        </>
    )
    
}