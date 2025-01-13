import { _ as _export_sfc, b as useI18n } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "section3",
  __ssrInlineRender: true,
  setup(__props) {
    const { t: $t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "company" }, _attrs))} data-v-8765276e><div class="container" data-v-8765276e><h2 class="title" data-v-8765276e>${ssrInterpolate(unref($t)("section3-title"))}</h2><div class="grid" data-v-8765276e><!--[-->`);
      ssrRenderList(8, (n) => {
        _push(`<div class="grid-item" data-v-8765276e><img${ssrRenderAttr("src", `/img/files/dls${n === 8 ? n + ".png" : n + ".jpg"}`)} alt="img" class="media-logo" data-v-8765276e></div>`);
      });
      _push(`<!--]--></div><div class="footer" data-v-8765276e><div class="text" data-v-8765276e><div class="number" data-v-8765276e>19</div><span data-v-8765276e>${ssrInterpolate(unref($t)("section3-text1"))}</span></div><div class="text" data-v-8765276e><div class="number" data-v-8765276e>50<span class="add" data-v-8765276e>+</span></div><span data-v-8765276e>${ssrInterpolate(unref($t)("section3-text2"))}</span></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/arc/section3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8765276e"]]);

export { __nuxt_component_2 as default };
//# sourceMappingURL=section3-Cl7PTfE3.mjs.map
