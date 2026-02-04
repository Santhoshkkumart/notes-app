import Note from "../models/Notes.js";

export async function getAllNotes (req, res) {
    const { id } = req.params;

  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid note ID" });
  }

  try {
    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
export async function createAllNotes (req, res) {
    try{
        const {title, content} = req.body;
        const newNote = new Note({title, content});
        await newNote.save();
        res.status(201).json({message:"Your note has been created successfully"});
    } catch (error) {
        console.log("Error in createAllNotes notes controller", error); 
        res.status(500).json({ message: "Internal server error"});
    }
};
export async function updateAllNotes (req, res) {
    try {
        const {title,content} = req.body;
        await Note.findByIdAndUpdate(req.params.id,{title,content});
        res.status(200).json({ message: "Your note has been updated"});

    } catch (error) {
        console.log("Error in updateAllNotes notes controller", error); 
        res.status(500).json({ message: "Internal server error"});

    }
};
export async function deleteAllNotes (req, res) {
    try{
        await Note.findByIdAndDelete(req.params.id);
        return res.status(200).json({message : "Your note is deleted successfully"})
    } catch (error) {
        console.log("Error deleting the Notes", error)
        return res.status(500).json({ message : "Internal server Error"})
    }
    
};