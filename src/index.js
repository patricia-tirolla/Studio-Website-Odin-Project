import { displayProjects } from "./projectsUI";
import { scrollToForm } from "./contact"

import './styles/header.css';
import "./styles/projects-section.css";
import './styles/contact.css';
import './styles/meetus.css';
import './styles/languages.css';
import './styles/form.css';
import './styles/footer.css';
import './styles/reset.css';
import './style.css';



displayProjects();

const getStartedButton = document.querySelector('.contact-button-getstarted');
getStartedButton.addEventListener('click', scrollToForm);