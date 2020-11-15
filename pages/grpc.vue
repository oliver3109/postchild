<template>
  <div @click="onClick">click upload file</div>
</template>

<script>
// import grpc from 'grpc-web'
// import { grpc } from 'grpc-web-client'
// import protobuf from 'protobufjs'

export default {
  methods: {
    rpcImpl(method, requestData, callback) {
      // console.log(method)
      // grpc.invoke(method, {
      //   request: requestData,
      //   host: 'http://localhost:3000',
      //   onEnd: (res) => {
      //     console.log(res)
      //     const { status, message } = res
      //     if (status === grpc.Code.OK && message) {
      //       callback(grpc.Code, message)
      //     }
      //   },
      // })
    },
    // 获取完整 name
    fullName(namespace) {
      const ret = []
      while (namespace) {
        if (namespace.name) {
          ret.unshift(namespace.name)
        }
        namespace = namespace.parent
      }
      return ret.join('.')
    },
    commandLineApi(path) {
      // pbjs.main(['--target', 'static-module', path], function (err, output) {
      //   if (err) throw err
      //   // do something with output
      //   console.log(output)
      // })
    },
    onClick() {
      // // this example demonstrates how to consume a streaming rpc service.
      // // Load a definition with services:
      // const root = protobuf.Root.fromJSON({
      //   nested: {
      //     Greeter: {
      //       methods: {
      //         SayHello: {
      //           requestType: 'Hello',
      //           requestStream: false,
      //           responseType: 'World',
      //           responseStream: false,
      //         },
      //       },
      //     },
      //     Hello: {
      //       fields: {
      //         name: {
      //           type: 'string',
      //           id: 1,
      //         },
      //       },
      //     },
      //     World: {
      //       fields: {
      //         message: {
      //           type: 'string',
      //           id: 1,
      //         },
      //       },
      //     },
      //   },
      // })
      // const Greeter = root.lookup('Greeter')
      // const Hello = root.lookup('Hello')
      // // const World = root.lookup('World')
      // const that = this
      // // Provide a stream-aware RPC implementation:
      // const greeter = Greeter.create(
      //   (function () {
      //     return function myRPCImpl(method, requestData, callback) {
      //       method.service = { serviceName: that.fullName(method.parent) }
      //       method.methodName = method.name
      //       grpc.invoke(method, {
      //         request: {
      //           serializeBinary() {
      //             return requestData
      //           },
      //         },
      //         host: 'http://localhost:3000',
      //         onEnd: (res) => {
      //           console.log(res)
      //           const { status, message } = res
      //           if (status === grpc.Code.OK && message) {
      //             greeter.emit('status', 200, 'OK')
      //             callback(grpc.Code, message)
      //           }
      //         },
      //       })
      //     }
      //   })(),
      //   true,
      //   true
      // )
      // // Listen for events:
      // greeter.on('data', function (response, method) {
      //   console.log('data in ' + method.name + ':', response.message)
      // })
      // greeter.on('end', function () {
      //   console.log('end')
      // })
      // greeter.on('error', function (err, method) {
      //   console.log('error in ' + method.name + ':', err)
      // })
      // // Call methods:
      // // greeter.sayHello({ name: 'one' })
      // greeter.sayHello(Hello.create({ name: 'two' })) // or use runtime messages
      // // Listen to and emit your own events if you like:
      // greeter.on('status', function (code, text) {
      //   console.log('custom status:', code, text)
      // })
      // // And, if applicable, end the service when you are done:
      // setTimeout(function () {
      //   console.log('结束！')
      //   greeter.end()
      //   // ^ Signals rpcImpl that the service has been ended client-side by calling it with a null buffer.
      //   //   Likewise, rpcImpl can also end the stream by calling its callback with an explicit null buffer.
      //   greeter.sayHello({ name: 'three' }, function (err) {
      //     console.error('this should fail: ' + err.message)
      //   })
      // }, 2000)
    },
  },
}
</script>
