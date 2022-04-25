import { createRouter, createWebHashHistory } from 'vue-router'

/*
    Import Components
*/
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewEditNoteVue from '@/views/ViewEditNote.vue'

const routes = [
    {
        path: '/',
        name: 'Notes',
        component: ViewNotes
    },
    {
        path: '/edit-note/:id',
        name: 'EditNote',
        component: ViewEditNoteVue
    },
    {
        path: '/stats',
        name: 'Stats',
        component: ViewStats
    },
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router