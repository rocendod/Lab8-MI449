import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabaseUrl = 'https://tekryqsppwpsuvvsnetl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRla3J5cXNwcHdwc3V2dnNuZXRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2MDA4NzYsImV4cCI6MjAyNjE3Njg3Nn0.4L5FJ-gAa0iFgvbfLkQMW3jMVRGzI2UTi9wnsc7z4r8'
const supabase = createClient(supabaseUrl, supabaseKey)
console.log('Supabase Instance: ', supabase)

async function getBooks() {
        let { data: books, error } = await supabase
        .from('books')
        .select('*')

        for (let book of books) {
        let bookList = document.getElementById('books');
        bookList.innerHTML += `<table><td>${book.title}</td><td>${book.Author}</td><td>${book.ISBN}</td></table>`;
    }
}

getBooks();