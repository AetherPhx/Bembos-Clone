export const ItemCardMenu = ({ title, imageUrl }) => {

  const backImage = {
    '--background-image': `url(${imageUrl})`
  };

  return (

    <section>
      <div className="CardMenu-container">
        <div className="CardMenu-item" style={backImage}>
          <h1 className="CardMenu-title Font-border-red">{title}</h1>
        </div>
        <button className="CardMenu-button Font-button-third">Ver todos</button>
      </div>
    </section>

  )
};

