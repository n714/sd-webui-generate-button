class generateButton {
 static result() {
     ['txt', 'img'].forEach((mode) => {
         const generate = document.getElementById(mode + '2img_generate')
         const box = document.getElementById('image_buttons_' + mode + '2img')
         const btn = generate.cloneNode()
            btn.addEventListener('click', () => {
                generate.dispatchEvent(new Event('click'))
            })
            btn.innerHTML = 'Generate'
            btn.style.position = 'relative'
            btn.style.minHeight = '2em'
            btn.style.width = '100%'
            box.appendChild(btn)
        })
    }
}
onUiLoaded(async () => {
    generateButton.result()
})