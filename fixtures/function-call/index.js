(function (template, ctx) {
  let out = ''
  out += 'Hello '
  out += `${ctx.escape(ctx.resolve('upper')(ctx, ctx.resolve('username')))}`
  return out
})(template, ctx)