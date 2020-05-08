My svelte component
=============
2020-05-08

This is my template for a svelte component.



It follows the guidelines exposed in the [Inject svelte in an existing html page recipe](https://github.com/lingtalfi/TheBar/blob/master/discussions/inject-svelte-in-existing-app.md).



To install and use your new component based on that template, follow the tutorial below.






Tutorial: install a new component in 5 steps
========




Goal: have a svelte component working, name=**MyAwesomeComponent**, dir=**my-awesome-component**.


- clone my-svelte-component
- rename the dir **my-svelte-component** to **my-awesome-component**
- open **src/main.js** and find the expression: `window.MyComponent`,
	replace it with the expression `window.MyAwesomeComponent`
- open **index.html** and find the expression `new MyComponent`,
	replace it with the expression `new MyAwesomeComponent`

- open a terminal and execute the following commands: 

```bash
cd /path/to/my-awesome-component
npm install
npm run dev
```

The **run dev** command will build your component in the **/dist** directory and open a web server so that you can test your component with live refresh.


The test rig
------------

The `npm run dev` that we did in last step is fine, but it just displays the component, and we cannot really test it.

In the following steps, we will create a test page that will actually use our component and that we will be able
to modify live. This is probably this setup that we will use while creating our component, or when we want to extend its functionality. 


- open **src/test.js** and replace the expression: `MyComponentTest` with `MyAwesomeComponentTest`.
    Note that this expression appears two times in this file.
- open **index-test.html** and replace the expression `new MyComponentTest` with `new MyAwesomeComponentTest`
- open a terminal and execute the following commands: 

```bash
cd /path/to/my-awesome-component
npm run dev-test
```











Tutorial: install a new component in 1 step with unitool
=========

If you are using the [universe framework](https://github.com/karayabin/universe-snapshot)
you can do all the steps described above with 1 line of code.
This requires a setup (todo only once for all) described in the [SvelteTemplateBuilder planet](https://github.com/lingtalfi/SvelteTemplateBuilder).

With that builder tool installed (and assuming the alias created), just type the following:

```bash 
sveltecompo MyTestComponent my-test-component
```

(test rig not implemented yet, will be there soon...)




