# Manifest 3 onPrintRequested Bug

When reading the document from the printJob in the onPrintRequested callback,
I've encountered a bug where the print dialog will get stuck waiting for the pending promise of the document text.
  
I've included an example

This only happens the first time, or at least I haven't encountered it after the first time

## Testing
Choose this directory to load unpacked into Chrome.  When printing, a new printer will show up, **a test printer**, which you can use to trigger the bug.
