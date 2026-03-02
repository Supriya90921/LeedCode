

async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
}



 process.on("exit", () => { require("fs").writeFileSync("display_runtime.txt", "0"); });
