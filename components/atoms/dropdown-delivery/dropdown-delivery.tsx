import Image from "next/image";


import TimeIcon from '../../../assets/icons/149316.svg';



export default function DropdownDelivery() {
  return (
    <div className="dropdown-delivery">
      
      <div className="time-icon">
        <Image src={TimeIcon} width={"25px"} color={"white"}/>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 412 232"
      >
        <path
          d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
          fill="white"
        />
      </svg>
      <select>
        <option>Delivery: Now</option>
      </select>
    </div>
  );
}
