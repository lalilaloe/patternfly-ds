export default {
    displayName: "backgroundimage",
    name: "backgroundimage",
    homepage: "https://www.patternfly.org/v4//documentation/core/components/backgroundimage/"
}

export const variants = [
{
displayName:"Basic",
picture:{
src:"./pictures/backgroundimage/basic.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-background-image">
  <svg xmlns="http://www.w3.org/2000/svg" class="pf-c-background-image__filter" width="0" height="0">
    <filter id="image_overlay">
      <feColorMatrix type="matrix" values="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0"></feColorMatrix>
      <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
        <feFuncR type="table" tableValues="0.086274509803922 0.43921568627451"></feFuncR>
        <feFuncG type="table" tableValues="0.086274509803922 0.43921568627451"></feFuncG>
        <feFuncB type="table" tableValues="0.086274509803922 0.43921568627451"></feFuncB>
        <feFuncA type="table" tableValues="0 1"></feFuncA>
      </feComponentTransfer>
    </filter>
  </svg>
</div>`}}
]