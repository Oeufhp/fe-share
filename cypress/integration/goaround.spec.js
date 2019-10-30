import login from '../support/index'

describe('Go around', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
  })

  it('Should go around in each tab', () => {
    cy.clearCookie('project_id')
    login('test@sertiscorp.com', 'bachbluebird')
    cy.contains('Photharam').click()
    cy.url().should('include', '/home/sites/25/1/dashboard')
    cy.get('#btn-date-type-week').click()
    cy.get('div.recharts-wrapper > svg > g.recharts-layer.recharts-cartesian-axis.recharts-xAxis.xAxis > g > g:nth-child(1) > text > tspan').contains('2019-10-27').should('be.visible')
    cy.get('div.recharts-wrapper > svg > g.recharts-layer.recharts-cartesian-axis.recharts-xAxis.xAxis > g > g:nth-child(2) > text > tspan').contains('2019-10-28').should('be.visible')
    cy.get('div.recharts-wrapper > svg > g.recharts-layer.recharts-cartesian-axis.recharts-xAxis.xAxis > g > g:nth-child(3) > text > tspan').contains('2019-10-29').should('be.visible')
    cy.get('div.recharts-wrapper > svg > g.recharts-layer.recharts-cartesian-axis.recharts-xAxis.xAxis > g > g:nth-child(4) > text > tspan').contains('2019-10-30').should('be.visible')
    cy.get('#btn-violation > .sidebar-menu-wrapper').click()
    cy.url().should('include', '/home/sites/25/1/violation')
    cy.get('.camera-detail-card').should('have.length', 5)
  })
})