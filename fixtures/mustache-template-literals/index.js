(function (ctx) {
  let out = ''
  out += 'Hello '
  out += `${ctx.escape(`${ctx.resolve('username')} - ${ctx.resolve('age')}`)}`
  out += '\n'
  return out
})(ctx)