const Team = () => {
  const team = [
    {
      name: "Mariana Vaz Marques",
      post: "Chief Executive Officer & Chief Legal Officer",
      mail: "mariana.vazmarques@bhivevisa.com",
      url: "/team/mariana.jpeg",
    },
    {
      name: "Adriana Spanholi",
      post: "Chief Distribution Officer",
      mail: "adriana.spanholi@bhivevisa.com",
      url: "/team/adriana.jpeg",
    },
    {
      name: "Guilherme Romão",
      post: "International Project Manager",
      mail: "guilherme.romao@bhivevisa.com",
      url: "/team/guilherme.png",
    },
    {
      name: "Rachel Sá",
      post: "Legal Counsel",
      mail: "rachel.sa@bhivevisa.com",
      url: "/team/rachel.png",
    },
    {
      name: "Inês Damião",
      post: "International Client Assistant",
      mail: "ines.damiao@bhivevisa.com",
      url: "/team/inês.png",
    },
    {
      name: "Marta Oliveira",
      post: "Legal Assistant",
      mail: "marta.oliveira@bhivevisa.com",
      url: "/team/marta.jpg",
    },
  ];
  return (
    <div className="team p-4">
      <h1 className="py-4">OUR TEAM</h1>
      <div className="row g-0">
        {team.map((person, key) => (
          <div className="col-md-4" key={key}>
            <div className="card-container p-4">
              <div className="card-body">
                <div
                  className="person"
                  style={{ backgroundImage: `url(${person.url})` }}
                />
                <div className="card-title">{person.name}</div>
                <div className="card-text">{person.post}</div>
                <div className="card-text">{person.mail}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
