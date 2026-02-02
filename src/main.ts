import './style.css'
import { contactListener } from './utils/contact';
import { createHtml } from './utils/createHtml'
import { menuListener } from './utils/menu';
import { projectsListener } from './utils/projects';

createHtml();
menuListener();
projectsListener();
contactListener();