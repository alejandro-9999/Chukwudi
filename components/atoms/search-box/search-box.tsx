import React from "react";
import Image from 'next/image';
import Icon from "../../../assets/icons/search-icon.svg";

export default function SearchBox() {

  return (
    <div className="search-box">
      <span>
        <Image className="search-icon" src={Icon} alt="Picture of the author" />
      </span>
      <input type="text" placeholder="Search"/>

    </div>);
}