const fs = require('fs/promises')
const path = require('path')

;(async () => {
    for (let i = 0; i < 10000; i++) {
        await fs.writeFile(
            path.resolve(__dirname, `fuck-${Math.random()}-${new Date().getTime()}-${i}`),
            `fuck ${i}`
        )
        console.log('creating file', i)
    }
})()
