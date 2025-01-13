import { b as useI18n, c as _imports_1 } from './server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
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

const _imports_0 = publicAssetsURL("/img/files/contact1.jpg");
const _imports_2 = publicAssetsURL("/img/files/contact2.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const { t: $t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "em-index" }, _attrs))}><div class="contact-background"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="contact-box"><div class="contact-box-title"><h4>${ssrInterpolate(unref($t)("contact-us"))}</h4><div class="title-line"></div></div><div class="contact-information"><div class="contact-information-left"><div class="c-item">${ssrInterpolate(unref($t)("footer-address"))}</div><div class="c-item">${ssrInterpolate(unref($t)("footer-phone"))}</div><div class="c-item">${ssrInterpolate(unref($t)("footer-net"))}<a href="www.empowerwin.com">www.empowerwin.com</a></div><div><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div class="contact-information-right"><img${ssrRenderAttr("src", _imports_2)} alt=""></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-Cf8KweNf.mjs.map
