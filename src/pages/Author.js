import React from "react";
import "../../src/App.css";
import skeletonRight from "../images/skeleton_right.jpg";
import skeletonLeft from "../images/skeleton_left.jpg";
import four_kerries_no_frame from "../images/four_kerries_no_frame.jpg";
import photo_of_bc_show from "../images/photo_of_bc_show.jpg";
import litterPhoto from "../images/litter_photo.jpg";
import bookCover from "../images/book_cover.PNG";
import plaqueCropped from "../images/Gardiner_plaque_cropped.jpg";
import BackArrowSVG from "../images/backarrow.svg";
import { Link } from "react-router-dom";

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
        <Link className="actionButton backButton" to="/">
          {/* <a className="actionButton backButton"> */}
          <img src={BackArrowSVG} alt="ArrowIcon" /> Back
          {/* </a> */}
        </Link>

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
