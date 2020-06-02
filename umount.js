umount = require('umount') 
 
umount.umount '/dev/disk2', (error, stdout, stderr) ->
    throw error if error?
    console.log(stdout)