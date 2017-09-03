let args = process.argv.slice(2)

if (!args[0]) {
    console.error("Usage: node index.js [subscribe_list_base64_encoded]")
    process.exit(1)
}

const ping = require('ping')
const querystring = require('querystring')

const base64Decode = (encoded) => {
    return Buffer.from(encoded, 'base64').toString()
}

const pPing = (host) => {
    return new Promise(resolve => {
        ping.promise.probe(host.host).then(result => {
            let output = `Server ${host.params.remarks} (${result.host} @ ${result.numeric_host}) is `

            if (result.alive) {
                avgPings.push(result.avg)

                output += `alive, average ping is ${result.avg} ms, max ping is ${result.max} ms.`
            } else {
                output += `NOT alive.`
            }

            console.log(output)

            host.alive = result.alive
            host.min = result.min
            host.max = result.max
            host.avg = result.avg
            host.ipaddr = result.numeric_host

            resolve(host)
        })
    })
}

let ssrLinks = base64Decode(args[0]).trim().split("\n")
let hosts = []
let avgPings = []

ssrLinks.forEach(link => {
    let serverInfo = base64Decode(link.slice(6)).split(":")

    let host = serverInfo[0]
    let port = serverInfo[1]
    let protocol = serverInfo[2]
    let encoding = serverInfo[3]
    let obfs = serverInfo[4]
    
    let temp = serverInfo[5].split("/")
    let password = base64Decode(temp[0])

    let params = temp[1]

    if (params.slice(0, 1) === "?")
        params = params.slice(1)

    params = querystring.parse(params)

    Object.keys(params).forEach(property => {
        params[property] = base64Decode(params[property]).trim()
    })

    hosts.push({
        host: host.trim(),
        port: port.trim(),
        protocol: protocol.trim(),
        encoding: encoding.trim(),
        obfs: obfs.trim(),
        password: password.trim(),
        params: params
    })
}, this)

let pingPromises = hosts.map(pPing)

Promise.all(pingPromises).then(result => {
    leastAvgPing = Math.min(...(Object.keys(avgPings).map(key => {
        return avgPings[key]
    })))

    result.forEach((host) => {
        if (host.avg == leastAvgPing) {
            let output = `\n* Server ${host.params.remarks} (${host.host} @ ${host.ipaddr}) has the least average ping (${host.avg}ms).`

            console.log(output)
        }
    })
})