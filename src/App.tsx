import { Box, Button, IconButton, Typography } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const App = () => {
  return (
    <div>
      <Button>Text</Button>
      <Button variant="text" disabled>
        Text
      </Button>
      <Button variant="contained" disabled>
        Contained
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Button variant="contained">Contained</Button>
      <Button
        variant="contained"
        disableElevation
        onClick={() => alert("Say hello")}
      >
        Contained
      </Button>
      <hr />
      <Button color="secondary">Text</Button>
      <Button variant="contained" color="secondary">
        Contained
      </Button>
      <Button variant="outlined" color="secondary">
        Outlined
      </Button>
      <Button variant="contained" color="success">
        success
      </Button>
      <Button variant="contained" color="warning">
        warning
      </Button>
      <Button variant="contained" color="error">
        warning
      </Button>
      <Button variant="contained" color="info">
        info
      </Button>
      <Button
        variant="contained"
        disableElevation
        onClick={() => alert("Say hello")}
      >
        Contained
      </Button>
      <hr />
      <DeleteIcon />
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <hr />
      <IconButton>
        <DeleteIcon />
      </IconButton>
      <hr />
      <Typography variant="h2">Rokas</Typography>
      <Typography variant="body1" component="span">
        Rokas
      </Typography>
      <Typography variant="body2" component="span">
        Rokas
      </Typography>
      <Typography variant="subtitle2" component="span" color="primary">
        Rokas
      </Typography>
      <Typography color="textSecondary">Rokas sekantis</Typography>
      <br />
      {/* viskas kas 8px */}
      <Box padding={4}>Rokas</Box>
      <Box
        p={1}
        sx={(theme) => ({ border: `1px solid ${theme.palette.primary.main}` })}
      >
        Rokas
      </Box>
    </div>
  );
};

export default App;
