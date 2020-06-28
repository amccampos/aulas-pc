
function fig0(svg, ctx) {
  ctx = ctx || rough.svg(svg);
  Draw.setSize(svg, 120, 70);
  Draw.path(svg, ctx, [[10, 60], [10, 10], [110, 60], [10, 60]]);
}

function fig1(svg, ctx) {
  ctx = ctx || rough.svg(svg);
  Draw.setSize(svg, 120, 120);
  Draw.path(svg, ctx, [[10, 10], [110, 10], [110, 110], [10, 110], [10, 10], [60, 60], [110, 10]]);
}

function fig2(svg, ctx) {
  ctx = ctx || rough.svg(svg);
  Draw.setSize(svg, 120, 120);
  Draw.path(svg, ctx, [[10, 10], [110, 10], [110, 110], [10, 110], [10, 10], [110, 110], [110, 10], [10, 110]]);
}

function fig3(svg, ctx) {
  ctx = ctx || rough.svg(svg);
  Draw.setSize(svg, 220, 220);
  Draw.path(svg, ctx, [[10, 10], [210, 10], [210, 210], [10, 210], [10, 10]]);
  Draw.path(svg, ctx, [[10, 60], [60, 10], [210, 160], [160, 210], [10, 60]]);
  Draw.path(svg, ctx, [[10, 160], [160, 10], [210, 60], [60, 210], [10, 160]]);
  Draw.line(svg, ctx, 10, 110, 210, 110);
}

function fig4(svg, ctx) {
  ctx = ctx || rough.svg(svg);
  Draw.setSize(svg, 120, 70);
  Draw.path(svg, ctx, [[10, 10], [10, 60], [110, 60]]);
  Draw.line(svg, ctx, 10, 60, 110, 10);
}

function fig5(svg, ctx) {
  ctx = ctx || rough.svg(svg);
  fig3(svg, ctx);
  Draw.line(svg, ctx, 110, 10, 110, 210);
}

function arrowDown(svg, ctx) {
  ctx = ctx || rough.svg(svg);
  Draw.setSize(svg, 30, 70);
  Draw.arrow(svg, ctx, 15, 10, 15, 60, 1);
}

function pattern(svg, ctx, x, y) {
  ctx = ctx || rough.svg(svg);
  Draw.path(svg, ctx, [[x, y], [x+50, y], [x, y+50], [x+50, y+100], [x+100, y+50], [x+50, y], [x+100, y]]);
  Draw.arrowHead(svg, ctx, x+100, y, 3);
}

function fig6(svg, ctx) {
  ctx = ctx || rough.svg(svg);
  Draw.setSize(svg, 250, 250);
  Draw.arrow(svg, ctx, 5, 115, 5, 15, 0);
  Draw.arrow(svg, ctx, 240, 15, 240, 115, 1);
  Draw.arrow(svg, ctx, 240, 140, 240, 230, 1);
  Draw.arrow(svg, ctx, 230, 240, 130, 240, 2);
  Draw.arrow(svg, ctx, 110, 240, 10, 240, 2);
  Draw.arrow(svg, ctx, 5, 230, 5, 145, 0);
  Draw.circle(svg, ctx, 7, 130, 15, { stroke: 'green', fill: 'green' })
  Draw.circle(svg, ctx, 240, 130, 15, { stroke: 'blue', fill: 'blue' })
  ctx = rough.svg(svg, { options: { stroke: 'red' }})
  pattern(svg, ctx, 20, 5);
  pattern(svg, ctx, 130, 5);
  pattern(svg, ctx, 20, 130);
  pattern(svg, ctx, 130, 130);
}

function figDecomp(svg, ctx) {
  ctx = ctx || rough.svg(svg);
  Draw.setSize(svg, 350, 60);
  Draw.rect(svg, ctx, 5, 15, 40, 30, { fill: 'blue' });
  Draw.rect(svg, ctx, 45, 15, 100, 30, { fill: 'red' });
  Draw.rect(svg, ctx, 145, 15, 30, 30, { fill: 'green' });
  Draw.rect(svg, ctx, 175, 15, 100, 30, { fill: 'red' });
  Draw.rect(svg, ctx, 275, 15, 70, 30, { fill: 'orange' });
}

function figTransf(svg, ctx) {
  ctx = ctx || rough.svg(svg);
  Draw.setSize(svg, 350, 90);
  Draw.circle(svg, ctx, 45, 45, 80, { fill: 'red' });
  Draw.rect(svg, ctx, 265, 5, 80, 80, { fill: 'blue' });
  Draw.line(svg, ctx, 100, 45, 250, 45, { roughness: 2.8 });
  Draw.arrowHead(svg, ctx, 250, 45, 3, 10);
}

Draw.draw([
  ['svg.1', fig1],
  ['svg.2', fig2],
  ['svg.3', fig3],

  ['svg.p0', fig0],
  ['svg.p1', fig1],
  ['svg.p2', fig2],
  ['svg.p3', fig3],
  ['svg.p4', fig4],
  ['svg.p5', fig5],

  ['svg.g1', fig0],
  ['svg.g2', arrowDown],
  ['svg.g3', fig3],

  ['svg.d1', fig3],
  ['svg.d2', arrowDown],
  ['svg.d3', fig0],

  ['svg.a1', fig3],
  ['svg.c1', fig6],
  ['svg.f1', figDecomp],
  ['svg.f2', figTransf],
]);
