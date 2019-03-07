const button = document.createElement('button')
button.innerHTML = '按钮'
button.addEventListener('click', function(){
    // console.log('click')
    // es6草案中的语法，实际上就是jsonp实现动态加载文件
    import('./source').then((data) => {
        console.log('---haha---', data)
    })
})
document.body.appendChild(button)