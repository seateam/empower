import { _ as _export_sfc, b as useI18n } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t: $t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "em-home" }, _attrs))} data-v-9a4c0af4><div class="em-code animate-in" data-v-9a4c0af4><h1 data-v-9a4c0af4>${ssrInterpolate(unref($t)("company-name"))}</h1><div class="subtitle" data-v-9a4c0af4>${ssrInterpolate(unref($t)("home-title"))}</div><div class="subtitle" data-v-9a4c0af4>${ssrInterpolate(unref($t)("home-subtitle1") + "|" + unref($t)("home-subtitle2"))}</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/arc/home/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9a4c0af4"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=index-_JL_Ysfq.mjs.map
