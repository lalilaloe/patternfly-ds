export default {
    displayName: "chipgroup",
    name: "chipgroup",
    homepage: "https://www.patternfly.org/v4//documentation/core/components/chipgroup/"
}

export const variants = [
{
displayName:"Basic",
picture:{
src:"./pictures/chipgroup/chip-group-with-categories.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-chip-group pf-m-category">
  <span class="pf-c-chip-group__label" aria-hidden="true" id="chip-group-with-categories-label">Category one</span>
  <ul class="pf-c-chip-group__list" role="list" aria-labelledby="chip-group-with-categories-label">
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="chip-group-with-categorieschip_one_toolbar_collapsed">Chip one</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="chip-group-with-categoriesremove_chip_one_toolbar_collapsed chip-group-with-categorieschip_one_toolbar_collapsed" aria-label="Remove" id="chip-group-with-categoriesremove_chip_one_toolbar_collapsed">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="chip-group-with-categorieschip_two_toolbar_collapsed">Chip two</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="chip-group-with-categoriesremove_chip_two_toolbar_collapsed chip-group-with-categorieschip_two_toolbar_collapsed" aria-label="Remove" id="chip-group-with-categoriesremove_chip_two_toolbar_collapsed">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="chip-group-with-categorieschip_three_toolbar_collapsed">Chip three</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="chip-group-with-categoriesremove_chip_three_toolbar_collapsed chip-group-with-categorieschip_three_toolbar_collapsed" aria-label="Remove" id="chip-group-with-categoriesremove_chip_three_toolbar_collapsed">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
  </ul>
</div>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/chipgroup/chip-group-with-categories-overflow.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-chip-group pf-m-category">
  <span class="pf-c-chip-group__label" aria-hidden="true" id="chip-group-with-categories-overflow-label">Category one</span>
  <ul class="pf-c-chip-group__list" role="list" aria-labelledby="chip-group-with-categories-overflow-label">
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="chip-group-with-categories-overflowchip_one_toolbar_collapsed">Chip one</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="chip-group-with-categories-overflowremove_chip_one_toolbar_collapsed chip-group-with-categories-overflowchip_one_toolbar_collapsed" aria-label="Remove" id="chip-group-with-categories-overflowremove_chip_one_toolbar_collapsed">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="chip-group-with-categories-overflowchip_two_toolbar_collapsed">Chip two</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="chip-group-with-categories-overflowremove_chip_two_toolbar_collapsed chip-group-with-categories-overflowchip_two_toolbar_collapsed" aria-label="Remove" id="chip-group-with-categories-overflowremove_chip_two_toolbar_collapsed">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="chip-group-with-categories-overflowchip_three_toolbar_collapsed">Chip three</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="chip-group-with-categories-overflowremove_chip_three_toolbar_collapsed chip-group-with-categories-overflowchip_three_toolbar_collapsed" aria-label="Remove" id="chip-group-with-categories-overflowremove_chip_three_toolbar_collapsed">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
    <li class="pf-c-chip-group__list-item">
      <button class="pf-c-chip pf-m-overflow">
        <span class="pf-c-chip__text">2 more</span>
      </button>
    </li>
  </ul>
</div>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/chipgroup/chip-group-with-categories-overflow-expanded.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-chip-group pf-m-category">
  <span class="pf-c-chip-group__label" aria-hidden="true" id="chip-group-with-categories-overflow-expanded-label">Category one</span>
  <ul class="pf-c-chip-group__list" role="list" aria-labelledby="chip-group-with-categories-overflow-expanded-label">
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="chip-group-with-categories-overflow-expandedchip_one_toolbar">Chip one</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="chip-group-with-categories-overflow-expandedremove_chip_one_toolbar chip-group-with-categories-overflow-expandedchip_one_toolbar" aria-label="Remove" id="chip-group-with-categories-overflow-expandedremove_chip_one_toolbar">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="chip-group-with-categories-overflow-expandedchip_two_toolbar">Chip two</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="chip-group-with-categories-overflow-expandedremove_chip_two_toolbar chip-group-with-categories-overflow-expandedchip_two_toolbar" aria-label="Remove" id="chip-group-with-categories-overflow-expandedremove_chip_two_toolbar">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="chip-group-with-categories-overflow-expandedchip_three_toolbar">Chip three</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="chip-group-with-categories-overflow-expandedremove_chip_three_toolbar chip-group-with-categories-overflow-expandedchip_three_toolbar" aria-label="Remove" id="chip-group-with-categories-overflow-expandedremove_chip_three_toolbar">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="chip-group-with-categories-overflow-expandedchip_four_toolbar">Chip four</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="chip-group-with-categories-overflow-expandedremove_chip_four_toolbar chip-group-with-categories-overflow-expandedchip_four_toolbar" aria-label="Remove" id="chip-group-with-categories-overflow-expandedremove_chip_four_toolbar">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="chip-group-with-categories-overflow-expandedchip_five_select">Chip five</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="chip-group-with-categories-overflow-expandedremove_chip_five_select chip-group-with-categories-overflow-expandedchip_five_select" aria-label="Remove" id="chip-group-with-categories-overflow-expandedremove_chip_five_select">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
    <li class="pf-c-chip-group__list-item">
      <button class="pf-c-chip pf-m-overflow">
        <span class="pf-c-chip__text">Show less</span>
      </button>
    </li>
  </ul>
</div>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/chipgroup/chip-group-with-categories-removable.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-chip-group pf-m-category">
  <span class="pf-c-chip-group__label" aria-hidden="true" id="Chip-group-with-categories-removable-label">Category one</span>
  <ul class="pf-c-chip-group__list" role="list" aria-labelledby="Chip-group-with-categories-removable-label">
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="Chip-group-with-categories-removablechip_one_toolbar">Chip one</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="Chip-group-with-categories-removableremove_chip_one_toolbar Chip-group-with-categories-removablechip_one_toolbar" aria-label="Remove" id="Chip-group-with-categories-removableremove_chip_one_toolbar">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="Chip-group-with-categories-removablechip_two_toolbar">Chip two</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="Chip-group-with-categories-removableremove_chip_two_toolbar Chip-group-with-categories-removablechip_two_toolbar" aria-label="Remove" id="Chip-group-with-categories-removableremove_chip_two_toolbar">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="Chip-group-with-categories-removablechip_three_toolbar">Chip three</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="Chip-group-with-categories-removableremove_chip_three_toolbar Chip-group-with-categories-removablechip_three_toolbar" aria-label="Remove" id="Chip-group-with-categories-removableremove_chip_three_toolbar">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
  </ul>
  <div class="pf-c-chip-group__close">
    <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="Chip-group-with-categories-removable-button Chip-group-with-categories-removable-label" aria-label="Close chip group" id="Chip-group-with-categories-removable-button">
      <i class="fas fa-times-circle" aria-hidden="true"></i>
    </button>
  </div>
</div>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/chipgroup/simple-inline-chip-group-expanded.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-chip-group">
  <ul class="pf-c-chip-group__list" role="list" aria-label="Chip group list">
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="simple-inline-chip-group-expandedchip_one_select">Chip one</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="simple-inline-chip-group-expandedremove_chip_one_select simple-inline-chip-group-expandedchip_one_select" aria-label="Remove" id="simple-inline-chip-group-expandedremove_chip_one_select">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="simple-inline-chip-group-expandedchip_two_select">Chip two</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="simple-inline-chip-group-expandedremove_chip_two_select simple-inline-chip-group-expandedchip_two_select" aria-label="Remove" id="simple-inline-chip-group-expandedremove_chip_two_select">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="simple-inline-chip-group-expandedchip_three_select">Chip three</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="simple-inline-chip-group-expandedremove_chip_three_select simple-inline-chip-group-expandedchip_three_select" aria-label="Remove" id="simple-inline-chip-group-expandedremove_chip_three_select">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="simple-inline-chip-group-expandedchip_four_select">Chip four</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="simple-inline-chip-group-expandedremove_chip_four_select simple-inline-chip-group-expandedchip_four_select" aria-label="Remove" id="simple-inline-chip-group-expandedremove_chip_four_select">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="simple-inline-chip-group-expandedchip_five_select">Chip five</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="simple-inline-chip-group-expandedremove_chip_five_select simple-inline-chip-group-expandedchip_five_select" aria-label="Remove" id="simple-inline-chip-group-expandedremove_chip_five_select">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
    <li class="pf-c-chip-group__list-item">
      <button class="pf-c-chip pf-m-overflow">
        <span class="pf-c-chip__text">Show less</span>
      </button>
    </li>
  </ul>
</div>`}},
{
displayName:"Basic",
picture:{
src:"./pictures/chipgroup/simple-inline-chip-group-overflow.png",
width:800,
height:600},
snippet:{
html:`<div class="pf-c-chip-group">
  <ul class="pf-c-chip-group__list" role="list" aria-label="Chip group list">
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="simple-inline-chip-group-overflowchip_one_select_collapsed">Chip one</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="simple-inline-chip-group-overflowremove_chip_one_select_collapsed simple-inline-chip-group-overflowchip_one_select_collapsed" aria-label="Remove" id="simple-inline-chip-group-overflowremove_chip_one_select_collapsed">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="simple-inline-chip-group-overflowchip_two_select_collapsed">Chip two</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="simple-inline-chip-group-overflowremove_chip_two_select_collapsed simple-inline-chip-group-overflowchip_two_select_collapsed" aria-label="Remove" id="simple-inline-chip-group-overflowremove_chip_two_select_collapsed">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
    <li class="pf-c-chip-group__list-item">
      <div class="pf-c-chip">
        <span class="pf-c-chip__text" id="simple-inline-chip-group-overflowchip_three_select_collapsed">Chip three</span>
        <button class="pf-c-button pf-m-plain" type="button" aria-labelledby="simple-inline-chip-group-overflowremove_chip_three_select_collapsed simple-inline-chip-group-overflowchip_three_select_collapsed" aria-label="Remove" id="simple-inline-chip-group-overflowremove_chip_three_select_collapsed">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </li>
    <li class="pf-c-chip-group__list-item">
      <button class="pf-c-chip pf-m-overflow">
        <span class="pf-c-chip__text">2 more</span>
      </button>
    </li>
  </ul>
</div>`}}
]