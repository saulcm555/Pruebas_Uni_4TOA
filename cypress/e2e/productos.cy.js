describe('API Productos', () => {
  it('Debe obtener lista de productos', () => {
    cy.request('http://localhost:3000/productos').then((res) => {
      expect(res.status).to.eq(200);
    });
  });

  it('Debe agregar un producto nuevo', () => {
    cy.request('POST', 'http://localhost:3000/productos', {
      nombre: 'Monitor'
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body.nombre).to.eq('Monitor');
    });
  });
});

