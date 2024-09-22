
export function errorHandler(err, req, res, next) {
    console.error('Internal Server Error:', err);

    res.status(500).json({
        error: 'Ocorreu um erro interno. Tente novamente mais tarde.'
    });
}
