

export default function CardAbout () {
    const diglets = [
        {
          id: 1,
          country: "Italia",
          digletTypes: [
            {
              type: "Diglett Classico",
              photo: "https://example.com/diglett-classico.jpg",
            },
            {
              type: "Diglett di Alola",
              photo: "https://example.com/diglett-alola.jpg",
            },
          ],
        },
        {
          id: 2,
          country: "Giappone",
          digletTypes: [
            {
              type: "Diglett di Montagna",
              photo: "https://example.com/diglett-montagna.jpg",
            },
            {
              type: "Diglett Dorato",
              photo: "https://example.com/diglett-dorato.jpg",
            },
          ],
        },
        {
          id: 3,
          country: "Stati Uniti",
          digletTypes: [
            {
              type: "Diglett Selvatico",
              photo: "https://example.com/diglett-selvatico.jpg",
            },
            {
              type: "Diglett Shiny",
              photo: "https://example.com/diglett-shiny.jpg",
            },
          ],
        },
      ];
      
     // console.log(diglets)
    
      
    return(
        <div>
            {diglets.map(diglet => (
                console.log(diglet)
            ))}
        </div>

    )
}