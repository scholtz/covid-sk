<template>
  <footer class="idsk-footer" role="contentinfo">
    <b-container :fluid="fluid">
      <b-row>
        <b-col md="12" style="text-align:center;">
          <div v-html="$t('footerText')" /></b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    fluid: Boolean,
  },
};
</script>
