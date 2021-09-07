import Vue from 'vue'
import Nujek from '~nujek-ui/plugin'
import { NjSection } from '~nujek-ui/components'

const settings = {
  NjSection: {
    component: NjSection,
    props: {
      classes: {
        wrapper: 'bg-blue-600',
        container: 'bg-red-600'
      },
      variants: {
        boxed: {
          wrapper: 'bg-teal-200 flex justify-center my-8',
          container: 'bg-red-400 max-w-screen-2xl'
        },
        fullWidth: {
          wrapper: 'bg-yellow-200 w-full',
          container: 'bg-yellow-400 w-full'
        }
      }
    }
  }
}

Vue.use(Nujek, settings)