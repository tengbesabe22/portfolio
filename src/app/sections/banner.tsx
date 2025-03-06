import { Download } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const Banner = () => {
  return (
    <div className="flex">
      {/* About */}
      <div className="flex flex-col w-3/5 gap-6">
        <div className="flex flex-col gap-6">
          <p className="text-xl">Hi, My name is Teng Besabe</p>
          <span className="text-7xl font-extrabold">Blockchain<br/> Engineer +</span>
          <p className="max-w-[70%]">
            Blockchain and full-stack engineer specializing
            in smart contracts, decentralized applications,
            and scalable backend systems.
          </p>
        </div>
        <div className="flex gap-2">
          <Link href="https://www.linkedin.com/in/teng-besabe">
            <Image
              src="/assets/linkedin.svg"
              alt="linkedin-logo"
              width={39}
              height={39}
            />
          </Link>
          <Link href="https://github.com/tengbesabe22">
            <Image
              src="/assets/github.svg"
              alt="linkedin-logo"
              width={39}
              height={39}
            />
          </Link>
          <div className="bg-black p-[1px] rounded-[12px]">
            <a href="/Lester Besabe - CV.pdf" download>
              <Button 
                variant="contained" 
                // className="bg-teng-yellow rounded-[12px] text-black relative left-[-2px] top-[-2px] " 
                endIcon={<Download />}
                // sx={{ border: '1px solid black' }}
                sx={{ 
                  backgroundColor: '#F5CC44', // red-500 equivalent
                  color: 'black',
                  borderRadius: '12px',
                  border: '1px solid black',
                  transform: 'translate(-2px, -2px)',
                  '&:hover': {
                    backgroundColor: '#F5CC44', // red-600 for hover
                  }
                }}
              >
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
      {/* Photo */}
      <div className="flex items-center justify-center">
        <Image
          src="/assets/teng.svg"
          alt="teng"
          width={350}
          height={350}
        />
      </div>
    </div>
  )
};