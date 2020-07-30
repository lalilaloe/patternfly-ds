export default {
    displayName: "formcontrol",
    name: "formcontrol",
    homepage: "https://www.patternfly.org/v4//documentation/core/components/formcontrol/"
}

export const variants = [
{
displayName:"Basic",
picture:{
src:"./pictures/formcontrol/input.png",
width:800,
height:600},
snippet:{
html:`<input class="pf-c-form-control" type="text" value="Standard" id="input-standard" aria-label="Standard input example" />
<br />
<br />
<input class="pf-c-form-control" readonly type="text" value="Readonly" id="input-readonly" aria-label="Readonly input example" />
<br />
<br />
<input class="pf-c-form-control pf-m-success" type="text" value="Success" id="input-success" aria-label="Success state input example" />
<br />
<br />
<input class="pf-c-form-control pf-m-warning" type="text" value="Warning" id="input-warning" aria-label="Warning state input example" />
<br />
<br />
<input class="pf-c-form-control" required type="text" value="Error" id="input-error" aria-invalid="true" aria-label="Error state input example" />
<br />
<br />
<input class="pf-c-form-control" disabled type="text" value="Disabled" id="input-disabled" aria-label="Disabled input example" />
<br />
<br />
<input class="pf-c-form-control pf-m-search" type="search" id="input-search" name="search-input" aria-label="Search input example" />`}},
{
displayName:"Basic",
picture:{
src:"./pictures/formcontrol/select.png",
width:800,
height:600},
snippet:{
html:`<select class="pf-c-form-control" id="select-standard" name="select-standard" aria-label="Standard select example">
  <option selected>Please choose</option>
  <option value="Mr">Mr</option>
  <option value="Miss">Miss</option>
  <option value="Mrs">Mrs</option>
  <option value="Ms">Ms</option>
  <option value="Dr">Dr</option>
  <option value="Other">Other</option>
</select>
<br />
<br />
<select class="pf-c-form-control" id="select-group" name="select-group" aria-label="Select group example">
  <optgroup label="Group 1">
    <option value="Option 1">The first option</option>
    <option value="Option 2" selected>The second option is selected by default</option>
  </optgroup>
  <optgroup label="Group 2">
    <option value="Option 3">The third option</option>
    <option value="Option 4">The fourth option</option>
  </optgroup>
</select>
<br />
<br />
<select class="pf-c-form-control pf-m-success" id="select-group-success" name="select-group-success" aria-label="Success state select group example">
  <option>Valid option</option>
  <optgroup label="Group 1">
    <option value="Option 1">The first option</option>
    <option value="Option 2">The second option</option>
  </optgroup>
  <optgroup label="Group 2">
    <option value="Option 3">The third option</option>
    <option value="Option 4">The fourth option</option>
  </optgroup>
</select>
<br />
<br />
<select class="pf-c-form-control pf-m-warning" id="select-group-warning" name="select-group-warning" aria-label="Warning state select group example">
  <option>Warning option</option>
  <optgroup label="Group 1">
    <option value="Option 1">The first option</option>
    <option value="Option 2">The second option</option>
  </optgroup>
  <optgroup label="Group 2">
    <option value="Option 3">The third option</option>
    <option value="Option 4">The fourth option</option>
  </optgroup>
</select>
<br />
<br />
<select class="pf-c-form-control" required aria-invalid="true" id="select-group-error" name="select-group-error" aria-label="Error state select group example">
  <option>Invalid option</option>
  <optgroup label="Group 1">
    <option value="Option 1">The first option</option>
    <option value="Option 2">The second option</option>
  </optgroup>
  <optgroup label="Group 2">
    <option value="Option 3">The third option</option>
    <option value="Option 4">The fourth option</option>
  </optgroup>
</select>
<br />
<br />`}},
{
displayName:"Basic",
picture:{
src:"./pictures/formcontrol/textarea.png",
width:800,
height:600},
snippet:{
html:`<textarea class="pf-c-form-control" name="textarea-standard" id="textarea-standard" aria-label="Standard textarea example">Standard</textarea>
<br />
<br />
<textarea class="pf-c-form-control" readonly name="textarea-readonly" id="textarea-readonly" aria-label="Readonly textarea example">Readonly</textarea>
<br />
<br />
<textarea class="pf-c-form-control pf-m-success" name="textarea-success" id="textarea-success" aria-label="Success state textarea example">Success</textarea>
<br />
<br />
<textarea class="pf-c-form-control pf-m-warning" name="textarea-warning" id="textarea-warning" aria-label="Warning state textarea example">Warning</textarea>
<br />
<br />
<textarea class="pf-c-form-control" required name="textarea-error" id="textarea-error" aria-label="Error state textarea example" aria-invalid="true">Error</textarea>
<br />
<br />
<textarea class="pf-c-form-control pf-m-resize-vertical" name="textarea-resize-vertical" id="textarea-resize-vertical" aria-label="Resize vertical textarea example">Resizes vertically</textarea>
<br />
<br />
<textarea class="pf-c-form-control pf-m-resize-horizontal" name="textarea-resize-horizontal" id="textarea-resize-horizontal" aria-label="Resize horizontal textarea example">Resizes horizontally</textarea>`}}
]