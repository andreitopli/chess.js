if (typeof require != 'undefined') {
  var Chess = require('../chess').Chess
}

describe('generate range moves for ROOK to jump over enemy piece', () => {
  test('verbose false, range attack for ROOK', () => {
    const chess = new Chess(
      'rnb1kbnr/ppp1pp1p/8/6P1/1q1p3R/4P1P1/PPPP1P2/RNBQKBN1 w Qkq - 0 6'
    )
    const moves = chess.moves(
      {
        square: 'h4',
        verbose: false,
      },
      'range'
    )
    expect(moves).toEqual([
      'Rh5',
      'Rh6',
      'Rxh7',
      'Rxh8',
      'Rh3',
      'Rh2',
      'Rh1',
      'Rg4',
      'Rf4',
      'Re4',
      'Rxd4',
      'Rxb4',
    ])
  })
  test('verbose true, range attack for ROOK', () => {
    const chess = new Chess(
      'rnb1kbnr/ppp1pp1p/8/6P1/1q1p3R/4P1P1/PPPP1P2/RNBQKBN1 w Qkq - 0 6'
    )
    const moves = chess.moves(
      {
        square: 'h4',
        verbose: true,
      },
      'range'
    )
    expect(moves).toEqual([
      {
        color: 'w',
        flags: 'n',
        from: 'h4',
        piece: 'r',
        san: 'Rh5',
        to: 'h5',
      },
      {
        color: 'w',
        flags: 'n',
        from: 'h4',
        piece: 'r',
        san: 'Rh6',
        to: 'h6',
      },
      {
        captured: 'p',
        color: 'w',
        flags: 'c',
        from: 'h4',
        piece: 'r',
        san: 'Rxh7',
        to: 'h7',
      },
      {
        captured: 'r',
        color: 'w',
        flags: 'c',
        from: 'h4',
        piece: 'r',
        san: 'Rxh8',
        to: 'h8',
      },
      {
        color: 'w',
        flags: 'n',
        from: 'h4',
        piece: 'r',
        san: 'Rh3',
        to: 'h3',
      },
      {
        color: 'w',
        flags: 'n',
        from: 'h4',
        piece: 'r',
        san: 'Rh2',
        to: 'h2',
      },
      {
        color: 'w',
        flags: 'n',
        from: 'h4',
        piece: 'r',
        san: 'Rh1',
        to: 'h1',
      },
      {
        color: 'w',
        flags: 'n',
        from: 'h4',
        piece: 'r',
        san: 'Rg4',
        to: 'g4',
      },
      {
        color: 'w',
        flags: 'n',
        from: 'h4',
        piece: 'r',
        san: 'Rf4',
        to: 'f4',
      },
      {
        color: 'w',
        flags: 'n',
        from: 'h4',
        piece: 'r',
        san: 'Re4',
        to: 'e4',
      },
      {
        captured: 'p',
        color: 'w',
        flags: 'c',
        from: 'h4',
        piece: 'r',
        san: 'Rxd4',
        to: 'd4',
      },
      {
        captured: 'q',
        color: 'w',
        flags: 'c',
        from: 'h4',
        piece: 'r',
        san: 'Rxb4',
        to: 'b4',
      },
    ])
  })
})

describe('generate melee moves for ROOK to jump over enemy piece', () => {
  test('verbose false - melee moves for ROOK', () => {
    const chess = new Chess(
      'rnb1kbnr/ppp1pp1p/8/6P1/1q1p3R/4P1P1/PPPP1P2/RNBQKBN1 w Qkq - 0 6'
    )
    const moves = chess.moves(
      {
        square: 'h4',
        verbose: false,
      },
      'melee'
    )
    expect(moves).toEqual([
      'Rh5',
      'Rh6',
      'Rxh7',
      'Rh3',
      'Rh2',
      'Rh1',
      'Rg4',
      'Rf4',
      'Re4',
      'Rxd4',
    ])
  })
  test('verbose true, melee attack for ROOK', () => {
    const chess = new Chess(
      'rnb1kbnr/ppp1pp1p/8/6P1/1q1p3R/4P1P1/PPPP1P2/RNBQKBN1 w Qkq - 0 6'
    )
    const moves = chess.moves(
      {
        square: 'h4',
        verbose: true,
      },
      'melee'
    )
    expect(moves).toEqual([
      {
        color: 'w',
        flags: 'n',
        from: 'h4',
        piece: 'r',
        san: 'Rh5',
        to: 'h5',
      },
      {
        color: 'w',
        flags: 'n',
        from: 'h4',
        piece: 'r',
        san: 'Rh6',
        to: 'h6',
      },
      {
        captured: 'p',
        color: 'w',
        flags: 'c',
        from: 'h4',
        piece: 'r',
        san: 'Rxh7',
        to: 'h7',
      },
      {
        color: 'w',
        flags: 'n',
        from: 'h4',
        piece: 'r',
        san: 'Rh3',
        to: 'h3',
      },
      {
        color: 'w',
        flags: 'n',
        from: 'h4',
        piece: 'r',
        san: 'Rh2',
        to: 'h2',
      },
      {
        color: 'w',
        flags: 'n',
        from: 'h4',
        piece: 'r',
        san: 'Rh1',
        to: 'h1',
      },
      {
        color: 'w',
        flags: 'n',
        from: 'h4',
        piece: 'r',
        san: 'Rg4',
        to: 'g4',
      },
      {
        color: 'w',
        flags: 'n',
        from: 'h4',
        piece: 'r',
        san: 'Rf4',
        to: 'f4',
      },
      {
        color: 'w',
        flags: 'n',
        from: 'h4',
        piece: 'r',
        san: 'Re4',
        to: 'e4',
      },
      {
        captured: 'p',
        color: 'w',
        flags: 'c',
        from: 'h4',
        piece: 'r',
        san: 'Rxd4',
        to: 'd4',
      },
    ])
  })
})

