import { useState } from "react";

const d1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsum
delectus odio doloribus mollitia dicta corrupti commodi eaque doloremque
accusamus asperiores debitis quae quas quaerat obcaecati eveniet alias
atque facilis quos, beatae architecto non molestias labore. Tempora
voluptas, illum dolorum reiciendis voluptate, aliquid officiis placeat
quia reprehenderit in nihil officia laborum earum. Autem corrupti
numquam ipsam necessitatibus, commodi ipsa iure perspiciatis est eum
maiores veniam ut aperiam sapiente magnam doloribus. Temporibus repellat
eius placeat mollitia officiis qui officia laborum quaerat, ipsum
laboriosam corporis, dignissimos dolore, explicabo possimus culpa
voluptatum esse eveniet quas autem atque? Tempore velit id voluptatem
numquam praesentium.`;
const d2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sint,
praesentium quis vitae magni suscipit, officiis quasi, cumque libero qui
quibusdam vero sequi odio! Nesciunt recusandae accusantium suscipit
facere qui, beatae ipsum, doloremque exercitationem tenetur quae libero
deleniti distinctio deserunt magnam eaque! Impedit eum incidunt aperiam
pariatur laudantium optio ipsa quidem? Repellat non illo quidem eaque
minima, veritatis iusto adipisci veniam quo iure minus sint error
molestiae. Doloremque accusamus, omnis consequuntur accusantium cum
minima maiores sequi repellat architecto perspiciatis dolorem ratione!
Ipsum natus odit corporis excepturi repudiandae debitis consequatur,
nobis odio, quidem modi repellendus labore. Perspiciatis asperiores
nobis aliquid non.
`;

export default function Sample() {
  const [show, setShow] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const toggleExpanded = () => {
    setShow(!show);
  };

  return (
    <div>
      <p>
        {show ? d1 : `${d1.slice(0, 100)}...  `}

        <span
          onClick={toggleExpanded}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            color: show ? "red" : "blue",
            cursor: "pointer",
            textDecoration: isHovered ? "underline" : "none",
          }}
        >
          {show ? " show less" : "show more"}
        </span>
      </p>
    </div>
  );
}
