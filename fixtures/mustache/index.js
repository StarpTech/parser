(function (template, ctx) {
  let out = ''
  out += 'Hello '
  out += `${ctx.escape(ctx.resolve('username'))}`
  out += '\n'
  return out
})(template, ctx)