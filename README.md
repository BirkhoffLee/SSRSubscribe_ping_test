# SSRSubscribe_ping_test
This script does a ping test of a SSR subscribe list (base64 encoded).  

It gives you a list of the servers sorted by the latency (least-to-highest), which tells that
* whether a server in the list is alive or not
* the latency between your machine and the target server (average/max ping in milliseconds)
* which server has the least latency

# Usage
This is a real demo, the server names/domains/IP addresses were hidden.

```
$ node src/index.js [subscribe_list_base64_encoded]
[1/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 60.848 ms, max ping is 60.848 ms.
[2/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 62.482 ms, max ping is 62.482 ms.
[3/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 71.358 ms, max ping is 71.358 ms.
[4/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 72.838 ms, max ping is 72.838 ms.
[5/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 73.133 ms, max ping is 73.133 ms.
[6/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 73.320 ms, max ping is 73.320 ms.
[7/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 74.532 ms, max ping is 74.532 ms.
[8/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 76.015 ms, max ping is 76.015 ms.
[9/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 76.677 ms, max ping is 76.677 ms.
[10/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 77.035 ms, max ping is 77.035 ms.
[11/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 77.048 ms, max ping is 77.048 ms.
[12/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 77.856 ms, max ping is 77.856 ms.
[13/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 80.650 ms, max ping is 80.650 ms.
[14/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 80.762 ms, max ping is 80.762 ms.
[15/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 81.134 ms, max ping is 81.134 ms.
[16/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 81.147 ms, max ping is 81.147 ms.
[17/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 82.140 ms, max ping is 82.140 ms.
[18/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 82.501 ms, max ping is 82.501 ms.
[19/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 84.040 ms, max ping is 84.040 ms.
[20/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 84.937 ms, max ping is 84.937 ms.
[21/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 85.158 ms, max ping is 85.158 ms.
[22/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 85.244 ms, max ping is 85.244 ms.
[23/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 85.501 ms, max ping is 85.501 ms.
[24/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 88.337 ms, max ping is 88.337 ms.
[25/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 89.057 ms, max ping is 89.057 ms.
[26/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 89.993 ms, max ping is 89.993 ms.
[27/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 91.336 ms, max ping is 91.336 ms.
[28/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 92.971 ms, max ping is 92.971 ms.
[29/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 96.182 ms, max ping is 96.182 ms.
[30/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 117.661 ms, max ping is 117.661 ms.
[31/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 117.757 ms, max ping is 117.757 ms.
[32/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 120.758 ms, max ping is 120.758 ms.
[33/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 125.865 ms, max ping is 125.865 ms.
[34/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 127.511 ms, max ping is 127.511 ms.
[35/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 130.302 ms, max ping is 130.302 ms.
[36/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 131.011 ms, max ping is 131.011 ms.
[37/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 134.099 ms, max ping is 134.099 ms.
[38/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 140.367 ms, max ping is 140.367 ms.
[39/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 140.574 ms, max ping is 140.574 ms.
[40/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 148.780 ms, max ping is 148.780 ms.
[41/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 164.356 ms, max ping is 164.356 ms.
[42/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 195.611 ms, max ping is 195.611 ms.
[43/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 199.050 ms, max ping is 199.050 ms.
[44/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 205.973 ms, max ping is 205.973 ms.
[45/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 232.809 ms, max ping is 232.809 ms.
[46/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 233.493 ms, max ping is 233.493 ms.
[47/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 291.334 ms, max ping is 291.334 ms.
[48/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 303.859 ms, max ping is 303.859 ms.
[49/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 317.880 ms, max ping is 317.880 ms.
[50/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 337.882 ms, max ping is 337.882 ms.
[51/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 369.788 ms, max ping is 369.788 ms.
[52/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 386.834 ms, max ping is 386.834 ms.
[53/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is alive, average ping is 503.515 ms, max ping is 503.515 ms.
[54/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is NOT alive.
[55/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is NOT alive.
[56/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is NOT alive.
[57/57] Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) is NOT alive.

Server <HIDDEN> (<HIDDEN> @ <HIDDEN>) has the least average ping (60.848ms).
```