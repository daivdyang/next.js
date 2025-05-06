function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const encoder = new TextEncoder()

// https://developer.mozilla.org/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
function iteratorToStream(iterator: AsyncGenerator) {
  return new ReadableStream({
    async pull(controller) {
      console.log('readable stream start pull')
      console.time('pull')
      const { value, done } = await iterator.next()
      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
      console.timeEnd('pull')
    }
  })
}

async function* makeIterator(list: string[]) {
  const [s1, s2, s3] = list
  await sleep(2000)
  yield encoder.encode(s1)
  await sleep(2000)
  yield encoder.encode(s2)
  await sleep(2000)
  yield encoder.encode(s3)
}


export function GET(request: Request) {
  console.log('[Get]req url', request.url)
  const iterator = makeIterator(['One', 'Two', 'Three'])
  const stream = iteratorToStream(iterator)

  return new Response(stream)
}

export function POST(request: Request) {
  console.log('[POST]req url', request.url)
  const iterator = makeIterator(['一', '二', '三'])
  const stream = iteratorToStream(iterator)

  return new Response(stream)
}

export const runtime = 'edge';