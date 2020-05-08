import SomeComponent from './MyComponent.svelte';


window.MyComponent = function (options) {
    return new SomeComponent(options);
};