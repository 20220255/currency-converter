class DropdownList {
    label: string;

    constructor(label: string) {
        this.label = label;
    }

    get dropdown() {
        return cy.get('label')
            .contains(this.label)
            .parent()
            .find('select')
    }

    choose(option: string) {
        this.dropdown.select(option);
    }
}

// export {DropdownList};

class Button {
    label: string;

    constructor(label: string) {
        this.label = label;
    }

    get button() {
        return cy.get('button').contains(this.label);
    }

    click() {
        this.button.click();
    }
}

class InputText {
    label: string;

    constructor(label: string) {
        this.label = label;
    }

    get input() {
        return cy.get('label')
            .contains(this.label)
            .parent()
            .find('input')
    }

    type(value: string) {
        this.input.type(value);
    }
}   



export { DropdownList, Button, InputText };