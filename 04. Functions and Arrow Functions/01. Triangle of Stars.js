function triangle(size) {
    for (let i = 0; i <= size; i++) {
        console.log('*'.repeat(i))
    }
    for (let i = size - 1; i > 0; i--){
        console.log('*'.repeat(i))
    }
}

