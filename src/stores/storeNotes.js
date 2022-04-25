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
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi porro officiis minus maxime asperiores, veniam quidem dolorem ut quas distinctio consequatur commodi. Nulla quibusdam, dolore est ipsa repellat minus eos?",
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

        deleteNote(idToDelete){
            this.notes = this.notes.filter(note => note.id!= idToDelete)
        }
    }

})