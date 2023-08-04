import PropTypes from 'prop-types'

const PrimerComponente = ( {titulo, subtitulo} ) => {

  return (
    <>
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
    </>
  );
};

export default PrimerComponente;

PrimerComponente.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired
}

PrimerComponente.defaultProps = {
  titulo: 'Curso de React',
  subtitulo: 'Sección de Props'
}
