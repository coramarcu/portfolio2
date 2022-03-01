const openProjectButtons = document.querySelectorAll('[data-open-project]')

const closeProjectButtons = document.querySelectorAll('[data-close-project]')

const overlay = document.getElementById('overlay')



const project1 = document.getElementById('project1')

const project2 = document.getElementById('project2')

const project3 = document.getElementById('project3')



openProjectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.openProject)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if(modal == null) {
        console.log('returned null')
        return
    }
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}