const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

describe('chart tests', ()=>
{

	it('Setup fake page', ()=>
	{
		console.log(dom.window.document.querySelector("p").textContent); // "Hello world"

	});

	it('chart is an object', ()=>
	{

	});

});

