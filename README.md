# Manifest 3 onPrintRequested Bug

When reading the document from the printJob in the onPrintRequested callback,
I've encountered a bug where the print dialog will get stuck waiting for the pending promise of the document text.
  
I've included an example