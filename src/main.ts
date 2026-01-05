import './style.css'
import { createHtml } from './utils/createHtml'
import { menuListener } from './utils/menu';
import { projectsListener } from './utils/projects';

createHtml();
menuListener();
projectsListener();