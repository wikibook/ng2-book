function printArray(element, index, array) {
  console.log('[' + index + '] = ' + element);
}

[1, 2, ,3,'four'].forEach(printArray);