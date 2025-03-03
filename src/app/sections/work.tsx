import Image from "next/image"

type Experience = {
  company: string;
  role: string;
  logo: {
    url: string;
    alt: string;
  };
  description: string;
};

export const Work = () => {

  const experiences: Experience[] = [
    {
      company: 'Masterfile Co.',
      role: 'Solidity Blockchain Engineer | Full Stack Engineer',
      logo: {
        url: '/assets/masterfile.svg',
        alt: 'masterfile',
      },
      description: 'Developed backend services using an event-driven architecture with CQRS. Led the development of a decentralized exchange for blockchain assets utilizing OpenZeppelin Seaport. Co-developed an ERC1155 factory pattern with Arweave storage for media organizations, drops, and on-chain token ownership.',
    },
    {
      company: 'BreederDAO.io',
      role: 'Freelance Full Stack Blockchain Engineer',
      logo: {
        url: '/assets/breederdao.svg',
        alt: 'breederdao',
      },
      description: 'Integrated Metamask into the frontend for blockchain-based gaming skins. Developed and tested ERC721 and ERC20 in-game assets for Axie Infinity and DigiDaigaku. Led R&D on a bridge system for secure token transfers between Ethereum and Polygon.',
    },
    {
      company: 'UBX Philippines Inc.',
      role: 'Blockchain Software Engineer',
      logo: {
        url: '/assets/ubx.svg',
        alt: 'ubx',
      },
      description: 'Developed an Ethereum stablecoin for rural bank remittances, processing over PHP 1B ($20M). Led the architecture of a crypto-to-fiat payment gateway. Built an asset tokenization platform for real estate and bonds. Created a blockchain-based logistics tracking system for shipment transparency.',
    },
  ];

  return (
    <div className="flex flex-col gap-14">
      <div className="flex gap-4 justify-center items-center">
        <Image
          src="/assets/folder.svg"
          alt="work-folder"
          width={52}
          height={52}
        />
        <h2 className="text-3xl font-extrabold">Work</h2>
      </div>
      <div className="flex flex-col gap-10">
        {experiences.map((experience) => (
          <div className="flex flex-col gap-4" key={experience.company}>
            <div className="flex gap-2">
              <Image
                src={experience.logo.url}
                alt={experience.logo.alt}
                width={50}
                height={50}
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold">{experience.company}</span>
                <span>{experience.role}</span>
              </div>
            </div>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}