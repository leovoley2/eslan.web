import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro/server_CP53hIQR.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BxpbSbkR.js"}],"styles":[{"type":"external","src":"/_astro/aprendo.BvyXg_9Y.css"}],"routeData":{"route":"/aprendo","isIndex":false,"type":"page","pattern":"^\\/aprendo\\/?$","segments":[[{"content":"aprendo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/aprendo.astro","pathname":"/aprendo","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BxpbSbkR.js"}],"styles":[{"type":"external","src":"/_astro/aprendo.BvyXg_9Y.css"}],"routeData":{"route":"/clinicas","isIndex":false,"type":"page","pattern":"^\\/clinicas\\/?$","segments":[[{"content":"clinicas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/clinicas.astro","pathname":"/clinicas","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BxpbSbkR.js"}],"styles":[{"type":"external","src":"/_astro/aprendo.BvyXg_9Y.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BxpbSbkR.js"}],"styles":[{"type":"external","src":"/_astro/aprendo.BvyXg_9Y.css"}],"routeData":{"route":"/niveles","isIndex":false,"type":"page","pattern":"^\\/niveles\\/?$","segments":[[{"content":"niveles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/niveles.astro","pathname":"/niveles","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BxpbSbkR.js"}],"styles":[{"type":"external","src":"/_astro/aprendo.BvyXg_9Y.css"}],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BxpbSbkR.js"}],"styles":[{"type":"external","src":"/_astro/aprendo.BvyXg_9Y.css"}],"routeData":{"route":"/servicios","isIndex":false,"type":"page","pattern":"^\\/servicios\\/?$","segments":[[{"content":"servicios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicios.astro","pathname":"/servicios","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BxpbSbkR.js"}],"styles":[{"type":"external","src":"/_astro/aprendo.BvyXg_9Y.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/leovo/OneDrive/Documentos/parte3/eslan.web/src/pages/aprendo.astro",{"propagation":"none","containsHead":true}],["C:/Users/leovo/OneDrive/Documentos/parte3/eslan.web/src/pages/clinicas.astro",{"propagation":"none","containsHead":true}],["C:/Users/leovo/OneDrive/Documentos/parte3/eslan.web/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["C:/Users/leovo/OneDrive/Documentos/parte3/eslan.web/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/leovo/OneDrive/Documentos/parte3/eslan.web/src/pages/niveles.astro",{"propagation":"none","containsHead":true}],["C:/Users/leovo/OneDrive/Documentos/parte3/eslan.web/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}],["C:/Users/leovo/OneDrive/Documentos/parte3/eslan.web/src/pages/servicios.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/aprendo@_@astro":"pages/aprendo.astro.mjs","\u0000@astro-page:src/pages/clinicas@_@astro":"pages/clinicas.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/niveles@_@astro":"pages/niveles.astro.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"pages/nosotros.astro.mjs","\u0000@astro-page:src/pages/servicios@_@astro":"pages/servicios.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_CgoSfBAs.mjs","C:/Users/leovo/OneDrive/Documentos/parte3/eslan.web/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/generic_D6IfggeV.mjs","/src/pages/aprendo.astro":"chunks/aprendo_DfDtBqr2.mjs","/src/pages/clinicas.astro":"chunks/clinicas_BZ7fo15d.mjs","/src/pages/contacto.astro":"chunks/contacto_BdXetsVf.mjs","/src/pages/niveles.astro":"chunks/niveles_BI844Xzg.mjs","/src/pages/nosotros.astro":"chunks/nosotros_T2N-uEfX.mjs","/src/pages/servicios.astro":"chunks/servicios_Cmko2Ei5.mjs","/src/pages/index.astro":"chunks/index_BzfrCx3z.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BxpbSbkR.js","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/aprendo.BvyXg_9Y.css","/10.jpg","/11.jpg","/12.jpg","/2.jpg","/3.jpg","/4.jpg","/5.jpg","/6.jpg","/7.jpg","/8.jpg","/9.jpg","/andra-guille.jpg","/andrea.png","/antebrazo.jpg","/ARENA VOLEIBOL CLUB.svg","/arena.webm","/arena10.png","/ataque.jpg","/atardecer.jpg","/clinica.jpg","/clinica2.jpg","/facebook.svg","/favicon.ico","/favicon.svg","/grupal.jpg","/horario.png","/images.png","/jesus.jpg","/leo.JPG","/lidia.png","/LOGO-ARENA.svg","/logo-home.svg","/logo1.png","/lucelia.jpg","/mascuino.jpg","/mauro.jpg","/tomando.jpg","/tu logo.png","/video.webm","/voleo.jpg","/voley.svg","/whatsapp.png","/_astro/client.5I5BMcNS.js","/_astro/hoisted.BxpbSbkR.js"],"i18n":{"strategy":"pathname-prefix-other-locales","locales":["es","en"],"defaultLocale":"es","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };
