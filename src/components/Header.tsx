import { AppBar,  Box,  Grid, Toolbar, Typography } from "@mui/material";

import Notifications from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      position="static"
      className=" tw-py-1 tw-bg-slate-900 tw-text-slate-50 tw-shadow-md "
    >
      <Toolbar className="tw-flex tw-justify-evenly  tw-items-center">
        <Grid>
          <Typography variant="h5" className=" tw-font-bold">
            <Link to="/"> #_ Hashblank</Link>
           
          </Typography>
        </Grid>
        <Grid className="sm:tw-hidden">
          <input
            type="text"
            className="tw-px-14 tw-py-1   tw-rounded-md  tw-bg-slate-600"
          />
        </Grid>
        <Grid item xs={1} className="sm:tw-hidden">
        <Box className=" tw-flex tw-items-center tw-gap-6">
           <Link to="/notification"><Notifications /></Link> 
           <Link to="/profile"> <Avatar src="/static/images/avatar/1.jpg" /></Link>
            </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
