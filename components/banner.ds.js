export default {
    displayName: "banner",
    name: "banner",
    homepage: "https://www.patternfly.org/v4//documentation/core/components/banner/"
}

export const variants = [
{
displayName:"Basic",
picture:{
src:"./pictures/banner/basic.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-banner">Default banner</div>
<br />
<div class="pf-c-banner pf-m-info">Info banner</div>
<br />
<div class="pf-c-banner pf-m-danger">Danger banner</div>
<br />
<div class="pf-c-banner pf-m-success">Success banner</div>
<br />
<div class="pf-c-banner pf-m-warning">Warning banner</div>`}}
]