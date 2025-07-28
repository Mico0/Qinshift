interface PassengerCardProps {
  passengerName: string;
  budget: string;
  comments: string;
}

export default function PassengerCard({
  passengerName,
  budget,
  comments,
}: PassengerCardProps) {
  return (
    <div className="profile-card w-[250px] md:w-[400px] m-auto rounded-md shadow-xl overflow-hidden z-[100] relative snap-start shrink-0 bg-[var(--papaya)] flex flex-col items-center justify-center gap-4 transition-all duration-300 group">
      <div className="avatar w-full pt-5 flex items-center justify-center flex-col gap-4">
        <div className="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-[var(--tea-green)] after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[var(--tea-green)] before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300">
          <svg
            className="size-36 z-40 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
            fill="var(--cornsilk)"
          >
            <path d="M16 31C7.729 31 1 24.271 1 16S7.729 1 16 1s15 6.729 15 15-6.729 15-15 15zm0-28C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3z" />
            <circle cx="16" cy="15.133" r="4.267" />
            <path d="M16 30c2.401 0 4.66-.606 6.635-1.671-.425-3.229-3.18-5.82-6.635-5.82s-6.21 2.591-6.635 5.82A13.935 13.935 0 0 0 16 30z" />
          </svg>
          <div className="absolute bg-[var(--tea-green)] z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0"></div>
        </div>
      </div>
      <div className="headings *:text-left *:leading-4">
        <p className="my-1 text-xl font-semibold text-[#434955]">
          Passenger: {passengerName}
        </p>
        <p className="my-2 text-sm font-semibold text-[#434955]">
          Budget: {budget}$
        </p>
        <p className="my-2 text-sm font-semibold text-[#434955]">
          Comments: {comments}
        </p>
      </div>

      <hr className="w-full group-hover:h-5 h-3 bg-[var(--tea-green)] group-hover:transition-all group-hover:duration-300 transition-all duration-300" />
    </div>
  );
}
