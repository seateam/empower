import __nuxt_component_0 from './index-_JL_Ysfq.mjs';
import __nuxt_component_1 from './section2-hTQhN0v2.mjs';
import __nuxt_component_2 from './section3-Cl7PTfE3.mjs';
import __nuxt_component_3 from './section4-DzonugXB.mjs';
import __nuxt_component_4 from './section5-DLWCCmfD.mjs';
import __nuxt_component_5 from './section6-CSVh9cQ6.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'lodash-unified';
import '@vue/shared';
import 'vue-router';
import '@vueuse/core';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_arc_home = __nuxt_component_0;
  const _component_arc_section2 = __nuxt_component_1;
  const _component_arc_section3 = __nuxt_component_2;
  const _component_arc_section4 = __nuxt_component_3;
  const _component_arc_section5 = __nuxt_component_4;
  const _component_arc_section6 = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "em-index" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_arc_home, null, null, _parent));
  _push(ssrRenderComponent(_component_arc_section2, null, null, _parent));
  _push(ssrRenderComponent(_component_arc_section3, null, null, _parent));
  _push(ssrRenderComponent(_component_arc_section4, null, null, _parent));
  _push(ssrRenderComponent(_component_arc_section5, null, null, _parent));
  _push(ssrRenderComponent(_component_arc_section6, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-B8dLKDT-.mjs.map
