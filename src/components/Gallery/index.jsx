import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import { useOnScreen } from "../hooks/useOnScreen";
import cn from 'classnames';
import './style.scss';

const images = [
    {
        src: "https://scontent.fsyd2-1.fna.fbcdn.net/v/t1.6435-9/161899322_1129114337514121_298105836141170456_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a26aad&_nc_ohc=9VqOZgQKQJ4AX89LYG3&_nc_ht=scontent.fsyd2-1.fna&oh=00_AT8cU_0mwYV9gk3FIzLS_gsPx_Cfz-tS1coP7DEU_LVSAg&oe=63067A07",
        title: "Title of the image",
        subtitle: "Description of the image",
        category: "What it was for",
    },
    {
        src: "https://scontent.fsyd2-1.fna.fbcdn.net/v/t1.6435-9/160417404_1127775684314653_4052017155378761464_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=pJYz5Y52k_wAX9HrIyj&_nc_ht=scontent.fsyd2-1.fna&oh=00_AT8eVzV9ZCF_HtQlzhU_9ZUK48XdCivKzQmaMt5IlxfMOA&oe=6306C2CD",
        title: "XXXX",
        subtitle: "XXXX",
        category: "XXXX",
    },
    {
        src: "https://scontent.fsyd2-1.fna.fbcdn.net/v/t1.6435-9/136738020_1087295865029302_9129978281900897649_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_ohc=pUoAFDHYvkQAX-qdcmD&tn=r08aHmpSsYhk59F-&_nc_ht=scontent.fsyd2-1.fna&oh=00_AT9LdF0shUWQPw2NiMuATsKm0nWIWPL97ndLMGeCMVplyg&oe=630602F5",
        title: "XXXX",
        subtitle: "XXXX",
        category: "XXXX",
    },
    {
        src: "https://scontent.fsyd2-1.fna.fbcdn.net/v/t1.6435-9/82106562_817576175334607_6428823545345736704_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9267fe&_nc_ohc=69F1ipvQTqMAX_bZb67&_nc_ht=scontent.fsyd2-1.fna&oh=00_AT8FfPLQMLn6EvMW03Zq0wFCgl3eYdbLSwUF_QchpyMLcQ&oe=63065A55",
        title: "XXXX",
        subtitle: "XXXX",
        category: "XXXX",
    }
]

function GalleryItem({
    src,
    category,
    subtitle,
    title,
    updateActiveImage,
    index,
  }) {
    const ref = useRef(null);
  
    const onScreen = useOnScreen(ref, 0.5);
    
    useEffect(() => {
      if (onScreen) {
        updateActiveImage(index);
      }
    }, [onScreen, index]);
  
    return (
      <div
        className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
        ref={ref}
      >
        <div/>
        <div className={"gallery-item"}>
          <div className="gallery-item-info">
            <h1 className="gallery-info-title">{title}</h1>
            <h2 className="gallery-info-subtitle">{subtitle}</h2>
            <p className="gallery-info-category">{category}</p>
        </div>
        <div
            className="gallery-item-image"
            style={{ backgroundImage: `url(${src})` }}
        ></div>
        </div>
        <div/>
      </div>
    );
  }
  
  export function Gallery({ src }) {
    const [activeImage, setActiveImage] = useState(1);
  
    const ref = useRef(null);
  
    useEffect(() => {
        let container = document.querySelector(".gallery")
        let sections = gsap.utils.toArray(".gallery-item-wrapper");
  
        let scrollTween = gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            start: "top top",
            trigger: '.gallery',
            scroller: "#main-container",
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            end: `+=${container.offsetWidth}`,
          },
        });

        gsap.to('.gallery', {
            scrollTrigger: {
                trigger: '.gallery',
                containerAnimation: scrollTween,
                start: 'top top',
                end: 'top top'
            }
        })
        ScrollTrigger.refresh();
    }, []);
  
    const handleUpdateActiveImage = (index) => {
      setActiveImage(index + 1);
    };
  
    return (
      <section data-scroll-section className="section-wrapper gallery-wrap">
  
        <div className="gallery" ref={ref}>
          <div className="gallery-counter">
            <span>{activeImage}</span>
            <span className="divider"></span>
            <span>{images.length}</span>
          </div>
          {images.map((image, index) => (
            <GalleryItem
              key={src}
              index={index}
              {...image}
              updateActiveImage={handleUpdateActiveImage}
            />
          ))}
        </div>
      </section>
    );
  }