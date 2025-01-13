import { _ as _export_sfc, b as useI18n } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _imports_0 = publicAssetsURL("/img/files/aboutus.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "section2",
  __ssrInlineRender: true,
  setup(__props) {
    const { t: $t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "about-us" }, _attrs))} data-v-21994c2c><div class="about-us-box animate-in" data-v-21994c2c><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-21994c2c><div class="about-us-text" data-v-21994c2c><div class="about-us-title" data-v-21994c2c><h3 data-v-21994c2c>${ssrInterpolate(unref($t)("company-name"))}</h3><p class="Subtitle" data-v-21994c2c>${ssrInterpolate(unref($t)("home-title"))}</p><p data-v-21994c2c>${ssrInterpolate(unref($t)("section2-title"))}</p><p data-v-21994c2c>${ssrInterpolate(unref($t)("section2-text1"))}<br data-v-21994c2c> ${ssrInterpolate(unref($t)("section2-text2"))}<br data-v-21994c2c> ${ssrInterpolate(unref($t)("section2-text3"))}</p></div><div class="about-us-p" data-v-21994c2c></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/arc/section2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-21994c2c"]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=section2-hTQhN0v2.mjs.map
