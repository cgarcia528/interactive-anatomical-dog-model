import NavigationBar from "../NavigationBar";
import React from "react";
import styled from "styled-components";
import "../../src/App.css";
import skeletonRight from "../images/skeleton_right.jpg";
import skeletonLeft from "../images/skeleton_left.jpg";
import plaque from "../images/plaque.jpg";
import four_kerries_no_frame from "../images/four_kerries_no_frame.jpg";
import photo_of_bc_show from "../images/photo_of_bc_show.jpg";
import litterPhoto from "../images/litter_photo.jpg";
// import bookCover from "../images/book_cover.jpg";
import bookCover from "../images/book_cover.PNG";
import plaqueCropped from "../images/Gardiner_plaque_cropped.jpg";
import BackArrowSVG from "../images/backarrow.svg";
// Image Gallery Example https://www.freecodecamp.org/news/how-to-create-an-image-gallery-with-css-grid-e0f0fd666a5c/

export default function Author() {
  return (
    <React.Fragment>
      <h1 className="text-center">Catherine 'Casey' Gardiner, RN</h1>
      <p className="text-center">
        Author of <i>Dogs: an Atlas of Kinetic Anatomy</i>
      </p>
      <p className="fst-italic text-center">A passion to learn and to teach</p>

      {/* Picture CSS Grid section */}
      <div className="container">
        <a
          href="#"
          className="actionButton backButton"
          onClick={() => (window.location = "/home")}
        >
          <img src={BackArrowSVG} alt="ArrowIcon" /> Back
        </a>
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img
              src={litterPhoto}
              className="gallery__img"
              alt="Litter Photo"
            />
          </figure>
          <div className="gallery__item--2">
            {" "}
            Using observation and measurement by means of the “Record of
            Characteristics” (ROC) and associated database, Casey transformed
            the breeding of better dogs from an art to a science. <br /> <br />{" "}
            A mentor to many, she invited her students to learn through the
            course “Purebred Dogs” and through spirited discussions. <br />{" "}
            <br />
            {/* Her legacy can be found internationally in improved breed standards,
            books such as Dogs: an Atlas of Kinetic Anatomy, continuing
            education of judges & breeders, and above all, in dogs with
            balanced, properly structured gait. */}
          </div>

          <figure className="gallery__item gallery__item--3">
            <img
              src={four_kerries_no_frame}
              className="gallery__img"
              alt="4 Kerries No Frame"
            />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img
              src={skeletonRight}
              className="gallery__img"
              alt="Skeleton Right"
            />
          </figure>

          <figure className="gallery__item gallery__item--5">
            <img src={bookCover} className="gallery__img" alt="Photo of Book" />
          </figure>

          <figure className="gallery__item gallery__item--6">
            <img
              src={skeletonLeft}
              className="gallery__img"
              alt="Skeleton Left"
            />
          </figure>

          <figure className="gallery__item gallery__item--7">
            <img src={plaqueCropped} className="gallery__img" alt="Plaque" />
          </figure>

          <div className="gallery__item--8">
            {/* Her legacy can be found internationally in improved breed standards,
            books such as Dogs: an Atlas of Kinetic Anatomy, continuing
            education of judges & breeders, and above all, in dogs with
            balanced, properly structured gait.  */}
            The Kerry Blue Terrier Club of Canada is proud to recognize the many
            accomplishments of Casey Gardiner, including her extensive show
            record with her “Kerrycroft” Kerries and for her unique and
            pioneering work in canine structure and movement.
          </div>

          <figure className="gallery__item gallery__item--9">
            <img
              src={photo_of_bc_show}
              className="gallery__img"
              alt="Word Doc Katie Specs"
            />
          </figure>
        </div>
      </div>
    </React.Fragment>
  );
}
