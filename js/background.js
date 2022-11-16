import CDD from './cdd.js'

const failWhenStuck = async (printJob, resultCallback) => {
  const doc = new Promise(async (resolve) => {
    await printJob.document.text();
    resolve("OK");
  });
  const timeout = new Promise((resolve) => {
    setTimeout(() => {resolve("FAILED")}, 2000)
  });

  const result = await Promise.race([doc, timeout]);
  console.log(result);
  resultCallback(result)
}

const stuck = async (printJob, resultCallback) => {
  const doc = await printJob.document.text();
  console.log(doc);
  resultCallback("OK");
}

chrome.printerProvider.onPrintRequested.addListener(stuck)

chrome.printerProvider.onGetPrintersRequested.addListener((resultCallback) => {
  const printer1 = {id: "1", name: "a test printer"}
  resultCallback([printer1])
}) 

chrome.printerProvider.onGetCapabilityRequested.addListener((_printerId, resultCallback) => {
  resultCallback(CDD)
})