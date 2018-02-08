import pyjsonrpc

SERVER_HOST = "localhost"
SERVER_PORT = 4040

class RequestHandler(pyjsonrpc.HttpRequestHandler):
    @pyjsonrpc.rpcmethod
    def add(self, a, b):
        print "add %d" %a
        return a+b

http_server=pyjsonrpc.ThreadingHttpServer(
server_address=(SERVER_HOST, SERVER_PORT),
RequestHandlerClass=RequestHandler)

http_server.serve_forever()
