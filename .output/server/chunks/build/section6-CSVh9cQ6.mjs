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

const _imports_0 = publicAssetsURL("/img/banner/first.png");
const _imports_1 = publicAssetsURL("/img/banner/second.png");
const _imports_2 = publicAssetsURL("/img/banner/third.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "section6",
  __ssrInlineRender: true,
  setup(__props) {
    const { t: $t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "teams" }, _attrs))} data-v-0f5aa2a4><div class="container" data-v-0f5aa2a4><h2 class="title" data-v-0f5aa2a4>${ssrInterpolate(unref($t)("section6-title"))}</h2><div class="box" data-v-0f5aa2a4><div class="box-container" data-v-0f5aa2a4><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-0f5aa2a4><h4 data-v-0f5aa2a4>${ssrInterpolate(unref($t)("section6-text1"))}</h4><p data-v-0f5aa2a4>5,000 +</p></div><div class="box-container" data-v-0f5aa2a4><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-0f5aa2a4><h4 data-v-0f5aa2a4>${ssrInterpolate(unref($t)("section6-text2"))}</h4><p data-v-0f5aa2a4>10,000 +</p></div><div class="box-container" data-v-0f5aa2a4><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-0f5aa2a4><h4 data-v-0f5aa2a4>${ssrInterpolate(unref($t)("section6-text3"))}</h4><p data-v-0f5aa2a4>30,000 +</p></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/arc/section6.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0f5aa2a4"]]);

export { __nuxt_component_5 as default };
//# sourceMappingURL=section6-CSVh9cQ6.mjs.map
