import { Button, Dialog, DialogContent, DialogTitle, Divider, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { CloseIcon } from "./closeIcon";

interface customDialogProps {
    title: string;
    image: string;
    description: string;
    open: boolean;
    images?: string[]
    onClose: () => void;
    link: string
}



const CustomDialog: React.FC<customDialogProps> = ({ title, image, description, open, images, onClose, link }) => {
  const [loadedImages, setLoadedImages] = useState<boolean[]>([]);

  const handleImageLoad = (index: number) => {
      setLoadedImages((prev) => {
          const newLoadedImages = [...prev];
          newLoadedImages[index] = true;
          return newLoadedImages;
      });
  };
  return (
    <Dialog open={open} onClose={onClose} PaperProps={{ sx: { borderRadius: "20px", backgroundColor: '#F7F9F2' } }}>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        {title}
      </DialogTitle>
      <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#cc241d'
          }}
        >
          <CloseIcon/>
        </IconButton>
      <DialogContent dividers>
        <div>
          <img src={image} className="dialog-img"/>
          <Button href={link} target="_blank" className="go-to-button">Ir al sitio</Button>
        </div>
        <Typography>
          Puesto: desarrollador FullStack
        </Typography>
        <Divider sx={{marginTop: '2%', marginBottom: '2%'}}/>
        <Typography>
          {description}
        </Typography>
        {images && images.length > 0 && (
          <Carousel sx={{ borderRadius: "20px", marginTop: "3%" }}>
              {images.map((img, index) => (
                  <div 
                      key={index} 
                      style={{ width: "100%", height: "auto", overflow: "hidden", position: "relative" }}
                  >
                      <img
                          src={img}
                          alt={`Slide ${index}`}
                          className="carousel-img"
                          style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "10px",
                              display: loadedImages[index] ? "block" : "none",
                          }}
                          onLoad={() => handleImageLoad(index)}
                      />
                  </div>
              ))}
          </Carousel>
        )}
      </DialogContent>
    </Dialog>
    
  );
};

export default CustomDialog;