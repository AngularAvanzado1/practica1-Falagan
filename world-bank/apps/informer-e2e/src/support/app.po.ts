// Common
export const checkMinTableResults = async (table, numRows) => {
    return table.find('tr').its('length').to.be.greaterThan(numRows)
}


// Header
export const getHeader = () => cy.get('lib-header');
export const getHeaderTitle = () => getHeader().get('h1');

// Informer Section
export const getInformerComponent = () => cy.get('wb-informer-home');
export const getInformerContinentalTable = () => getInformerComponent().get('wb-informer-continental-table').get('table');

