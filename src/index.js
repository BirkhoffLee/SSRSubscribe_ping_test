const ping = require('ping')
const querystring = require('querystring')

let args = process.argv.slice(2)

if (!args[0]) {
    console.error("Usage: node index.js [subscribe_list_base64_encoded]")
    process.exit(1)
}

const base64Decode = (encoded) => {
    return Buffer.from(encoded, 'base64').toString()
}

const pPing = (host) => {
    return new Promise(resolve => {
        ping.promise.probe(host.host).then(result => {
            host.alive = result.alive
            host.min = (result.min === "unknown") ? 2147483647 : result.min
            host.max = (result.max === "unknown") ? 2147483647 : result.max
            host.avg = (result.avg === "unknown") ? 2147483647 : result.avg
            host.ipaddr = result.numeric_host

            resolve(host)
        })
    })
}

let ssrLinks = base64Decode(args[0]).trim().split("\n")
let hosts = []

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
    serverSorted = result.slice(0)
    serverSorted.sort((a, b) => {
        return a.avg - b.avg
    })

    serverSorted.forEach((server, index) => {
        let output = `[${index + 1}/${serverSorted.length}] Server ${server.params.remarks} (${server.host} @ ${server.ipaddr}) is `

        if (server.alive) {
            output += `alive, average ping is ${server.avg} ms, max ping is ${server.max} ms.`
        } else {
            output += `NOT alive.`
        }

        console.log(output)
    })

    leastPingServer = serverSorted[0]

    console.log("")

    console.log(`Server ${leastPingServer.params.remarks} (${leastPingServer.host} @ ${leastPingServer.ipaddr}) has the least average ping (${leastPingServer.avg}ms).`)
})