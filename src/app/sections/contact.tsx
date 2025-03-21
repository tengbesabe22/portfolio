import { Button } from "@mui/material";

export const Contact = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center my-20">
      <h1 className="text-8xl font-extrabold text-center">
        Let’s grab some virtual coffee and chat!
      </h1>
      <p className="text-center max-w-2xl">
        With five years of experience in the blockchain space, I still feel like there’s always more to learn—and that’s what drives me. I’m constantly exploring new and exciting developments in the field. I love projects that showcase clever use of tools and technology. Feel free to browse my portfolio, and if you like what you see, let’s connect!
      </p>
      <div className="bg-black p-[1px] rounded-[12px]"> 
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: '#FF6B6B',
            color: 'black',
            borderRadius: '12px',
            border: '1px solid black',
            transform: 'translate(-2px, -2px)',
            '&:hover': {
              backgroundColor: '#FF6B6B',
            }
          }}
          href="mailto:besabeteng@gmail.com"
        >
          Contact me
        </Button>
      </div>
    </div>
  )
};
