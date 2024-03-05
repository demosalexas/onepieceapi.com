export async function readableStreamToString(readableStream: ReadableStream) {
  const reader = readableStream.getReader()
  let result: string = ''
  let done: boolean = false
  
  while (!done) {
    const { value, done: readDone } = await reader.read();
    if (readDone) {
      done = true
    } else {
      result += new TextDecoder().decode(value)
    }
  }
  
  return result
}