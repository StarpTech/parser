(function (template, ctx) {
  let out = ''
  out += `${ctx.escape(ctx.resolve('username') || 'virk')}`
  out += '\n'
  return out
})(template, ctx)