# frida-scripts

## aurora_store_retry_connection.js
**What:** make the Aurora Store (com.aurora.store) application automatically retry the anonymous login until a successful attempt.  

**How:** run the command `frida -U "Aurora Store" -l aurora_store_retry_connection.js --no-pause` (the application must be open already, if the script is loaded too early it will not find the class we need).

**Tested on:** frida-server 15.1.9, frida-tools 10.5.4, com.aurora.store 4.1.1
