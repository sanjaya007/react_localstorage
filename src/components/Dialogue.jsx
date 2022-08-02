import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Dialogue({
  moviesData,
  setMoviesData,
  dialogue,
  setDialogue,
  selectedId,
  setSelectedId,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const filterMovies = (id) => {
    const filteredData = moviesData.filter((value) => value.id !== id);
    setMoviesData(filteredData);
    setSelectedId(null);
    handleClose();
  };

  const handleClose = () => {
    setDialogue(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={dialogue}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are you sure ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You cannot undo your post after you delete.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => filterMovies(selectedId)}>
            Delete
          </Button>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
