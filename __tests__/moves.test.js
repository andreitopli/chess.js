if (typeof require != 'undefined') {
  var Chess = require('../chess').Chess
}

describe('Single Square Move Generation for Rook with Attack over other pieces', () => {
  const positions = [
    {
      fen: 'rnb1kbnr/ppp1pp1p/8/6P1/1q1p3R/4P1P1/PPPP1P2/RNBQKBN1 w Qkq - 0 6',
      square: 'h4',
      verbose: false,
      moves: [
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
      ],
    },
    {
      fen: 'rnb1kbnr/ppp1pp1p/8/6P1/1q1p3R/4P1P1/PPPP1P2/RNBQKBN1 w Qkq - 0 6',
      square: 'h4',
      verbose: true,
      moves: [
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
      ],
    },
  ]

  positions.forEach((position) => {
    const chess = new Chess(position.fen)
    test(position.fen + ' ' + position.square, () => {
      const moves = chess.moves({
        square: position.square,
        verbose: position.verbose,
      })
      console.log('moves ', moves)
      expect(moves).toEqual(position.moves)
    })
  })
})
