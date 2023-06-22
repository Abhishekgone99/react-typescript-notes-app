import { Box, Typography } from "@mui/material";
import Note from "./Note";
import { NoteObject } from "../models/note";

type NoteProps = {
  notes: NoteObject[];
  deleteNote: (id: number) => void;
};

const DisplayNote = ({ notes, deleteNote }: NoteProps) => {
  return (
    <Box>
      <Typography variant="h5">Notes</Typography>
      <Box display="flex" flexWrap="wrap">
        {notes.map((note) => {
          return <Note note={note} key={note.id} deleteNote={deleteNote} />;
        })}
      </Box>
    </Box>
  );
};

export default DisplayNote;
