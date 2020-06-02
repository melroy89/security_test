var parsel = require('parsel');
 
var secret_key = 'mysupersecretkeythatnobodyknowsabout'
var encrypted = parsel.encrypt(secret_key, 'hello from ruby!');
var decrypted = parsel.decrypt(secret_key, encrypted);