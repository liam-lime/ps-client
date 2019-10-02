import Vue from 'vue'

import Alert from "~/components/App/Alert"
import Section from "~/components/Layout/Section"
import SectionHeader from "~/components/Layout/SectionHeader"
import Container from "~/components/Layout/Container"
import List from "~/components/Layout/List"
import Button from "~/components/UI/Button"
import Select from "~/components/UI/Select"

// App
Vue.component('Alert', Alert)

// Layout
Vue.component('Section', Section)
Vue.component('SectionHeader', SectionHeader)
Vue.component('Container', Container)
Vue.component('List', List)

// UI
Vue.component('Button', Button)
Vue.component('Select', Select)
