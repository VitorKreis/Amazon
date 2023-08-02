function Photo({ url, name }) {
  return (
        <img src={`../uploads/${url}`} alt={name} />

  );
}

export default Photo;
