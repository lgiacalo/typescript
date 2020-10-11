import Demo from './demo';

import scrollTo from 'scroll-to';

Demo.explain();

scrollTo(500, 1200, {
    ease: 'out-bounce',
    duration: 1500
});


/* defined typed typescript
> sudo npm install -g typings
> typings search jquery
> typings install dt~jquery (--global)


// declare let $: any;
*/
declare let $: JQueryStatic;

$('.demo').click(function () {
    scrollTo(0, 0);
});
