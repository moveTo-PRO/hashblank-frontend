// import React from 'react'

import { BottomNavigation, Toolbar, Grid } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

const NavbarMobile = () => {
  return (
    <BottomNavigation className=" tw-invisible sm:tw-visible tw-fixed tw-bottom-0 tw-w-full">
      <Toolbar>
        <Grid className="tw-flex  tw-items-center">
          <NotificationsIcon />

          <Avatar src="/static/images/avatar/1.jpg" />
        </Grid>
      </Toolbar>
    </BottomNavigation>
  );
};

export default NavbarMobile;
