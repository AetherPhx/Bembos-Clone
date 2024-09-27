export const ItemCardMenu = ({ title, imageUrl }) => {

  const backImage = {
    '--background-image': `url(${imageUrl})`
  };

  return (

    <section>
      <div className="ItemCardMenu-container">
        <div className="ItemCardMenu-item" style={backImage}>
          <h1 className="ItemCardMenu-title Font-border-red">{title}</h1>
        </div>
        <button className="ItemCardMenu-button Font-button-third">Ver todos</button>
      </div>
    </section>

  )
};

