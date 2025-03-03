'use client';

import { ArrowBackIos, ArrowForwardIos, Link as LinkIcon } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

type Project = {
  thumbnail: {
    url: string;
    alt: string;
  };
  name: string;
  link: string;
  description: string;
};

export const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const projects: Project[] = [
    {
      thumbnail: {
        url: '/assets/projects/gonkbonk.svg',
        alt: 'gonkbonk',
      },
      name: 'Masterfile GonkBonk',
      link: 'https://gonkbonk.com/',
      description: 'An e-commerce platform designed for superfans. Built on a Node.js backend with a CQRS event-driven architecture, the frontend leverages Next.js and Tailwind for a seamless user experience. The platform is also powered by Payload CMS.',
    },
    {
      thumbnail: {
        url: '/assets/projects/masterfile.svg',
        alt: 'masterfile',
      },
      name: 'Masterfile NFT Suite',
      link: 'https://masterfile.co',
      description: 'A digital media platform empowering producers to create their Masterfile™ (NFT with OpenDRM), managing assets, royalties, and additional drop content. Built with Next.js, Express, a CQRS-based backend, GraphQL, and PostgreSQL. NFTs are developed in Solidity, deployed on Polygon, and securely stored on Arweave for permanence.',
    },
    {
      thumbnail: {
        url: '/assets/projects/phx.svg',
        alt: 'stablecoin',
      },
      name: 'Peso-backed PHX Stablecoin',
      link: 'https://bitpinas.com/news/unionbank-launches-cryptocurrency-stablecoin-phx/',
      description: 'An Ethereum stablecoin facilitating remittances across rural banks in the Philippines, processing over PHP 1 billion ($20M) in transactions. Built with an Express.js REST API and MySQL backend.',
    },
    {
      thumbnail: {
        url: '/assets/projects/xlog.svg',
        alt: 'xlog',
      },
      name: 'Blockchain Logistic Tracking',
      link: 'https://newsbytes.ph/2019/05/25/unionbank-rolls-out-blockchain-based-logistics-platform/',
      description: 'Developed a blockchain-powered tracking system for XLOG using Solidity and Node.js REST API, enhancing delivery visibility across users, trucking providers, and logistics partners for greater transparency and efficiency.',
    }
  ];
  return (
    <div className="flex flex-col gap-14">
      <div className="flex gap-4 justify-center items-center">
        <Image
          src="/assets/hashtag.svg"
          alt="project-hashtag"
          width={52}
          height={52}
        />
        <h2 className="text-3xl font-extrabold">Projects</h2>
      </div>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects.map((project) => (
              <div className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33%] pl-4" key={project.name}>
                <div className="flex flex-col gap-4 border border-black border-r-4 border-b-4 rounded-lg p-4 mr-4 h-[490px]">
                  <Image
                    src={project.thumbnail.url}
                    alt={project.thumbnail.alt}
                    width={340}
                    height={190}
                    className="w-full h-[190px] object-contain"
                  />
                  <div className="flex w-full items-center justify-center">
                    <Link
                      href={project.link}
                      className="flex items-center gap-2"
                    >
                      <h3 className="text-xl font-bold m-0">{project.name}</h3>
                      <LinkIcon />
                    </Link>
                  </div>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute left- top-1/2 -translate-y-1/2 bg-white p-2 rounded shadow-md hover:bg-gray-100 transition-colors"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <ArrowBackIos />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded shadow-md hover:bg-gray-100 transition-colors"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <ArrowForwardIos />
        </button>
      </div>
    </div>
  )
};