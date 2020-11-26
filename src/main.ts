declare global {
	interface Window {
		MyBlock: unknown
	}
}

import SomeComponent from './MyComponent.svelte';
window.MyBlock = function(options){
	return new SomeComponent(options)
}
