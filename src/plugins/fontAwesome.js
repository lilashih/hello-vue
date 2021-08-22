import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
  faHome, faCandyCane, faBomb, faCat, faAnchor, faCrown, faGrinTongueWink, faFish, faGuitar, faSyncAlt, faCheckCircle, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCircle,
} from '@fortawesome/free-regular-svg-icons';
// import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faGithub, faYoutube, faHome, faCandyCane, faBomb, faCat, faAnchor, faCrown, faGrinTongueWink, faFish, faGuitar, faSyncAlt, faCheckCircle, faTimes, faCircle);

export default FontAwesomeIcon;