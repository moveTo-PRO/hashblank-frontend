import { AppBar, Box, Grid, styled, Toolbar, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "15px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const Header = () => {
  return (
    <AppBar
      position="static"
      className="sm:tw-hidden tw-py-1 tw-bg-slate-900 tw-text-slate-50 tw-shadow-md "
    >
      <Toolbar className="tw-flex tw-justify-evenly  tw-items-center">
        <Grid>
          <Typography variant="h5" className=" tw-font-bold">
            #_ Hashblank
          </Typography>
        </Grid>
        <Grid>
          <input
            type="text"
            className="tw-px-14 tw-py-1   tw-rounded-md  tw-bg-slate-600"
          />
        </Grid>    
        <Grid item xs={1}>
          <Icons>
            <NotificationsIcon />
            <Avatar src="/static/images/avatar/1.jpg" />
         
          </Icons>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;