describe('generate range and melee moves for ROOK to jump over self pieces', () => {
  test('range attacks for rook with own piece in front, must jump over', () => {
    const testParams = {
      fen: 'rnbqkbnr/ppppp3/5p1p/6P1/8/7N/PPPPPPP1/RNBQKB1R w KQkq - 0 4',
      square: 'h1',
      verbose: false,
      type: 'range',
      moves: ['Rh2', 'Rxh6', 'Rxh8', 'Rg1'],
    }

    const chess = new Chess(testParams.fen)
    const moves = chess.moves(
      { square: testParams.square, verbose: testParams.verbose },
      testParams.type
    )
    expect(moves).toEqual(testParams.moves)
  })

  test('melee attacks for rook with own piece in front, must NOT jump over', () => {
    const testParams = {
      fen: 'rnbqkbnr/ppppp3/5p1p/6P1/8/7N/PPPPPPP1/RNBQKB1R w KQkq - 0 4',
      square: 'h1',
      verbose: false,
      type: 'melee',
      moves: ['Rh2', 'Rg1'],
    }

    const chess = new Chess(testParams.fen)
    const moves = chess.moves(
      { square: testParams.square, verbose: testParams.verbose },
      testParams.type
    )
    expect(moves).toEqual(testParams.moves)
  })
})

describe('test range moves for ROOK from initial starting fen', () => {
  test('range moves from starting fen, should be able to attack 2 pieces', () => {
    const testParams = {
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      square: 'h1',
      verbose: false,
      type: 'range',
      moves: ['Rxh7', 'Rxh8'],
    }

    const chess = new Chess(testParams.fen)
    const moves = chess.moves(
      { square: testParams.square, verbose: testParams.verbose },
      testParams.type
    )
    console.log('moves for ROOK range for default position', moves)
    expect(moves).toEqual(testParams.moves)
  })
})

describe('generate moves for QUEEN', () => {
  test('verbose false, range moves for QUEEN', () => {
    const chess = new Chess(
      'rnb1k1nr/pppp1qpp/4p3/5p2/4P3/b4Q2/1PPP1PPP/RNB1KBNR w kq - 4 6'
    )
    const moves = chess.moves(
      {
        square: 'f3',
        verbose: false,
      },
      'range'
    )
    console.log('moves verbose false range attack for QUEEN : ', moves)
    expect(moves).toEqual([
      'Qf4',
      'Qxf5',
      'Qg4',
      'Qh5',
      'Qg3',
      'Qh3',
      'Qe2',
      'Qd1',
      'Qe3',
      'Qd3',
      'Qc3',
      'Qb3',
      'Qxa3',
    ])
  })
  test('verbose false, range moves for QUEEN', () => {
    const chess = new Chess(
      'rnb1k1nr/pppp1qpp/4p3/5p2/4P3/b4Q2/1PPP1PPP/RNB1KBNR w kq - 4 6'
    )
    const moves = chess.moves(
      {
        square: 'f3',
        verbose: false,
      },
      'melee'
    )
    console.log('moves verbose false range attack for QUEEN : ', moves)
    expect(moves).toEqual([
      'Qf4',
      'Qxf5',
      'Qg4',
      'Qh5',
      'Qg3',
      'Qh3',
      'Qe2',
      'Qd1',
      'Qe3',
      'Qd3',
      'Qc3',
      'Qb3',
      'Qxa3',
    ])
  })
})
