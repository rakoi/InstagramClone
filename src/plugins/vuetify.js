import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css"; // Add this line
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import colors from 'vuetify/lib/util/colors';


Vue.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
library.add(fas) // Include needed icons


Vue.use(Vuetify);
const opts = {
  options: {
      customProperties: true
    },
  theme: {
    themes:{
      dark: {
        background: '#FFF',
        
    }
    },
    
    
    dark: false,

  },
 

  icons: {
    iconfont: "mdi"
  },

};

export default new Vuetify(opts);