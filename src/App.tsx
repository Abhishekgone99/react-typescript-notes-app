import "./App.css";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import CreateNote from "./components/CreateNote";
import DisplayNote from "./components/DisplayNote";
import Headers from "./components/Headers";
import { NoteObject } from "./models/note";

function App() {
  const [notes, setNotes] = useState<NoteObject[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem("notes")) {
      setNotes(JSON.parse(sessionStorage.getItem("notes") as string));
    }
  }, []);

  const addNotes = (note: NoteObject) => {
    setNotes([...notes, note]);
    sessionStorage.setItem("notes", JSON.stringify([...notes, note]));
  };

  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    sessionStorage.setItem("notes", JSON.stringify(updatedNotes));
  };
  return (
    <div className="App">
      <Headers />
      <Box style={{ padding: 20 }}>
        <CreateNote addNotes={addNotes} />
        <DisplayNote notes={notes} deleteNote={deleteNote} />
      </Box>
    </div>
  );
}

export default App;
