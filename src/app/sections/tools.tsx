import Image from "next/image";

type Tech = {
  logo: {
    url: string;
    alt: string;
  };
  name: string;
};

export const Tools = () => {
  const techs: Tech[] = [
    {
      name: 'Typescript',
      logo: {
        url: '/assets/tools/typescript.svg',
        alt: 'typescript',
      },
    },
    {
      name: 'Solidity',
      logo: {
        url: '/assets/tools/solidity.svg',
        alt: 'solidity',
      },
    },
    {
      name: 'Next.js',
      logo: {
        url: '/assets/tools/next.svg',
        alt: 'next',
      },
    },
    {
      name: 'PostgreSQL',
      logo: {
        url: '/assets/tools/postgre.svg',
        alt: 'postgre',
      },
    },
    {
      name: 'GraphQL',
      logo: {
        url: '/assets/tools/graphql.svg',
        alt: 'graphql',
      },
    },
    {
      name: 'Git',
      logo: {
        url: '/assets/tools/git.svg',
        alt: 'git',
      },
    },
    {
      name: 'node.js',
      logo: {
        url: '/assets/tools/node.svg',
        alt: 'node',
      },
    },
    {
      name: 'Tailwind',
      logo: {
        url: '/assets/tools/tailwind.svg',
        alt: 'tailwind',
      },
    },
    {
      name: 'Ethereum',
      logo: {
        url: '/assets/tools/ethereum.svg',
        alt: 'ethereum',
      },
    },
    {
      name: 'Polygon',
      logo: {
        url: '/assets/tools/polygon.svg',
        alt: 'polygon',
      },
    },
    {
      name: 'Metamask',
      logo: {
        url: '/assets/tools/metamask.svg',
        alt: 'matamask',
      },
    },
    {
      name: 'Docker',
      logo: {
        url: '/assets/tools/docker.svg',
        alt: 'docker',
      },
    },
    {
      name: 'AWS',
      logo: {
        url: '/assets/tools/aws.svg',
        alt: 'aws',
      },
    },
    {
      name: 'Shopify',
      logo: {
        url: '/assets/tools/shopify.svg',
        alt: 'shopify',
      },
    },
    {
      name: 'NX',
      logo: {
        url: '/assets/tools/nx.svg',
        alt: 'nx',
      },
    },
  ];

  return (
    <div className="flex flex-col gap-14">
      <div className="flex gap-4 justify-center items-center">
        <Image
          src="/assets/tools.svg"
          alt="tools"
          width={52}
          height={52}
        />
        <h2 className="text-3xl font-extrabold">Tools</h2>
      </div>
      <div className="flex flex-col items-center gap-4">
        {[6, 5, 4].map((itemsPerRow, rowIndex) => (
          <div key={rowIndex} className="flex gap-4">
            {techs
              .slice(
                rowIndex === 0 ? 0 : [6, 5].slice(0, rowIndex).reduce((a, b) => a + b, 0),
                [6, 5].slice(0, rowIndex).reduce((a, b) => a + b, 0) + itemsPerRow
              )
              .map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-4 rounded-lg border border-black border-r-4 border-b-4 justify-between"
                >
                  <div className="flex items-center justify-center flex-1">
                    <Image
                      src={tech.logo.url}
                      alt={tech.logo.alt}
                      width={80}
                      height={80}
                    />
                  </div>
                  <span className="text-sm">{tech.name}</span>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}