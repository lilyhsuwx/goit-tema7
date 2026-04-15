import {products} from "./data";
import template from "./products-template.hbs";

const listRef = document.querySelector(".list");


listRef.innerHTML = template({products});