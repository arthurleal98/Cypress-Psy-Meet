describe('Testar o filtro "Especialidades"', () => {
  beforeEach(() => {
    cy.visit('https://www.psymeetsocial.com/busca');
  })

  it('Adicionar uma especialidade inexistente', () => {
    //Inserir especialidade
    cy.get('input[id="react-select-Especialidades-input"]').type('Psicologia Clínica{enter}');

    //Clicar no botão de buscar
    cy.get('button[class="SearchPsychologistHeroSection_searchButton__34uWr"]').click();

    //Validar se a especialidade foi adicionada
    cy.get('div[class="css-pcd8tn-multiValue"]').should('not.exist');

  });

  it('Adicionar uma especialidade existente', () => {
    //Inserir especialidade
    cy.get('input[id="react-select-Especialidades-input"]').type('Ansiedade{enter}');

    //Clicar no botão de buscar
    cy.get('button[class="SearchPsychologistHeroSection_searchButton__34uWr"]').click();

    //Validar se a especialidade foi adicionada
    cy.get('div[class="css-pcd8tn-multiValue"]').should('exist');
  });

  it('Execeder o número máximo de especialidades', () => {
    //Inserir especialidades
    cy.get('input[id="react-select-Especialidades-input"]').type('Abuso Infantil{enter}');
    cy.get('input[id="react-select-Especialidades-input"]').type('Acompanhamento psicológico{enter}');
    cy.get('input[id="react-select-Especialidades-input"]').type('Acompanhamento terapêutico{enter}');
    cy.get('input[id="react-select-Especialidades-input"]').type('Adoção de filhos{enter}');
    cy.get('input[id="react-select-Especialidades-input"]').type('Adolescência{enter}');
    cy.get('input[id="react-select-Especialidades-input"]').type('Terapia Cognitivo Comportamental{enter}');

    //Clicar no botão de buscar
    cy.get('button[class="SearchPsychologistHeroSection_searchButton__34uWr"]').click();

    //Validar se as especialidades foram adicionadas
    cy.get('div[class="css-pcd8tn-multiValue"]').should('have.length', 6);
    })

  it('Remover uma especialidade', () => {
    //Inserir especialidade
    cy.get('input[id="react-select-Especialidades-input"]').type('Ansiedade{enter}');

    //Clicar no botão de buscar
    cy.get('button[class="SearchPsychologistHeroSection_searchButton__34uWr"]').click();

    //Remover especialidade
    cy.get('div[class="css-pcd8tn-multiValue"]').click();
    cy.get('div[class="css-rtdt38"]').click();
    //Validar se a especialidade foi removida
    cy.get('div[class="css-pcd8tn-multiValue"]').should('not.exist');
  }
  )

  it('Remover todas as especialidades', () => {
    //Inserir especialidades
    cy.get('input[id="react-select-Especialidades-input"]').type('Ansiedade{enter}');
    cy.get('input[id="react-select-Especialidades-input"]').type('Depressão{enter}');
    cy.get('input[id="react-select-Especialidades-input"]').type('Estresse{enter}');
    cy.get('input[id="react-select-Especialidades-input"]').type('Psicologia Clínica{enter}');
    cy.get('input[id="react-select-Especialidades-input"]').type('Psicologia Infantil{enter}');
    cy.get('input[id="react-select-Especialidades-input"]').type('Psicologia do Trânsito{enter}');

  
    //Remover todas as especialidades
    cy.get('div[class="css-tlfecz-indicatorContainer"]').click();
    cy.screenshot();
    //Validar se as especialidades foram removidas
    cy.get('div[class="css-pcd8tn-multiValue"]').should('not.exist');
  }
  )

}
)
