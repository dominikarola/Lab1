describe('Swpier Gallery Test', function() {
    it('Checks if second slide contains "Rome"', function() {
        cy.visit('http://localhost:3000');
        cy.get('.swiper-slide-active').should('contain', 'Rome').and('contain', 'Italy');;
    });
});

describe('Swiper Gallery Test', function() {
    it('Checks if second slide contains "United Kingdom"', function() {
        cy.visit('http://localhost:3000');
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    });
});

describe('Swiper Gallery Test', function() {
    it('Checks if third slide contains "Paris"', function() {
        cy.visit('http://localhost:3000');
        cy.get('.swiper-button-next').click();
        cy.wait(2000);
        cy.get('.swiper-button-next').click({ force: true });
        cy.wait(2000);
        cy.get('.swiper-slide-active').should('contain', 'Paris');
    });
});

describe('Gallery Visibility Test', function() {
    it('Opens the gallery page and verifies visibility of all elements', function() {
        // Krok 1: Otwórz stronę z galerią
        cy.visit('http://localhost:3000');
        // Krok 2: Sprawdź, czy główny kontener galerii jest widoczny
        cy.get('.wrapper').should('be.visible');
        cy.get('.swiper-slide').should('be.visible');
        cy.get('.swiper-button-prev').should('be.visible').click();
        cy.get('.swiper-button-next').should('be.visible').click();
    });
});

describe('Gallery Navigation Test', function() {
    it('Allows the user to navigate through slides using navigation buttons', function() {
        // Krok 1: Otwórz stronę z galerią
        cy.visit('http://localhost:3000');

        // Poczekaj na załadowanie się strony
        // Krok 2: Kliknij przycisk "następny" i sprawdź, czy następny slajd zostaje wyświetlony
        cy.get('.swiper-button-next').should('be.visible').click();
        cy.get('.swiper-slide-active').next().should('have.class', 'swiper-slide'); // Sprawdź, czy następny slajd został wyświetlony

        // Krok 3: Kliknij przycisk "poprzedni" i sprawdź, czy poprzedni slajd zostaje wyświetlony
        cy.get('.swiper-button-prev').should('be.visible').click();
        cy.get('.swiper-slide-active').prev().should('have.class', 'swiper-slide'); // Sprawdź, czy poprzedni slajd został wyświetlony
    });
});

describe('Gallery Responsiveness Test', function() {
    it('Verifies that the gallery behaves correctly on various devices', function() {
        // Krok 1: Otwórz stronę z galerią na różnych urządzeniach (np. komputer, tablet, telefon)
        cy.viewport('macbook-15'); // Ustaw widok na komputer (możesz użyć różnych wartości np. 'iphone-x', 'ipad-2', itp.)
        cy.visit('http://localhost:3000');
        cy.wait(2000); // Poczekaj na załadowanie strony

        // Krok 2: Sprawdź, czy układ galerii dostosowuje się do wielkości ekranu
        cy.get('.wrapper').should('be.visible'); // Sprawdź widoczność głównego kontenera galerii

        // Krok 3: Upewnij się, że przyciski nawigacji są dostępne i klikalne na wszystkich urządzeniach
        cy.get('.swiper-button-next').should('be.visible').click(); // Sprawdź i kliknij przycisk "następny"
        cy.get('.swiper-button-prev').should('be.visible').click(); // Sprawdź i kliknij przycisk "poprzedni"

        // Powtórz te same kroki dla innych urządzeń, np. tabletu i telefonu
        cy.viewport('ipad-2');
        cy.reload(); // Ponownie załaduj stronę, aby zastosować nowy widok
        cy.wait(2000);

        cy.get('.wrapper').should('be.visible');
        cy.get('.swiper-button-next').should('be.visible').click();
        cy.get('.swiper-button-prev').should('be.visible').click();

        cy.viewport('iphone-x');
        cy.reload();
        cy.wait(2000);

        cy.get('.wrapper').should('be.visible');
        cy.get('.swiper-button-next').should('be.visible').click();
        cy.get('.swiper-button-prev').should('be.visible').click();
    });
});

//Kolejny test