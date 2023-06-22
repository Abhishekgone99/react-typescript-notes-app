import { NoteObject } from "../models/note";
import { Box, Button, CardContent, Typography } from "@mui/material";
import { StyledCard } from "../Styles/styles";

type noteProp = {
  note: NoteObject;
  deleteNote: (id: number) => void;
};

const Note = ({ note, deleteNote }: noteProp) => {
  return (
    <StyledCard>
      <CardContent style={{ backgroundColor: note.color }}>
        <Box>
          <Typography variant="h5" gutterBottom>
            {note.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {note.details}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {note.date}
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={() => deleteNote(note.id)}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default Note;
