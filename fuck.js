const fs = require('fs/promises')
const path = require('path')

;(async () => {
    for (let i = 0; i < 500; i++) {
        await fs.writeFile(
            path.resolve(__dirname, `fuck-${Math.random()}-${new Date().getTime()}-${i}`),
            `fuck ${i}`
        )
        console.log('creating file', i)
    }
})()
