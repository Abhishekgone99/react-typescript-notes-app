import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { NoteObject } from "../models/note";
import { Error, Container } from "../Styles/styles";

const TITLE_LIMIT = 30;
const DETAILS_LIMIT = 50;

const defaultObj = {
  id: 0,
  title: "",
  details: "",
  color: "",
  date: new Date().toLocaleString().toString(),
};

type addNoteProps = {
  addNotes: (note: NoteObject) => void;
};

const CreateNote = ({ addNotes }: addNoteProps) => {
  const [note, setNote] = useState<NoteObject>(defaultObj);
  const [error, setError] = useState<string>("");

  const { title, details, color } = note;
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError("");
    }
    let { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const submitHandler = () => {
    if (!note.title || !note.details) {
      setError("All fileds are mandatory");
      return;
    }
    addNotes({ ...note, id: Math.floor(Math.random() * 100) });
    setNote(defaultObj);
  };

  return (
    <Container component="form">
      <TextField
        style={{ width: "400px" }}
        type="text"
        label="Title"
        variant="standard"
        name="title"
        value={title}
        onChange={onChangeHandler}
        inputProps={{ maxLength: TITLE_LIMIT }}
      />
      <Box component="span">
        {note.title.length}/{TITLE_LIMIT}
      </Box>
      <TextField
        sx={{ width: "400px" }}
        type="text"
        label="Details"
        variant="standard"
        name="details"
        value={details}
        onChange={onChangeHandler}
        inputProps={{ maxLength: DETAILS_LIMIT }}
      />
      <Box component="span">
        {note.details.length}/{DETAILS_LIMIT}
      </Box>
      <TextField
        type="color"
        name="color"
        variant="standard"
        sx={{ width: "30px", marginTop: "15px" }}
        value={color}
        onChange={onChangeHandler}
      />
      <Button
        variant="contained"
        color="success"
        sx={{ padding: 1 }}
        onClick={submitHandler}
      >
        Create Note
      </Button>

      {error && <Error variant="body1">{error}</Error>}
    </Container>
  );
};

export default CreateNote;
