<template>
  <item-list :type="$route.params.category"></item-list>
</template>

<script>
import ItemList from '~components/ItemList.vue'

let categories = ['top', 'new', 'show', 'ask', 'job']

export default {
  fetch ({ store, route, error }) {
    if (categories.indexOf(route.params.category) === -1) {
      return error({ statusCode: 404, message: 'Page not found' })
    }
    return store.dispatch('FETCH_LIST_DATA', { type: route.params.category })
  },
  component: {
    custom: ItemList
  }
}
</script>
