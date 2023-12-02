import { ScrollBar } from '../../src';

it('dev', () => {
	cy.mount(<ScrollBar />);
});

it('ScrollBar should set the position of its parent to relative', () => {
	cy.mount(<div id="parent"><ScrollBar /></div>);
});