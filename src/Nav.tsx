import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';


function ResponsiveAppBar() {
  return (
    <AppBar position="static" style={{ background: '#FFFFFF' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <button>
            <a href='https://futsuno.shop/'>
              <img src="https://d2w53g1q050m78.cloudfront.net/futsunoshop/uploads/assets/images/futu_shop_logo.svg" />
            </a>
          </button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;