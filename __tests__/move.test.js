if (typeof require != 'undefined') {
  var Chess = require('../chess').Chess
}

describe('testing make_move_from_distance function', () => {
  test('rook should take pawn from distance', () => {
    const chess = new Chess(
      'rnbqkbnr/pppppppp/8/8/7P/8/PPPPPPP1/RNBQKBNR b KQkq h3 0 1'
    )
    const moves = chess.moves(
      {
        square: 'h8',
        verbose: false,
      },
      'range'
    )
    console.log('moves for h8', moves)
    chess.moveFromDistance({ from: 'h8', to: 'h4' }, {}, 'range')

    console.log('new fen', chess.fen())
    expect(chess.fen()).toEqual(
      'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPP1/RNBQKBNR w KQkq - 0 2'
    )
    console.log('new history', chess.history())
  })
})
