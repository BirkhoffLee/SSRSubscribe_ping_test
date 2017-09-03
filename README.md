# SSRSubscribe_ping_test
This script does a ping test of a SSR subscribe list (base64 encoded).  

It gives you a list of the servers sorted by the latency (least-to-highest), which tells that
* whether a server in the list is alive or not
* the latency between your machine and the target server (average/max ping in milliseconds)
* which server has the least latency

# Usage
```
$ node src/index.js [subscribe_list_base64_encoded]
```