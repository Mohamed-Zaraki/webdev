const task = document.getElementsByTagName('li')
const colums = document.getElementsByClassName('columns')
let draggedTask = null

Array.from(task).forEach(element => {
    
    element.addEventListener('dragstart' ,(event)=> {  

        draggedTask = element
        element.classList.add("dragging")

    })

    element.addEventListener('dragend' ,(event)=> {

        element.classList.remove("dragging")
        draggedTask = null
    })
});

Array.from(colums).forEach(column => {

    column.addEventListener('dragenter', (event) => {
        event.preventDefault()
        column.classList.add('over')
    })

    column.addEventListener( 'dragover', (event) => {
        event.preventDefault()
    })

    column.addEventListener('dragleave', () => {
        column.classList.remove('over')
    })

    column.addEventListener('drop', (event) => {
        event.preventDefault()
        column.classList.remove('over')

        if (draggedTask) {
            const list = column.querySelector('ul')
            list.appendChild(draggedTask)
        }
    })
})
