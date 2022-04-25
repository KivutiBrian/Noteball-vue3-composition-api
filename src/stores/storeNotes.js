import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [
                {
                    id: 1,
                    content:
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi porro officiis minus maxime asperiores, veniam quidem dolorem ut quas distinctio consequatur commodi. Nulla quibusdam, dolore est ipsa repellat minus eos?",
                },
                {
                    id: 2,
                    content:
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                },
            ]
        }
    },
    actions: {
        addNote(newNoteContent) {
            let note = {
                id: this.notes.length + 1,
                content: newNoteContent
            }

            this.notes.unshift(note)
        },

        deleteNote(idToDelete) {
            this.notes = this.notes.filter(note => note.id != idToDelete)
        },

        updateNote(id, content){
            let index = this.notes.findIndex(note => note.id == id)
            this.notes[index].content = content

        }
    },
    getters: {
        getNoteContent: (state) => {
            return (id) => {
                return state.notes.filter(note => {
                    return note.id == id
                })[0].content
            }
        }, 

        totalNotesCount: (state) => state.notes.length,

        totalCharacterCount: (state) => {
            let count = 0
            state.notes.forEach(note => count+= note.content.length)
            return count
        }
    }
    

})
