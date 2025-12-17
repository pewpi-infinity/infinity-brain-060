load('api_rpc.js');
load('api_shadow.js');

RPC.addHandler('Reveal', function() {
  print('Node 060 activates: is like opposite of 6');
  return {phase: 1.69816};
});

print('Mongoose OS Brain 060 online – hydrogen valve ready');
