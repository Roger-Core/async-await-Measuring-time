const { taskOne, taskTwo } = require('./task')

//Executing two task in parallel

async function main() {

    try {
        console.time('Tasks time')

        const data = await Promise.all([taskOne(), taskTwo()])

        console.log('Task One Returned: ', data[0])
        console.log('Task Two Returned: ', data[1])

        console.timeEnd('Tasks time')

    } catch (e) {
        console.log(e)
    }
}

main()