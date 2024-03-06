import { BottomNavigation, Toolbar, Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Notifications from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/Home";

const Icons = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "40px",
}));
const NavbarMobile = () => {
  return (
    <BottomNavigation className=" tw-invisible sm:tw-visible tw-fixed tw-bottom-0 tw-w-full tw-bg-slate-900 tw-text-slate-50">
      <Toolbar>
        <Grid container>
          <Icons>
            <HomeIcon />
            <SearchIcon />
            <Notifications />
            <Avatar src="/static/images/avatar/1.jpg" />
          </Icons>
        </Grid>
      </Toolbar>
    </BottomNavigation>
  );
};

export default NavbarMobile;
