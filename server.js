const os = require("os");

//OS CPU architecture
console.log("OS CPU architecture: " + os.arch());

//Free memory of the system
console.log("Free memory of the system: " + os.freemem()/(1024*1024*1024) + " GB");

//Total memory of the system
console.log("Total memory of the system: " + os.totalmem()/(1024*1024*1024) + " GB");

//OS Platform
console.log("OS Platform: ", os.platform());

//Information about the current user
console.log("Current User: ", os.userInfo());