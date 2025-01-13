import { _ as _export_sfc, b as useI18n } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = publicAssetsURL("/img/files/ywicon1.png");
const _imports_1 = publicAssetsURL("/img/files/ywicon2.png");
const _imports_2 = publicAssetsURL("/img/files/ywicon3.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "section4",
  __ssrInlineRender: true,
  setup(__props) {
    const { t: $t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "contact" }, _attrs))} data-v-a9116df9><div class="container" data-v-a9116df9><h2 class="title" data-v-a9116df9>${ssrInterpolate(unref($t)("section4-title"))}</h2><div class="box" data-v-a9116df9><div class="box-container" data-v-a9116df9><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-a9116df9><h4 data-v-a9116df9>${ssrInterpolate(unref($t)("section4-text1"))}</h4><p data-v-a9116df9>${ssrInterpolate(unref($t)("section4-text2"))}</p></div><div class="box-container" data-v-a9116df9><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-a9116df9><h4 data-v-a9116df9>${ssrInterpolate(unref($t)("section4-text3"))}</h4><p data-v-a9116df9>${ssrInterpolate(unref($t)("section4-text4"))}</p></div><div class="box-container" data-v-a9116df9><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-a9116df9><h4 data-v-a9116df9>${ssrInterpolate(unref($t)("section4-text5"))}</h4><p data-v-a9116df9>${ssrInterpolate(unref($t)("section4-text6"))}</p></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/arc/section4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a9116df9"]]);

export { __nuxt_component_3 as default };
//# sourceMappingURL=section4-DzonugXB.mjs.map
