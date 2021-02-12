describe('example', function() {
  it('should check secret', function() {
    expect(process.env.super_secret).toBe(420)
  })
})
