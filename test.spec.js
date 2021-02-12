describe('example', function() {
  it('should check secret', function() {
    expect(420).toBe(process.env.super_secret)
  })
})
