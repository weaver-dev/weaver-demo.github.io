// Copyright (c) 2026 whizBANG Developers LLC. All rights reserved.
// Licensed under AGPL-3.0 (Free) or BSL-1.1 (Solo/Team/Fabrick) with AI Training Restriction. See LICENSE.
//
// Clickjacking guard for the PUBLIC demo only.
//
// WHY A SCRIPT AND NOT A HEADER
// -----------------------------
// The correct control is `Content-Security-Policy: frame-ancestors 'none'` (or X-Frame-Options),
// and the product uses exactly that — Helmet emits a real CSP header. Neither can be delivered
// from a static host that sets no headers, and GitHub Pages sets none. `frame-ancestors` inside a
// <meta> is ignored by every browser, which is why it was removed from the meta policy: it read as
// protection and enforced nothing.
//
// So this is the honest fallback, and its limits are stated rather than implied:
//   - It is weaker than a header. A framing page that sandboxes this frame without
//     `allow-top-navigation` can suppress the escape, and the guard cannot know it was suppressed.
//   - It runs in the page, so it cannot protect anything that renders before it.
// It is a real improvement over nothing, and it is NOT a substitute for moving to a host that can
// set headers. That remains the actual fix.
//
// WHY PUBLIC-ONLY
// ---------------
// The investor deck embeds the PRIVATE demo in an iframe (business/investor/deck/index.html,
// `<iframe class="demo-frame" src="http://localhost:9040/#/weaver">`). A guard applied to every
// demo build would blank that slide. demo-postbuild.sh injects this only for `--public`, so the
// private build stays embeddable — which is the whole reason the two variants exist.
//
// WHY AN EXTERNAL FILE
// --------------------
// The demo's CSP is `script-src 'self' https://js.hcaptcha.com …` with no `'unsafe-inline'`, so an
// inline frame-buster would be blocked by our own policy. Served from the same origin, this file
// satisfies `'self'`. `style-src` does allow `'unsafe-inline'`, so the pre-paint hide below is
// applied as a style attribute rather than a stylesheet.
(function () {
  'use strict'

  var framed
  try {
    framed = window.self !== window.top
  } catch (_e) {
    // A cross-origin parent throws on the comparison. Throwing IS the signal: same-origin access
    // would have succeeded, so a SecurityError means we are framed by another origin.
    framed = true
  }

  if (!framed) return

  // Hide first, navigate second. If top-navigation is blocked by a sandbox, the page stays blank
  // rather than presenting a clickable surface inside someone else's frame — failing closed is the
  // point, since a guard that cannot escape must at least not be usable.
  try {
    document.documentElement.setAttribute(
      'style',
      'display:none !important;visibility:hidden !important'
    )
  } catch (_e) {
    /* nothing useful to do; the navigation below is the primary action */
  }

  try {
    window.top.location = window.self.location
  } catch (_e) {
    // Sandboxed without allow-top-navigation. The document stays hidden, which is the fallback.
  }
})()
