/**
 * Algumas funções utilitárias para facilitar o desenho com a biblioteca rough.
 */

let Draw = {}

/** altera o tamanho do elemento SVG no DOM */
Draw.setSize = function(svg, w, h) {
  svg.setAttribute('width', w);
  svg.setAttribute('height', h);
}

/** desenha uma linha de (x0, y0) a (x1, y1) */
Draw.line = function(svg, ctx, x0, y0, x1, y1, opt) {
  svg.appendChild(ctx.line(x0, y0, x1, y1, opt));
}

/** desenha um retângulo cuja coordenada superior esquerda é (x, y) e com largura w e altura h */
Draw.rect = function(svg, ctx, x, y, w, h, opt) {
  svg.appendChild(ctx.rectangle (x, y, w, h, opt));
}

/** desenha um círculo com o centro em (x, y) e diâmetro d */
Draw.circle = function (svg, ctx, x, y, d, opt) {
  svg.appendChild(ctx.circle(x, y, d, opt));
}

/** desenha uma sequência de pontos conectados na forma [[x0, y0], [x1, y1], ...] */
Draw.path = function (svg, ctx, path, opt) {
  svg.appendChild(ctx.linearPath(path, opt));
}

/* direção das setas: cima (0), baixo (1), esquerda (2), direita (3) */
Draw.ArrowDir = [[[-1, 2], [1, 2]], [[-1, -2], [1, -2]], [[2, -1], [2, 1]], [[-2, -1], [-2, 1]] ];

/**
 * desenha a cabeça de uma seta cuja ponta é definida por (x, y) e tamanho size.
 * O valor da direção da seta (dir) é: cima (0), baixo (1), esquerda (2) ou direita (3)
 */
Draw.arrowHead = function (svg, ctx, x, y, dir, size) {
  size = size || 5;
  let [[x0, y0], [x1, y1]] = Draw.ArrowDir[dir];
  x0 *= size;
  y0 *= size;
  x1 *= size;
  y1 *= size;
  Draw.path(svg, ctx, [[x + x0, y + y0], [x, y], [x + x1, y + y1]]);
}

/** desenha uma seta do ponto (x0, y0) a (x1, y1) com direção e tamanho indicados */
Draw.arrow = function (svg, ctx, x0, y0, x1, y1, dir, size) {
  Draw.line(svg, ctx, x0, y0, x1, y1);
  Draw.arrowHead(svg, ctx, x1, y1, dir, size);
}

/** desenha as figuras nos elements svg do DOM */
Draw.draw = function (figs) {
  figs.forEach(([elm, fig]) => fig(document.getElementById(elm)))
}
