import { forwardProps } from '@nujek/shared'
import Teaser from '~/components/organisms/Teaser'

export default {
  name: 'BlokTeaser',
  functional: true,
  props: ['blok'],
  render(h, context) {
    return h(Teaser, {
      props: forwardProps(context.props.blok)
    })
  }
}